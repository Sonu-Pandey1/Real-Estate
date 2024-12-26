import prisma from "../lib/prisma.js"
import jwt from "jsonwebtoken"



export const Posts  = async (req,res)=>{
    const query = req.query;
    console.log(query);
    try {
        const Posts = await prisma.post.findMany({
            where:{
                city: query.city || undefined,
                type: query.type || undefined,
                property: query.property || undefined,
                bedroom: parseInt(query.bedroom) || undefined,
                price:{
                    gte: parseInt(query.minPrice) ||0,
                    lte: parseInt(query.maxPrice) ||10000000
                }
            }
        });
        res.status(200).json(Posts);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Failed To get Posts"});
    }
};




export const Post = async (req, res) => {
    const id = req.params.id;

    try {
        // Fetch the post details
        const post = await prisma.post.findUnique({
            where: { id },
            include: {
                postDetail: true,
                user: {
                    select: {
                        username: true,
                        avatar: true,
                    },
                },
            },
        });

        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        // Check if the user is logged in
        const token = req.cookies?.token;

        if (token) {
            try {
                // Verify the JWT token
                const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);

                // Check if the post is saved by the logged-in user
                const saved = await prisma.savePost.findUnique({
                    where: {
                        userId_postId: {
                            postId: id,
                            userId: payload.id,
                        },
                    },
                });

                // Respond with the post data including the `isSaved` state
                return res.status(200).json({ ...post, isSaved: saved ? true : false });
            } catch (err) {
                console.error("JWT verification error:", err);
                return res.status(401).json({ message: "Invalid or expired token" });
            }
        }

        // If the user is not logged in, return the post data with `isSaved: false`
        return res.status(200).json({ ...post, isSaved: false });

    } catch (error) {
        console.error("Error fetching post:", error);
        res.status(500).json({ message: "Failed to fetch post" });
    }
};





export const addPost  = async (req,res)=>{
    const body = req.body
    const tokenUserId = req.userId;
    // console.log(tokenUserId) //not getting 
    try {
        // console.log("it working ")
        const newPost = await prisma.post.create({
            data:{
                ...body.postData,
                // userId:tokenUserId,
                user: {
          connect: { id: tokenUserId }, // Connect existing user
        },
                postDetail:{
                    create:body.postDetail,
                }
            }
        })
        res.status(200).json(newPost)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Failed To Add Post"});
    }
};




// todo still not apply btn to update listing do it later for this create updatelisting page and fetch the cutrrent data and show and ability to modify like update user  .
export const UpdatePost  = async (req,res)=>{
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Failed To Update Post"});
    }
};



// todo still not apply btn to delete listing do it later .
export const DeletePost = async (req,res)=>{
    const id = req.params.id;
    const tokenUserId = req.userId;
    try {
        const post = await prisma.post.findUnique({
            where:{id},
        })

        if(post.userId !== tokenUserId){
            return res.status(403).json({message:"Not Authorized!"})
        }

        await prisma.post.delete({
            where:{id}

        });
        res.status(200).json({message:"Post Deleted!"})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Failed To Delete Post"});
    }
};