import prisma from "../lib/prisma.js"
import jwt from "jsonwebtoken"



// export const Posts  = async (req,res)=>{
//     const query = req.query;
//     console.log(query);
//     try {
//         const Posts = await prisma.post.findMany({
//             where:{
//                 city: query.city || undefined,
//                 type: query.type || undefined,
//                 property: query.property || undefined,
//                 bedroom: parseInt(query.bedroom) || undefined,
//                 price:{
//                     gte: parseInt(query.minPrice) ||0,
//                     lte: parseInt(query.maxPrice) ||10000000
//                 }
//             }
//         });
//         res.status(200).json(Posts);
        
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({message:"Failed To get Listings"});
//     }
// };


// export const getListings = async (req, res) => {
//     try {
//       // Pagination
//       const limit = parseInt(req.query.limit) || 9;
//       const startIndex = parseInt(req.query.startIndex) || 0;
//     //offer skip not add later
//     //furnished skip not add later
//     //parking skip not add later
  
//       // Filtering parameters
//       let type = req.query.type === undefined || req.query.type === "all" ? ['buy', 'rent'] : [req.query.type];
//       let property = req.query.property; // Property could be something like apartment, house, etc.
//       let city = req.query.city; // City filter
//       let minPrice = parseInt(req.query.minPrice) || 0;  // Min price filter
//       let maxPrice = parseInt(req.query.maxPrice) || 10000000;  // Max price filter
//        // Bedroom filter
  
//       // Search term (fuzzy search)
//       const searchTerm = req.query.searchTerm || '';
  
//       // Sorting parameters
//       const sort = req.query.sort || 'createdAt';
//       const order = req.query.order || 'desc';
  
//       // Build query object
//       const query = {
//         where: {
//           title: {
//             contains: searchTerm,
//             mode: 'insensitive', // Case insensitive search
//           },
//           type: {
//             in: type, // Pass the array or single value directly to 'in'
//           },
//           property: property || undefined,  // Handle property filtering
//           city: city || undefined,  // Handle city filtering
//           price: {
//             gte: minPrice,  // Greater than or equal to min price
//             lte: maxPrice,  // Less than or equal to max price
//           },
//         //   bedroom: bedroom || undefined,  // Handle bedroom filter
//         //   bethroom: bathroom || undefined,  // Handle bedroom filter
//         //   offer: offer || undefined,  // Handle bedroom filter
//         //   furnished: furnished || undefined,  // Handle bedroom filter
//         //   parking: parking || undefined,  // Handle bedroom filter
//         },
//         orderBy: {
//           [sort]: order, // Dynamic sorting based on the query parameter
//         },
//         take: limit, // Pagination limit
//         skip: startIndex, // Pagination start
//       };
  
//       // Query Prisma for listings with the given filters
//       const listings = await prisma.post.findMany(query);
  
//       // Return the listings
//       return res.status(200).json(listings);
  
//     } catch (error) {
//       console.log(error);
//     }
//   };
  


export const getListings = async (req, res) => {
    try {
      // Pagination
      const limit = parseInt(req.query.limit) || 9;
      const startIndex = parseInt(req.query.startIndex) || 0;
  
      // Filtering parameters
      let type = req.query.type === undefined || req.query.type === "all" ? ['buy', 'rent'] : [req.query.type];
      let property = req.query.property; // Property could be something like apartment, house, etc.
      let city = req.query.city; // City filter
      let minPrice = parseInt(req.query.minPrice) || 0;  // Min price filter
      let maxPrice = parseInt(req.query.maxPrice) || 10000000;  // Max price filter
  
      // Search term (fuzzy search)
      const searchTerm = req.query.searchTerm || '';
  
      // Sorting parameters
      const sort = req.query.sort || 'createdAt';
      const order = req.query.order || 'desc';
  
      // Build query object
      const query = {
        where: {
          OR: [
            {
              title: {
                contains: searchTerm,
                mode: 'insensitive', // Case insensitive search
              },
            },
            {
              city: {
                contains: searchTerm,
                mode: 'insensitive',
              },
            },
            {
              address: {
                contains: searchTerm,
                mode: 'insensitive',
              },
            },
          ],
          type: {
            in: type, // Pass the array or single value directly to 'in'
          },
          property: property || undefined,  // Handle property filtering
          city: city || undefined,  // Handle city filtering
          price: {
            gte: minPrice,  // Greater than or equal to min price
            lte: maxPrice,  // Less than or equal to max price
          },
        },
        orderBy: {
          [sort]: order, // Dynamic sorting based on the query parameter
        },
        take: limit, // Pagination limit
        skip: startIndex, // Pagination start
      };
  
      // Query Prisma for listings with the given filters
      const listings = await prisma.post.findMany(query);
  
      // Return the listings
      return res.status(200).json(listings);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal server error' });
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