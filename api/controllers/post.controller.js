import prisma from "../lib/prisma.js"
import jwt from "jsonwebtoken"




export const getListings = async (req, res) => {
    try {
      // Pagination
      const limit = parseInt(req.query.limit) || 9;
      const startIndex = parseInt(req.query.startIndex) || 0;
  
      // Filtering parameters
      const type = req.query.type === undefined || req.query.type === "all" ? ["buy", "rent"] : [req.query.type];
      const property = req.query.property || undefined; // Property filter
      const city = req.query.city || undefined; // City filter
      const minPrice = parseInt(req.query.minPrice) || 0; // Minimum price
      const maxPrice = parseInt(req.query.maxPrice) || 10000000; // Maximum price
    //   const offer = req.query.offer ? req.query.offer === "true" : undefined; // Convert query param to Boolean
  
      // Search term (fuzzy search)
      const searchTerm = req.query.searchTerm || "";
  
      // Sorting parameters
      const sort = req.query.sort || "createdAt";
      const order = req.query.order || "desc";
  
      // Build query object
      const whereClause = {
        AND: [
          {
            OR: [
              { title: { contains: searchTerm, mode: "insensitive" } },
              { city: { contains: searchTerm, mode: "insensitive" } },
              { address: { contains: searchTerm, mode: "insensitive" } },
            ],
          },
          { type: { in: type } },
          property ? { property } : undefined,
          city ? { city } : undefined,
        //   offer !== undefined ? { offer } : undefined,
          { price: { gte: minPrice, lte: maxPrice } },
        ].filter(Boolean), // Remove undefined filters
      };
  
      // Query Prisma for listings
      const listings = await prisma.post.findMany({
        where: whereClause,
        orderBy: { [sort]: order },
        take: limit,
        skip: startIndex,
      });
  
      // Return the listings
      return res.status(200).json(listings);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };
  



export const listings = async (req, res) => {
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





export const addlisting  = async (req,res)=>{
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
        // res.status(200).json(newPost)
        res.status(200).json({
          post: newPost,
          message: "Listing Added Successfully!",
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Failed To Add Listing."});
    }
};



export const Updatelisting = async (req, res) => {
    const { id } = req.params; // ID of the post to update
    const body = req.body; // Incoming request body
    const tokenUserId = req.userId; // Extract the authenticated user ID
  
    try {
      // Fetch the post to ensure it exists and is owned by the current user
      const post = await prisma.post.findUnique({
        where: { id },
      });
  
      if (!post) {
        return res.status(404).json({ error: "Listing not found!" });
      }
  
      if (post.userId !== tokenUserId) {
        return res.status(403).json({ error: "Not authorized to update this post!" });
      }
  
      // Update the post and related post details
      const updatedPost = await prisma.post.update({
        where: { id },
        data: {
          ...body.postData, // Update post fields
          postDetail: {
            update: body.postDetail, // Update associated post details
          },
        },
      });
  
      res.status(200).json({ message: "Listing updated successfully!", updatedPost });
    } catch (error) {
      console.error("Error updating post:", error);
      res.status(500).json({ message: "Failed to update Listing." });
    }
  };
  

export const Deletelisting = async (req,res)=>{
    const id = req.params.id;
    const tokenUserId = req.userId;
    try {
        const post = await prisma.post.findUnique({
            where:{id},
        })

        if(post.userId !== tokenUserId){
            return res.status(403).json({error:"Not Authorized!"})
        }

        await prisma.post.delete({
            where:{id}

        });
        res.status(200).json({message:"Listing Deleted!"})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Failed To Delete Listing"});
    }
};