import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";


export const getListings = async (req, res) => {
  try {
    // Pagination parameters
    const limit = Math.max(1, parseInt(req.query.limit) || 9);
    const startIndex = Math.max(0, parseInt(req.query.startIndex) || 0);

    // Filters
    const listingType =
      req.query.listingType === "all" || !req.query.listingType
        ? ["sell", "rent/lease"]
        : [req.query.listingType];

    const propertyType = req.query.propertyType || undefined;
    const buildingType = req.query.buildingType || undefined;
    const city = req.query.city || undefined;
    const minPrice = Number(req.query.minPrice) || 0;
    const maxPrice = Number(req.query.maxPrice) || 10000000;
    const searchTerm = req.query.searchTerm?.trim() || "";

    // Sorting options
    let sortObj = { createdAt: "desc" };

    if (req.query.sort === "oldest") {
      sortObj = { createdAt: "asc" };
    } else if (req.query.sort === "popular") {
      sortObj = { views: "desc" };
    }

    // Build the WHERE clause for Prisma query
    const whereClause = {
      AND: [
        searchTerm
          ? {
              OR: [
                { propertyName: { contains: searchTerm, mode: "insensitive" } },
                { state: { contains: searchTerm, mode: "insensitive" } },
                { city: { contains: searchTerm, mode: "insensitive" } },
                { address: { contains: searchTerm, mode: "insensitive" } },
              ],
            }
          : null,

        // { listingType: { in: listingType } },

        // propertyType ? { propertyType } : null,

        // buildingType ? { buildingType } : null,

        // city ? { city } : null,

        // { price: { gte: minPrice, lte: maxPrice } },
        //todo ---- need to resolve this issue issues is while appling filters this is not working !

        req.query.sort === "trending"
          ? { createdAt: { gte: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7) } }
          : null,
      ].filter(Boolean),
    };

    console.log("Query:", JSON.stringify(whereClause, null, 2)); // Debugging

    // Prisma query to fetch listings with pagination and sorting
    const listings = await prisma.post.findMany({
      where: whereClause,
      orderBy: sortObj,
      take: limit,
      skip: startIndex,
    });

    return res.status(200).json(listings);
  } catch (error) {
    console.error("Error fetching listings:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// Fetch All Listings Without Filters (For Testing)
export const getAllListings = async (req, res) => {
  try {
    const listings = await prisma.post.findMany();
    return res.status(200).json(listings);
  } catch (error) {
    console.error("Error fetching all listings:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};


export const Deletelisting = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.post.delete({ where: { id } });

    return res.status(200).json({ message: "Listing deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const listings = async (req, res) => {
  try {
    const { id } = req.params;

    const listing = await prisma.post.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            username: true, // Fix: Ensure this field is selected
            email: true,
            avatar: true,
          },
        },
      },
    });

    if (!listing) {
      return res.status(404).json({ message: "Listing not found" });
    }

    return res.status(200).json(listing);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const Updatelisting = async (req, res) => {
  try {
    const { id } = req.params;
    const { postData, images } = req.body;  // Extract postData correctly from the request body

    console.log("Received data to update:", postData);

    // Handle optional fields like lat/long to set null if empty strings are passed
    if (postData.lat === '') postData.lat = null;
    if (postData.long === '') postData.long = null;

    // Ensure amenities and nearbyPlaces are arrays (in case they are sent as strings or incorrectly formatted)
    if (postData.amenities && !Array.isArray(postData.amenities)) {
      postData.amenities = JSON.parse(postData.amenities);
    }

    if (postData.nearbyPlaces && !Array.isArray(postData.nearbyPlaces)) {
      postData.nearbyPlaces = JSON.parse(postData.nearbyPlaces);
    }

    // Ensure images is an array
    if (postData.images && !Array.isArray(postData.images)) {
      postData.images = JSON.parse(postData.images);
    }

    // Handle empty images array (if images is empty, don't send it to Prisma as it may be unintentional)
    const updatedImages = images.length > 0 ? images : postData.images;

    // Prepare update data for Prisma
    const updatedListing = await prisma.post.update({
      where: { id },
      data: {
        propertyName: postData.propertyName,
        price: postData.price,
        address: postData.address,
        city: postData.city,
        state: postData.state,
        size: postData.size,
        lat: postData.lat,
        long: postData.long,
        bedroom: postData.bedroom,
        bathroom: postData.bathroom,
        balcony: postData.balcony,
        listingType: postData.listingType,
        buildingType: postData.buildingType,
        propertyType: postData.propertyType,
        propertyAvailability: postData.propertyAvailability,
        propertyCondition: postData.propertyCondition,
        parking: postData.parking,
        description: postData.description,
        offer: postData.offer,
        tac: postData.tac,
        nearbyPlaces: postData.nearbyPlaces,
        nearbyDistances: postData.nearbyDistances,
        amenities: postData.amenities,
        images: updatedImages,  // Use the images passed in the request or from postData
      },
    });
console.log("updatedListing",updatedListing)
    return res.status(200).json(updatedListing);  // Return the updated listing
  } catch (error) {
    console.error("Error updating listing:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const addlisting = async (req, res) => {
  console.log("Received body:", req.body);

  const userId = req.userId;
  if (!userId) {
    return res.status(401).json({ error: "Unauthorized. User ID is required." });
  }

  try {
    // Ensure req.body contains postData
    if (!req.body || !req.body.postData || Object.keys(req.body.postData).length === 0) {
      return res.status(400).json({ error: "Invalid request data." });
    }

    const { postData,images } = req.body; // Extract postData correctly
    console.log("Parsed Data:", postData);

    // Format and ensure proper data conversion
    const formattedData = {
      user: { connect: { id: userId } },
      propertyName: postData.propertyName?.trim() || "Untitled",
      price: postData.price ? Number(postData.price) : 0,
      images: Array.isArray(postData.images) ? postData.images : [],
      address: postData.address?.trim() || "",
      city: postData.city?.trim() || "",
      state: postData.state?.trim() || "",
      size: postData.size ? Number(postData.size) : 0,
      bedroom: postData.bedroom ? Number(postData.bedroom) : 0,
      bathroom: postData.bathroom ? Number(postData.bathroom) : 0,
      balcony: postData.balcony ? Number(postData.balcony) : 0,
      lat: postData.lat ? parseFloat(postData.lat) : null,
      long: postData.long ? parseFloat(postData.long) : null,
      listingType: postData.listingType?.trim() || "sell",
      buildingType: postData.buildingType?.trim() || "residential",
      propertyType: postData.propertyType?.trim() || "apartment",
      description: postData.description?.trim() || "",
      offer: postData.offer === "true" || postData.offer === true,
      tac: postData.tac === "true" || postData.tac === true,
      amenities: Array.isArray(postData.amenities) ? postData.amenities.map(item => item.value) : [],
      nearbyPlaces: Array.isArray(postData.nearbyPlaces) ? postData.nearbyPlaces.map(item => item.value) : [],
      nearbyDistances: typeof postData.nearbyDistances === "object" ? postData.nearbyDistances : {},
      propertyCondition: postData.propertyCondition?.trim() || null,
      propertyAvailability: postData.propertyAvailability?.trim() || null,
      parking: postData.parking?.trim() || null,
      images: Array.isArray(images) ? images : [],
    };

    console.log("Formatted Data:", formattedData);

    // Create the new post
    const newPost = await prisma.post.create({
      data: formattedData,
    });

    return res.status(201).json({ post: newPost, message: "Listing Added Successfully!" });

  } catch (error) {
    console.error("Error creating listing:", error);
    return res.status(500).json({ error: "Failed To Add Listing." });
  }
};

// export const getListings = async (req, res) => {
//   try {
//     // Pagination parameters
//     const limit = Math.max(1, parseInt(req.query.limit) || 9);
//     const startIndex = Math.max(0, parseInt(req.query.startIndex) || 0);

//     // Filters
//     const listingType = req.query.listingType === "all" || !req.query.listingType
//       ? ["sell", "rent/lease"]
//       : [req.query.listingType];

//     const propertyType = req.query.propertyType || null;
//     const buildingType = req.query.buildingType || null;
//     const city = req.query.city || null;
//     const minPrice = Number(req.query.minPrice) || 0;
//     const maxPrice = Number(req.query.maxPrice) || 10000000;
//     const searchTerm = req.query.searchTerm?.trim() || "";

//     // Sorting options
//     let sortObj = { createdAt: "desc" };

//     if (req.query.sort === "oldest") {
//       sortObj = { createdAt: "asc" };
//     } else if (req.query.sort === "popular") {
//       sortObj = { views: "desc" };
//     }

//     // Build the WHERE clause for Prisma query
//     const whereClause = {
//       AND: [
//         // Only add search term condition if it exists
//         searchTerm
//           ? {
//               OR: [
//                 { propertyName: { contains: searchTerm, mode: "insensitive" } },
//                 { city: { contains: searchTerm, mode: "insensitive" } },
//                 { address: { contains: searchTerm, mode: "insensitive" } },
//               ],
//             }
//           : null,

//         // Only add listingType condition if it's valid
//         // { listingType: { in: listingType } },

//         // Only add propertyType condition if it's valid
//         propertyType ? { propertyType } : null,

//         // Only add buildingType condition if it's valid
//         buildingType ? { buildingType } : null,

//         // Only add city condition if it's valid
//         city ? { city } : null,

//         // Add price range condition
//         { price: { gte: minPrice, lte: maxPrice } },

//         // Only add trending condition if needed
//         req.query.sort === "trending"
//           ? { createdAt: { gte: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7) } }
//           : null,
//       ].filter(Boolean), // Removes any null values
//     };

//     console.log("Query:", JSON.stringify(whereClause, null, 2)); // Debugging

//     // Prisma query to fetch listings with pagination and sorting
//     const listings = await prisma.post.findMany({
//       where: whereClause,
//       orderBy: sortObj,
//       take: limit,
//       skip: startIndex,
//     });

//     return res.status(200).json(listings); // Return the listings
//   } catch (error) {
//     console.error("Error fetching listings:", error);
//     return res.status(500).json({ message: "Internal server error" });
//   }
// };







// export const getListings = async (req, res) => {
//   try {
//     // Pagination
//     const limit = parseInt(req.query.limit) || 9;
//     const startIndex = parseInt(req.query.startIndex) || 0;

//     // Filtering parameters
//     const type =
//       req.query.type === undefined || req.query.type === "all"
//         ? ["buy", "rent"]
//         : [req.query.type];
//     const property = req.query.property || undefined;
//     const city = req.query.city || undefined;
//     const minPrice = parseInt(req.query.minPrice) || 0;
//     const maxPrice = parseInt(req.query.maxPrice) || 10000000;

//     // Search term (fuzzy search)
//     const searchTerm = req.query.searchTerm || "";

//     // Sorting parameters
//     const sortQuery = req.query.sort || "newest";
//     let sortObj = { createdAt: 'desc' };
//     let query = {};

//     if (sortQuery) {
//       switch (sortQuery) {
//         case "newest":
//           sortObj = { createdAt: 'desc' };
//           break;

//         case "oldest":
//           sortObj = { createdAt: 'asc' };
//           break;

//         case "popular":
//           sortObj = { views: 'desc' };
//           break;

//         case "trending":
//           sortObj = { views: 'desc' };      // Sort by trending
//           query.createdAt = { gte: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7) }; // Filter for the last 7 days
//           break;

//         default:
//           break;
//       }
//     }

//     // Build query object
//     const whereClause = {
//       AND: [
//         {
//           OR: [
//             { propertyName: { contains: searchTerm, mode: "insensitive" } },
//             { city: { contains: searchTerm, mode: "insensitive" } },
//             { address: { contains: searchTerm, mode: "insensitive" } },
//           ],
//         },
//         { type: { in: type } },
//         property ? { property } : undefined,
//         city ? { city } : undefined,
//         { price: { gte: minPrice, lte: maxPrice } },
//       ].filter(Boolean), // Remove undefined filters
//     };

//     // Query Prisma for listings
//     const listings = await prisma.post.findMany({
//       where: whereClause,
//       orderBy: sortObj, // Apply sorting here
//       take: limit,
//       skip: startIndex,
//     });

//     // Return the listings
//     return res.status(200).json(listings);
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: "Internal server error" });
//   }
// };

// export const listings = async (req, res) => {
//   const id = req.params.id;
//   const token = req.cookies?.token;  // JWT token from the user's cookies

//   try {
//     // Fetch the post details first
//     const post = await prisma.post.findUnique({
//       where: { id },
//       include: {
//         postDetail: true,
//         user: {
//           select: {
//             username: true,
//             avatar: true,
//           },
//         },
//       },
//     });

//     if (!post) {
//       return res.status(404).json({ message: "Post not found" });
//     }

//     let userId = null;
//     let userIP = req.ip;  // Optionally, get the user's IP (if needed for non-logged-in users)

//     // Check if user is logged in
//     if (token) {
//       try {
//         // Verify the JWT token and extract userId
//         const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
//         userId = payload.id;  // Get the userId from JWT payload
//       } catch (err) {
//         console.error("JWT verification error:", err);
//         return res.status(401).json({ message: "Invalid or expired token" });
//       }
//     }

//     // Check if the user has already viewed the post
//     let updatedPost;

//     if (userId) {
//       // Logged-in user: Check if their userId is in visitedByUsers array
//       if (!post.visitedByUsers.includes(userId)) {
//         // Increment views and add userId to visitedByUsers
//         updatedPost = await prisma.post.update({
//           where: { id },
//           data: {
//             views: { increment: 1 },
//             visitedByUsers: {
//               push: userId,  // Add the userId to visitedByUsers array
//             },
//           },
//         });
//       } else {
//         // If the user has already visited, just fetch the post without updating views
//         updatedPost = post;
//       }
//     } else {
//       // Non-logged-in user: Check if their IP is in visitedByUsers array
//       if (!post.visitedByUsers.includes(userIP)) {
//         // Increment views and add userIP to visitedByUsers
//         updatedPost = await prisma.post.update({
//           where: { id },
//           data: {
//             views: { increment: 1 },
//             visitedByUsers: {
//               push: userIP,  // Add the userIP to visitedByUsers array
//             },
//           },
//         });
//       } else {
//         // If the IP has already visited, just fetch the post without updating views
//         updatedPost = post;
//       }
//     }

//     // Log to confirm the update is working
//     console.log('Updated Post Views:', updatedPost);

//     // Check if the user is logged in to determine the "saved" status
//     if (token) {
//       try {
//         const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);

//         // Check if the post is saved by the logged-in user
//         const saved = await prisma.savePost.findUnique({
//           where: {
//             userId_postId: {
//               postId: id,
//               userId: payload.id,
//             },
//           },
//         });

//         // Respond with the post data including the `isSaved` state
//         return res.status(200).json({ ...updatedPost, isSaved: saved ? true : false });
//       } catch (err) {
//         console.error("JWT verification error:", err);
//         return res.status(401).json({ message: "Invalid or expired token" });
//       }
//     }

//     // If the user is not logged in, return the post data with `isSaved: false`
//     return res.status(200).json({ ...updatedPost, isSaved: false });

//   } catch (error) {
//     console.error("Error fetching post:", error);
//     return res.status(500).json({ message: "Failed to fetch post" });
//   }
// };

// export const Updatelisting = async (req, res) => {
//   const { id } = req.params; // ID of the post to update
//   const body = req.body; // Incoming request body
//   const tokenUserId = req.userId; // Extract the authenticated user ID

//   try {
//     // Fetch the post to ensure it exists and is owned by the current user
//     const post = await prisma.post.findUnique({
//       where: { id },
//     });

//     if (!post) {
//       return res.status(404).json({ error: "Listing not found!" });
//     }

//     if (post.userId !== tokenUserId) {
//       return res
//         .status(403)
//         .json({ error: "Not authorized to update this post!" });
//     }

//     // Update the post and related post details
//     const updatedPost = await prisma.post.update({
//       where: { id },
//       data: {
//         ...body.postData, // Update post fields
//         postDetail: {
//           update: body.postDetail, // Update associated post details
//         },
//       },
//     });

//     res
//       .status(200)
//       .json({ message: "Listing updated successfully!", updatedPost });
//   } catch (error) {
//     console.error("Error updating post:", error);
//     res.status(500).json({ message: "Failed to update Listing." });
//   }
// };

// export const Deletelisting = async (req, res) => {
//   const id = req.params.id;
//   const tokenUserId = req.userId;
//   try {
//     const post = await prisma.post.findUnique({
//       where: { id },
//     });

//     if (post.userId !== tokenUserId) {
//       return res.status(403).json({ error: "Not Authorized!" });
//     }

//     await prisma.post.delete({
//       where: { id },
//     });
//     res.status(200).json({ message: "Listing Deleted!" });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Failed To Delete Listing" });
//   }
// };

// export const addlisting = async (req, res) => {
//   console.log("Received body:", req.body);

//   const userId = req.userId;
//   if (!userId) return res.status(401).json({ error: "Unauthorized. Please log in." });
//   console.log(req.userId+"user id recived in backend ")

//   const { postData } = req.body;
//   if (!postData) {
//     return res.status(400).json({ error: "Invalid request data." });
//   }

//   // Ensure required fields are present
//   const requiredFields = [
//     "propertyName", "price", "address", "city", "state", "bedroom", "bathroom", "balcony",
//     "listingType", "buildingType", "propertyType",
//   ];

//   for (const field of requiredFields) {
//     if (!postData[field]) {
//       return res.status(400).json({ error: `${field} is required.` });
//     }
//   }

//   try {
//     const newPost = await prisma.post.create({
//       data: {
//         user: { connect: { id: userId } },
//         propertyName: postData.propertyName,
//         price: postData.price,
//         address: postData.address,
//         city: postData.city,
//         state: postData.state,
//         size: postData.size,
//         bedroom: Number(postData.bedroom),
//         bathroom: Number(postData.bathroom),
//         balcony: Number(postData.balcony),
//         lat: postData.lat || null,
//         long: postData.long || null,
//         listingType: postData.listingType,
//         buildingType: postData.buildingType,
//         propertyType: postData.propertyType,
//         propertyAvailability: postData.propertyAvailability,
//         propertyCondition: postData.propertyCondition,
//         // offer: postData.offer || false,
//         offer: postData.offer === "true",
//         propertyCondition: postData.propertyCondition || null,
//         propertyAvailability: postData.propertyAvailability || null,
//         parking: postData.parking || null,
//         description: postData.description || null,
//         tac: postData.tac || false,
//         amenities: postData.amenities?.map(item => item.value) || [], // Store only values
//         nearbyPlaces: postData.nearbyPlaces?.map(item => item.value) || [], // Store only values
//         nearbyDistances: postData.nearbyDistances || {},
//         title: postData.title || "kuch ni",
//       },
//     });

//     res.status(200).json({ post: newPost, message: "Listing Added Successfully!" });
//   } catch (error) {
//     console.error("Error creating listing:", error);
//     res.status(500).json({ error: "Failed To Add Listing." });
//   }
// };


// import prisma from "../lib/prisma.js";
// import jwt from "jsonwebtoken";

// // Get all listings with filters and pagination
// export const getListings = async (req, res) => {
//   try {
//     const limit = Math.max(1, parseInt(req.query.limit) || 9);
//     const startIndex = Math.max(0, parseInt(req.query.startIndex) || 0);

//     const type = req.query.type === "all" || !req.query.type ? ["buy", "rent"] : [req.query.type];
//     const property = req.query.property || undefined;
//     const city = req.query.city || undefined;
//     const minPrice = parseInt(req.query.minPrice) || 0;
//     const maxPrice = parseInt(req.query.maxPrice) || 10000000;
//     const searchTerm = req.query.searchTerm || "";

//     let sortObj = { createdAt: "desc" };
//     let query = {};

//     switch (req.query.sort) {
//       case "oldest":
//         sortObj = { createdAt: "asc" };
//         break;
//       case "popular":
//       case "trending":
//         sortObj = { views: "desc" };
//         if (req.query.sort === "trending") {
//           query.createdAt = { gte: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7) };
//         }
//         break;
//       default:
//         break;
//     }

//     const whereClause = {
//       AND: [
//         {
//           OR: [
//             { propertyName: { contains: searchTerm, mode: "insensitive" } },
//             { city: { contains: searchTerm, mode: "insensitive" } },
//             { address: { contains: searchTerm, mode: "insensitive" } },
//           ],
//         },
//         { type: { in: type } },
//         property ? { property } : undefined,
//         city ? { city } : undefined,
//         { price: { gte: minPrice, lte: maxPrice } },
//       ].filter(Boolean),
//     };

//     const listings = await prisma.post.findMany({
//       where: whereClause,
//       orderBy: sortObj,
//       take: limit,
//       skip: startIndex,
//     });

//     return res.status(200).json(listings);
//   } catch (error) {
//     console.error("Error fetching listings:", error);
//     return res.status(500).json({ message: "Internal server error" });
//   }
// };

// // Get a single listing and track views
// export const listings = async (req, res) => {
//   const { id } = req.params;
//   const token = req.cookies?.token;
//   let userId = null;
//   let userIP = req.ip;

//   try {
//     const listing = await prisma.post.findUnique({
//       where: { id },
//       include: {
//         user: { select: { username: true, avatar: true } },
//       },
//     });

//     if (!listing) return res.status(404).json({ message: "Listing not found" });

//     if (token) {
//       try {
//         const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
//         userId = payload.id;
//       } catch (err) {
//         console.error("JWT verification error:", err);
//         return res.status(401).json({ message: "Invalid or expired token" });
//       }
//     }

//     const visitedBy = userId || userIP;
//     if (!listing.visitedByUsers.includes(visitedBy)) {
//       await prisma.listing.update({
//         where: { id },
//         data: {
//           views: { increment: 1 },
//           visitedByUsers: { push: visitedBy },
//         },
//       });
//     }

//     const isSaved = token
//       ? !!(await prisma.savePost.findUnique({
//           where: { userId_postId: { postId: id, userId } },
//         }))
//       : false;

//     return res.status(200).json({ ...listing, isSaved });
//   } catch (error) {
//     console.error("Error fetching listing:", error);
//     return res.status(500).json({ message: "Failed to fetch listing" });
//   }
// };

// // Update a listing
// export const Updatelisting = async (req, res) => {
//   const { id } = req.params;
//   const tokenUserId = req.userId;
//   const body = req.body;

//   try {
//     const listing = await prisma.post.findUnique({ where: { id } });

//     if (!listing) return res.status(404).json({ error: "Listing not found" });
//     if (listing.userId !== tokenUserId) return res.status(403).json({ error: "Not authorized" });

//     const updatedListing = await prisma.listing.update({
//       where: { id },
//       data: {
//         ...body.postData,
//         postDetail: body.postDetail ? { update: body.postDetail } : undefined,
//       },
//     });

//     return res.status(200).json({ message: "Listing updated!", updatedListing });
//   } catch (error) {
//     console.error("Error updating listing:", error);
//     return res.status(500).json({ message: "Failed to update listing" });
//   }
// };

// // Delete a listing
// export const Deletelisting = async (req, res) => {
//   const { id } = req.params;
//   const tokenUserId = req.userId;

//   try {
//     const listing = await prisma.post.findUnique({ where: { id } });
//     if (!listing) return res.status(404).json({ error: "Listing not found" });
//     if (listing.userId !== tokenUserId) return res.status(403).json({ error: "Not authorized" });

//     await prisma.listing.delete({ where: { id } });
//     return res.status(200).json({ message: "Listing deleted!" });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ error: "Failed to delete listing" });
//   }
// };

// // Add a new listing
// export const addlisting = async (req, res) => {
//   const userId = req.userId;
//   if (!userId) return res.status(401).json({ error: "Unauthorized" });

//   const { postData } = req.body;
//   if (!postData) return res.status(400).json({ error: "Invalid request data." });

//   try {
//     const newListing = await prisma.post.create({
//       data: {
//         user: { connect: { id: userId } },
//         ...postData,
//         amenities: postData.amenities?.map((item) => item.value) || [],
//         nearbyPlaces: postData.nearbyPlaces?.map((item) => item.value) || [],
//         nearbyDistances: postData.nearbyDistances || {},
//       },
//     });

//     return res.status(200).json({ post: newListing, message: "Listing Added!" });
//   } catch (error) {
//     console.error("Error creating listing:", error);
//     return res.status(500).json({ error: "Failed to add listing" });
//   }
// };


// export const getListings = async (req, res) => {
//   try {
//     // Pagination
//     const limit = parseInt(req.query.limit) || 9;
//     const startIndex = parseInt(req.query.startIndex) || 0;

//     // Filtering parameters
//     const listingType =
//       req.query.listingType === undefined || req.query.listingType === "all"
//         ? ["buy", "rent"]
//         : [req.query.listingType];

//     const buildingType = req.query.buildingType || undefined;
//     const propertyType = req.query.propertyType || undefined;
//     const city = req.query.city || undefined;
//     const minPrice = parseInt(req.query.minPrice) || 0;
//     const maxPrice = parseInt(req.query.maxPrice) || 10000000;

//     // Search term (fuzzy search)
//     const searchTerm = req.query.searchTerm || "";

//     // Sorting parameters
//     const sortQuery = req.query.sort || "newest";
//     let sortObj = { createdAt: "desc" };
//     let query = {};

//     if (sortQuery) {
//       switch (sortQuery) {
//         case "newest":
//           sortObj = { createdAt: "desc" };
//           break;
//         case "oldest":
//           sortObj = { createdAt: "asc" };
//           break;
//         case "popular":
//           sortObj = { views: "desc" };
//           break;
//         case "trending":
//           sortObj = { views: "desc" };
//           query.createdAt = { gte: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7) };
//           break;
//         default:
//           break;
//       }
//     }

//     // Build query object
//     const whereClause = {
//       AND: [
//         {
//           OR: [
//             { propertyName: { contains: searchTerm, mode: "insensitive" } },
//             { city: { contains: searchTerm, mode: "insensitive" } },
//             { address: { contains: searchTerm, mode: "insensitive" } },
//           ],
//         },
//         { listingType: { in: listingType } },
//         buildingType ? { buildingType } : undefined,
//         propertyType ? { propertyType } : undefined,
//         city ? { city } : undefined,
//         { price: { gte: minPrice, lte: maxPrice } }, // Ensure price is a string
//       ].filter(Boolean),
//     };

//     // Query Prisma for listings
//     const listings = await prisma.post.findMany({
//       where: whereClause,
//       orderBy: sortObj,
//       take: limit,
//       skip: startIndex,
//     });

//     // Return the listings
//     return res.status(200).json(listings);
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: "Internal server error" });
//   }
// };




// export const getListings = async (req, res) => {
//   try {
//     const limit = Math.max(1, parseInt(req.query.limit) || 9);
//     const startIndex = Math.max(0, parseInt(req.query.startIndex) || 0);

//     const listingType = req.query.listingType === "all" || !req.query.listingType 
//       ? ["buy", "rent"] 
//       : [req.query.listingType];

//     const propertyType = req.query.propertyType || undefined;
//     const buildingType = req.query.buildingType || undefined;
//     const city = req.query.city || undefined;
//     const minPrice = Number(req.query.minPrice) || 0;
//     const maxPrice = Number(req.query.maxPrice) || 10000000;
//     const searchTerm = req.query.searchTerm?.trim() || "";

//     let sortObj = { createdAt: "desc" }; // Default sorting by latest
//     let query = {};

//     switch (req.query.sort) {
//       case "oldest":
//         sortObj = { createdAt: "asc" };
//         break;
//       case "popular":
//       case "trending":
//         sortObj = { views: "desc" };
//         if (req.query.sort === "trending") {
//           query.createdAt = { gte: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7) }; // Trending = last 7 days
//         }
//         break;
//       default:
//         break;
//     }

//     const whereClause = {
//       AND: [
//         {
//           OR: [
//             { propertyName: { contains: searchTerm, mode: "insensitive" } },
//             { city: { contains: searchTerm, mode: "insensitive" } },
//             { address: { contains: searchTerm, mode: "insensitive" } },
//           ],
//         },
//         { listingType: { in: listingType } }, // Updated field name
//         propertyType ? { propertyType } : undefined,
//         buildingType ? { buildingType } : undefined,
//         city ? { city } : undefined,
//         { price: { gte: minPrice, lte: maxPrice } }, // Ensure price is a number
//       ].filter(Boolean), // Remove undefined filters
//     };

//     const listings = await prisma.post.findMany({
//       where: whereClause,
//       orderBy: sortObj,
//       take: limit,
//       skip: startIndex,
//     });

//     return res.status(200).json(listings);
//   } catch (error) {
//     console.error("Error fetching listings:", error);
//     return res.status(500).json({ message: "Internal server error" });
//   }
// };


// export const addlisting = async (req, res) => {
//   console.log(req.body+"req.body")
//   const userId = req.userId;
//   try {
//     // const {
//     //   propertyName,
//     //   price,
//     //   images,
//     //   address,
//     //   city,
//     //   state,
//     //   size,
//     //   bedroom,
//     //   bathroom,
//     //   balcony,
//     //   lat,
//     //   long,
//     //   listingType,
//     //   buildingType,
//     //   propertyType,
//     //   description,
//     //   offer,
//     //   tac,
//     //   nearbyDistances,
//     //   amenities,
//     //   nearbyPlaces,
//     //   propertyCondition,
//     //   propertyAvailability,
//     //   parking,
//     // } = req.body;
//     // console.log(req.body+"req.body")

//     // Create new listing
    
//     data: {
//               user: { connect: { id: userId } },
//               propertyName: postData.propertyName,
//               price: postData.price,
//               address: postData.address,
//               city: postData.city,
//               state: postData.state,
//               size: postData.size,
//               bedroom: Number(postData.bedroom),
//               bathroom: Number(postData.bathroom),
//               balcony: Number(postData.balcony),
//               lat: postData.lat || null,
//               long: postData.long || null,
//               listingType: postData.listingType,
//               buildingType: postData.buildingType,
//               propertyType: postData.propertyType,
//               propertyAvailability: postData.propertyAvailability,
//               propertyCondition: postData.propertyCondition,
//               // offer: postData.offer || false,
//               offer: postData.offer === "true",
//               propertyCondition: postData.propertyCondition || null,
//               propertyAvailability: postData.propertyAvailability || null,
//               parking: postData.parking || null,
//               description: postData.description || null,
//               tac: postData.tac || false,
//               amenities: postData.amenities?.map(item => item.value) || [], // Store only values
//               nearbyPlaces: postData.nearbyPlaces?.map(item => item.value) || [], // Store only values
//               nearbyDistances: postData.nearbyDistances || {},
//               title: postData.title || "kuch ni",
//             },
//           });
      
//           res.status(200).json({ post: newPost, message: "Listing Added Successfully!" });
//         } catch (error) {
//           console.error("Error creating listing:", error);
//           res.status(500).json({ error: "Failed To Add Listing." });
//         }
    
//     const newListing = await prisma.post.create({
//       data: {
//         propertyName,
//         price,
//         images,
//         address,
//         city,
//         state,
//         size,
//         bedroom,
//         bathroom,
//         balcony,
//         lat,
//         long,
//         listingType,
//         buildingType,
//         propertyType,
//         description,
//         offer,
//         tac,
//         nearbyDistances,
//         amenities,
//         nearbyPlaces,
//         propertyCondition,
//         propertyAvailability,
//         parking,
//         userId,
//       },
//     });

//     return res.status(201).json(newListing);
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: "Internal server error" });
//   }
// };

// export const Updatelisting = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updateData = req.body;

//     // Ensure price is stored as a string if updated
//     if (updateData.price) {
//       updateData.price = updateData.price.toString();
//     }

//     const updatedListing = await prisma.post.update({
//       where: { id },
//       data: updateData,
//     });

//     return res.status(200).json(updatedListing);
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: "Internal server error" });
//   }
// };

// export const addlisting = async (req, res) => {
//   console.log("Received body:", req.body);

//   const userId = req.userId;
//   if (!userId) {
//     return res.status(401).json({ error: "Unauthorized. User ID is required." });
//   }

//   try {
//     const {
//       propertyName,
//       price,
//       images,
//       address,
//       city,
//       state,
//       size,
//       bedroom,
//       bathroom,
//       balcony,
//       lat,
//       long,
//       listingType,
//       buildingType,
//       propertyType,
//       description,
//       offer,
//       tac,
//       nearbyDistances,
//       amenities,
//       nearbyPlaces,
//       propertyCondition,
//       propertyAvailability,
//       parking,
//     } = req.body;

//     // Convert values to the correct types
//     const formattedData = {
//       user: { connect: { id: userId } }, // Connect user
//       propertyName: propertyName || "Untitled",
//       price: Number(price) || 0, // Ensure it's a number
//       images: images || [], // Ensure it's an array
//       address: address || "",
//       city: city || "",
//       state: state || "",
//       size: Number(size) || 0, // Ensure it's a number
//       bedroom: Number(bedroom) || 0,
//       bathroom: Number(bathroom) || 0,
//       balcony: Number(balcony) || 0,
//       lat: lat ? parseFloat(lat) : null, // Ensure it's a float
//       long: long ? parseFloat(long) : null,
//       listingType: listingType || "sell",
//       buildingType: buildingType || "residential",
//       propertyType: propertyType || "apartment",
//       description: description || "",
//       offer: offer === "true", // Convert string boolean to actual boolean
//       tac: tac === "true", // Convert string boolean to actual boolean
//       amenities: amenities?.map(item => item.value) || [], // Convert to array of strings
//       nearbyPlaces: nearbyPlaces?.map(item => item.value) || [],
//       nearbyDistances: nearbyDistances || {},
//       propertyCondition: propertyCondition || null,
//       propertyAvailability: propertyAvailability || null,
//       parking: parking || null,
//     };

//     const newPost = await prisma.post.create({
//       data: formattedData,
//     });

//     return res.status(201).json({ post: newPost, message: "Listing Added Successfully!" });

//   } catch (error) {
//     console.error("Error creating listing:", error);
//     return res.status(500).json({ error: "Failed To Add Listing." });
//   }
// };




// export const getListings = async (req, res) => {
//   try {
//     const posts = await prisma.post.findMany({
//       orderBy: { createdAt: "desc" }, // Sorting by latest posts first
//     });

//     return res.status(200).json(posts);
//   } catch (error) {
//     console.error("Error fetching posts:", error);
//     return res.status(500).json({ message: "Internal server error" });
//   }
// };



// export const getUserListings = async (req, res) => {
//   try {
//     const { userId } = req.params;

//     const listings = await prisma.post.findMany({
//       where: { userId },
//       orderBy: { createdAt: "desc" },
//     });

//     return res.status(200).json(listings);
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: "Internal server error" });
//   }
// };

// export const saveListing = async (req, res) => {
//   try {
//     const { userId, postId } = req.body;

//     const savedPost = await prisma.savePost.create({
//       data: { userId, postId },
//     });

//     return res.status(201).json(savedPost);
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: "Internal server error" });
//   }
// };

// export const removeSavedListing = async (req, res) => {
//   try {
//     const { userId, postId } = req.body;

//     await prisma.savePost.delete({
//       where: { userId_postId: { userId, postId } },
//     });

//     return res.status(200).json({ message: "Removed from saved listings" });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: "Internal server error" });
//   }
// };

// export const getSavedListings = async (req, res) => {
//   try {
//     const { userId } = req.params;

//     const savedListings = await prisma.savePost.findMany({
//       where: { userId },
//       include: {
//         post: true,
//       },
//       orderBy: { createdAt: "desc" },
//     });

//     return res.status(200).json(savedListings);
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: "Internal server error" });
//   }
// };







///todo--- cheygpt chat 

// still this erro come "
// Query: {
//   "AND": [
//     {},
//     {
//       "listingType": {
//         "in": [
//           "sell",
//           "rent/lease"
//         ]
//       }
//     },
//     {},
//     {},
//     {},
//     {
//       "price": {
//         "gte": 0,
//         "lte": 10000000
//       }
//     },
//     {}
//   ]
// }
// Query: {
//   "AND": [
//     {},
//     {
//       "listingType": {
//         "in": [
//           "sell",
//           "rent/lease"
//         ]
//       }
//     },
//     {},
//     {},
//     {},
//     {
//       "price": {
//         "gte": 0,
//         "lte": 10000000
//       }
//     },
//     {}
//   ]
// }
//  " there is my all apis fix issues "import prisma from "../lib/prisma.js";
// import jwt from "jsonwebtoken";


// export const Deletelisting = async (req, res) => {
//   try {
//     const { id } = req.params;

//     await prisma.post.delete({ where: { id } });

//     return res.status(200).json({ message: "Listing deleted successfully" });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: "Internal server error" });
//   }
// };
// export const listings = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const listing = await prisma.post.findUnique({
//       where: { id },
//       include: {
//         user: {
//           select: {
//             id: true,
//             username: true, // Fix: Ensure this field is selected
//             email: true,
//             avatar: true,
//           },
//         },
//       },
//     });

//     if (!listing) {
//       return res.status(404).json({ message: "Listing not found" });
//     }

//     return res.status(200).json(listing);
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: "Internal server error" });
//   }
// };

// // export const Updatelisting = async (req, res) => {
// //   try {
// //     const { id } = req.params;
// //     const updateData = req.body;
// //     console.log(updateData)

// //     // // Ensure price is stored as a string if updated
// //     // if (updateData.price) {
// //     //   updateData.price = updateData.price.toString();
// //     // }

// //     // // Ensure amenities and nearbyPlaces are arrays
// //     // if (updateData.amenities && !Array.isArray(updateData.amenities)) {
// //     //   updateData.amenities = JSON.parse(updateData.amenities);
// //     // }

// //     // if (updateData.nearbyPlaces && !Array.isArray(updateData.nearbyPlaces)) {
// //     //   updateData.nearbyPlaces = JSON.parse(updateData.nearbyPlaces);
// //     // }

// //     // Update the post data in the database
// //     const updatedListing = await prisma.post.update({
// //       where: { id },
// //       data: {
// //         propertyName: updateData.propertyName,
// //         price: updateData.price,
// //         address: updateData.address,
// //         city: updateData.city,
// //         state: updateData.state,
// //         size: updateData.size,
// //         lat: updateData.lat,
// //         long: updateData.long,
// //         bedroom: updateData.bedroom,
// //         bathroom: updateData.bathroom,
// //         balcony: updateData.balcony,
// //         listingType: updateData.listingType,
// //         buildingType: updateData.buildingType,
// //         propertyType: updateData.propertyType,
// //         propertyAvailability: updateData.propertyAvailability,
// //         propertyCondition: updateData.propertyCondition,
// //         parking: updateData.parking,
// //         description: updateData.description,
// //         offer: updateData.offer,
// //         tac: updateData.tac,
// //         nearbyPlaces: updateData.nearbyPlaces,  // Directly assign this field
// //         nearbyDistances: updateData.nearbyDistances, // Directly assign this field
// //         amenities: updateData.amenities,  // Directly assign this field
// //         images: updateData.images,  // Directly assign this field
// //       },
// //     });

// //     return res.status(200).json(updatedListing);
// //   } catch (error) {
// //     console.error(error);
// //     return res.status(500).json({ message: "Internal server error" });
// //   }
// // };


// export const Updatelisting = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { postData, images } = req.body;  // Extract postData correctly from the request body

//     console.log("Received data to update:", postData);

//     // Handle optional fields like lat/long to set null if empty strings are passed
//     if (postData.lat === '') postData.lat = null;
//     if (postData.long === '') postData.long = null;

//     // Ensure amenities and nearbyPlaces are arrays (in case they are sent as strings or incorrectly formatted)
//     if (postData.amenities && !Array.isArray(postData.amenities)) {
//       postData.amenities = JSON.parse(postData.amenities);
//     }

//     if (postData.nearbyPlaces && !Array.isArray(postData.nearbyPlaces)) {
//       postData.nearbyPlaces = JSON.parse(postData.nearbyPlaces);
//     }

//     // Ensure images is an array
//     if (postData.images && !Array.isArray(postData.images)) {
//       postData.images = JSON.parse(postData.images);
//     }

//     // Handle empty images array (if images is empty, don't send it to Prisma as it may be unintentional)
//     const updatedImages = images.length > 0 ? images : postData.images;

//     // Prepare update data for Prisma
//     const updatedListing = await prisma.post.update({
//       where: { id },
//       data: {
//         propertyName: postData.propertyName,
//         price: postData.price,
//         address: postData.address,
//         city: postData.city,
//         state: postData.state,
//         size: postData.size,
//         lat: postData.lat,
//         long: postData.long,
//         bedroom: postData.bedroom,
//         bathroom: postData.bathroom,
//         balcony: postData.balcony,
//         listingType: postData.listingType,
//         buildingType: postData.buildingType,
//         propertyType: postData.propertyType,
//         propertyAvailability: postData.propertyAvailability,
//         propertyCondition: postData.propertyCondition,
//         parking: postData.parking,
//         description: postData.description,
//         offer: postData.offer,
//         tac: postData.tac,
//         nearbyPlaces: postData.nearbyPlaces,
//         nearbyDistances: postData.nearbyDistances,
//         amenities: postData.amenities,
//         images: updatedImages,  // Use the images passed in the request or from postData
//       },
//     });
// console.log("updatedListing",updatedListing)
//     return res.status(200).json(updatedListing);  // Return the updated listing
//   } catch (error) {
//     console.error("Error updating listing:", error);
//     return res.status(500).json({ message: "Internal server error" });
//   }
// };


// export const addlisting = async (req, res) => {
//   console.log("Received body:", req.body);

//   const userId = req.userId;
//   if (!userId) {
//     return res.status(401).json({ error: "Unauthorized. User ID is required." });
//   }

//   try {
//     // Ensure req.body contains postData
//     if (!req.body || !req.body.postData || Object.keys(req.body.postData).length === 0) {
//       return res.status(400).json({ error: "Invalid request data." });
//     }

//     const { postData,images } = req.body; // Extract postData correctly
//     console.log("Parsed Data:", postData);

//     // Format and ensure proper data conversion
//     const formattedData = {
//       user: { connect: { id: userId } },
//       propertyName: postData.propertyName?.trim() || "Untitled",
//       price: postData.price ? Number(postData.price) : 0,
//       images: Array.isArray(postData.images) ? postData.images : [],
//       address: postData.address?.trim() || "",
//       city: postData.city?.trim() || "",
//       state: postData.state?.trim() || "",
//       size: postData.size ? Number(postData.size) : 0,
//       bedroom: postData.bedroom ? Number(postData.bedroom) : 0,
//       bathroom: postData.bathroom ? Number(postData.bathroom) : 0,
//       balcony: postData.balcony ? Number(postData.balcony) : 0,
//       lat: postData.lat ? parseFloat(postData.lat) : null,
//       long: postData.long ? parseFloat(postData.long) : null,
//       listingType: postData.listingType?.trim() || "sell",
//       buildingType: postData.buildingType?.trim() || "residential",
//       propertyType: postData.propertyType?.trim() || "apartment",
//       description: postData.description?.trim() || "",
//       offer: postData.offer === "true" || postData.offer === true,
//       tac: postData.tac === "true" || postData.tac === true,
//       amenities: Array.isArray(postData.amenities) ? postData.amenities.map(item => item.value) : [],
//       nearbyPlaces: Array.isArray(postData.nearbyPlaces) ? postData.nearbyPlaces.map(item => item.value) : [],
//       nearbyDistances: typeof postData.nearbyDistances === "object" ? postData.nearbyDistances : {},
//       propertyCondition: postData.propertyCondition?.trim() || null,
//       propertyAvailability: postData.propertyAvailability?.trim() || null,
//       parking: postData.parking?.trim() || null,
//       images: Array.isArray(images) ? images : [],
//     };

//     console.log("Formatted Data:", formattedData);

//     // Create the new post
//     const newPost = await prisma.post.create({
//       data: formattedData,
//     });

//     return res.status(201).json({ post: newPost, message: "Listing Added Successfully!" });

//   } catch (error) {
//     console.error("Error creating listing:", error);
//     return res.status(500).json({ error: "Failed To Add Listing." });
//   }
// };

// // export const getListings = async (req, res) => {
// //   try {
// //     const limit = Math.max(1, parseInt(req.query.limit) || 9);
// //     const startIndex = Math.max(0, parseInt(req.query.startIndex) || 0);

// //     const listingType =
// //       req.query.listingType === "all" || !req.query.listingType
// //         ? ["sell", "rent/lease"]
// //         : [req.query.listingType];

// //     const propertyType = req.query.propertyType || null;
// //     const buildingType = req.query.buildingType || null;
// //     const city = req.query.city || null;
// //     const minPrice = Number(req.query.minPrice) || 0;
// //     const maxPrice = Number(req.query.maxPrice) || 10000000;
// //     const searchTerm = req.query.searchTerm?.trim() || "";

// //     let sortObj = { createdAt: "desc" };

// //     if (req.query.sort === "oldest") {
// //       sortObj = { createdAt: "asc" };
// //     } else if (req.query.sort === "popular") {
// //       sortObj = { views: "desc" };
// //     }

// //     const whereClause = {
// //       AND: [
// //         searchTerm
// //           ? {
// //               OR: [
// //                 { propertyName: { contains: searchTerm, mode: "insensitive" } },
// //                 { city: { contains: searchTerm, mode: "insensitive" } },
// //                 { address: { contains: searchTerm, mode: "insensitive" } },
// //               ],
// //             }
// //           : null,
// //         { listingType: { in: listingType } },
// //         propertyType ? { propertyType } : null,
// //         buildingType ? { buildingType } : null,
// //         city ? { city } : null,
// //         { price: { gte: minPrice, lte: maxPrice } },
// //         req.query.sort === "trending"
// //           ? { createdAt: { gte: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7) } }
// //           : null, // Trending filter
// //       ].filter(Boolean), // Remove null values
// //     };

// //     console.log("Query:", JSON.stringify(whereClause, null, 2));
// //     console.log("Sort:", JSON.stringify(sortObj, null, 2));

// //     const listings = await prisma.post.findMany({
// //       where: whereClause,
// //       orderBy: sortObj,
// //       take: limit,
// //       skip: startIndex,
// //     });

// //     return res.status(200).json(listings);
// //   } catch (error) {
// //     console.error("Error fetching listings:", error);
// //     return res.status(500).json({ message: "Internal server error" });
// //   }
// // };

// export const getListings = async (req, res) => {
//   try {
//     // Pagination parameters
//     const limit = Math.max(1, parseInt(req.query.limit) || 9);
//     const startIndex = Math.max(0, parseInt(req.query.startIndex) || 0);

//     // Filters
//     const listingType = req.query.listingType === "all" || !req.query.listingType
//       ? ["sell", "rent/lease"]
//       : [req.query.listingType];

//     const propertyType = req.query.propertyType || null;
//     const buildingType = req.query.buildingType || null;
//     const city = req.query.city || null;
//     const minPrice = Number(req.query.minPrice) || 0;
//     const maxPrice = Number(req.query.maxPrice) || 10000000;
//     const searchTerm = req.query.searchTerm?.trim() || "";

//     // Sorting options
//     let sortObj = { createdAt: "desc" };

//     if (req.query.sort === "oldest") {
//       sortObj = { createdAt: "asc" };
//     } else if (req.query.sort === "popular") {
//       sortObj = { views: "desc" };
//     }

//     // Build the WHERE clause for Prisma query
//     const whereClause = {
//       AND: [
//         searchTerm
//           ? {
//               OR: [
//                 { propertyName: { contains: searchTerm, mode: "insensitive" } },
//                 { city: { contains: searchTerm, mode: "insensitive" } },
//                 { address: { contains: searchTerm, mode: "insensitive" } },
//               ],
//             }
//           : {},
//         { listingType: { in: listingType } },
//         propertyType ? { propertyType } : {},
//         buildingType ? { buildingType } : {},
//         city ? { city } : {},
//         { price: { gte: minPrice, lte: maxPrice } },
//         req.query.sort === "trending"
//           ? { createdAt: { gte: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7) } }
//           : {},
//       ].filter(Boolean), // Removes any null or undefined values
//     };

//     console.log("Query:", JSON.stringify(whereClause, null, 2)); // Debugging

//     // Prisma query to fetch listings with pagination and sorting
//     const listings = await prisma.post.findMany({
//       where: whereClause,
//       orderBy: sortObj,
//       take: limit,
//       skip: startIndex,
//     });

//     return res.status(200).json(listings); // Return the listings
//   } catch (error) {
//     console.error("Error fetching listings:", error);
//     return res.status(500).json({ message: "Internal server error" });
//   }
// };

// "

// ChatGPT said:
// The issue you're facing seems to be that empty objects {} are being added to your AND clause in the Prisma query. This happens when optional filters like searchTerm, propertyType, buildingType, city, etc., are not provided in the query string. When these values are missing, you're still pushing empty objects into the AND clause, which results in the invalid query you posted.

// Solution
// To fix this, you need to ensure that only the filters with actual values (non-empty) are included in the AND array. The .filter(Boolean) method is already in place, but it's not filtering out these empty objects because they exist as an empty object {}, which is considered truthy in JavaScript.

// You can adjust the way you're building the whereClause to avoid pushing empty objects by ensuring that only conditions with values are included in the AND array.

// Here's the updated approach to properly handle optional filters and avoid including empty objects in the AND array:

// Updated getListings API:
// javascript
// Copy
// export const getListings = async (req, res) => {
//   try {
//     // Pagination parameters
//     const limit = Math.max(1, parseInt(req.query.limit) || 9);
//     const startIndex = Math.max(0, parseInt(req.query.startIndex) || 0);

//     // Filters
//     const listingType = req.query.listingType === "all" || !req.query.listingType
//       ? ["sell", "rent/lease"]
//       : [req.query.listingType];

//     const propertyType = req.query.propertyType || null;
//     const buildingType = req.query.buildingType || null;
//     const city = req.query.city || null;
//     const minPrice = Number(req.query.minPrice) || 0;
//     const maxPrice = Number(req.query.maxPrice) || 10000000;
//     const searchTerm = req.query.searchTerm?.trim() || "";

//     // Sorting options
//     let sortObj = { createdAt: "desc" };

//     if (req.query.sort === "oldest") {
//       sortObj = { createdAt: "asc" };
//     } else if (req.query.sort === "popular") {
//       sortObj = { views: "desc" };
//     }

//     // Build the WHERE clause for Prisma query
//     const whereClause = {
//       AND: [
//         // Only add search term condition if it exists
//         searchTerm
//           ? {
//               OR: [
//                 { propertyName: { contains: searchTerm, mode: "insensitive" } },
//                 { city: { contains: searchTerm, mode: "insensitive" } },
//                 { address: { contains: searchTerm, mode: "insensitive" } },
//               ],
//             }
//           : null,

//         // Only add listingType condition if it's valid
//         { listingType: { in: listingType } },

//         // Only add propertyType condition if it's valid
//         propertyType ? { propertyType } : null,

//         // Only add buildingType condition if it's valid
//         buildingType ? { buildingType } : null,

//         // Only add city condition if it's valid
//         city ? { city } : null,

//         // Add price range condition
//         { price: { gte: minPrice, lte: maxPrice } },

//         // Only add trending condition if needed
//         req.query.sort === "trending"
//           ? { createdAt: { gte: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7) } }
//           : null,
//       ].filter(Boolean), // Removes any null values
//     };

//     console.log("Query:", JSON.stringify(whereClause, null, 2)); // Debugging

//     // Prisma query to fetch listings with pagination and sorting
//     const listings = await prisma.post.findMany({
//       where: whereClause,
//       orderBy: sortObj,
//       take: limit,
//       skip: startIndex,
//     });

//     return res.status(200).json(listings); // Return the listings
//   } catch (error) {
//     console.error("Error fetching listings:", error);
//     return res.status(500).json({ message: "Internal server error" });
//   }
// };
// Key Changes:
// Conditionally Add Filters:

// I updated the way the filters are conditionally added to the AND array. Now, filters like searchTerm, propertyType, buildingType, etc., are only added if they are truthy.

// The conditions that can be null (e.g., propertyType, buildingType) are added only if they are non-null values.

// Filter Empty Objects:

// The filter(Boolean) method now ensures that only non-null conditions are added to the query, eliminating empty objects {} from the query.

// Example Queries and Results:
// Search Listings with Specific Listing Type and Price Range:

// bash
// Copy
// GET /listings?listingType=rent/lease&minPrice=1000&maxPrice=500000&limit=10&startIndex=0
// The whereClause would look like:

// json
// Copy
// {
//   "AND": [
//     { "listingType": { "in": ["rent/lease"] } },
//     { "price": { "gte": 1000, "lte": 500000 } }
//   ]
// }
// Search Listings with Search Term:

// bash
// Copy
// GET /listings?searchTerm=apartment&limit=10&startIndex=0
// The whereClause would look like:

// json
// Copy
// {
//   "AND": [
//     {
//       "OR": [
//         { "propertyName": { "contains": "apartment", "mode": "insensitive" } },
//         { "city": { "contains": "apartment", "mode": "insensitive" } },
//         { "address": { "contains": "apartment", "mode": "insensitive" } }
//       ]
//     }
//   ]
// }
// Final Notes:
// Ensure Filters are Passed Correctly: Make sure that your front-end is sending the correct query parameters (e.g., minPrice, maxPrice, listingType, etc.). If they are missing, they won’t be included in the query.

// Logging: The console.log statement will print out the final query that Prisma is generating, which can help debug any issues if they arise.

// With these changes, your Prisma query should now be generated properly without any redundant empty objects. Let me know if you need further assistance!