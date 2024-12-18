import prisma from "../lib/prisma.js"




export const Posts  = async (req,res)=>{
    try {
        const Posts = await prisma.post.findMany();
        res.status(200).json(Posts);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Failed To get Posts"});
    }
};




export const Post  = async (req,res)=>{
    const id = req.params.id
    try {
        const Post = await prisma.post.findUnique({
            where:{id},
            include:{
                postDetail:true,
                user:{
                    select:{
                        username:true,
                        avatar:true
                    }
                }
            }
        });
        res.status(200).json(Post);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Failed To get Post"});
    }
};





export const addPost  = async (req,res)=>{
    const body = req.body
    const tokenUserId = req.userId;
    console.log(tokenUserId) //not getting 
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





export const UpdatePost  = async (req,res)=>{
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Failed To Update Post"});
    }
};




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