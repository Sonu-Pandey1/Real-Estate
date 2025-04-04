import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";

export const listings = async (req, res) => {
  try {
    const { id } = req.params;

    // Fetch listing with user data
    const listing = await prisma.post.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            username: true,
            email: true,
            avatar: true,
          },
        },
      },
    });

    if (!listing) {
      return res.status(404).json({ message: "Listing not found" });
    }

    const token = req.cookies?.token;

    if (!token) {
      return res.status(200).json({ ...listing, isSaved: false });
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
      if (err) {
        console.error("JWT Verification Error:", err);
        return res.status(200).json({ ...listing, isSaved: false });
      }

      // Check if the listing is saved by the user
      const saved = await prisma.savePost.findUnique({
        where: {
          userId_postId: {
            postId: id,
            userId: payload.id,
          },
        },
      });

      return res.status(200).json({ ...listing, isSaved: !!saved });
    });
  } catch (error) {
    console.error("Error fetching listing:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getListings = async (req, res) => {
  try {

    //  Pagination parameters
    const limit = Math.max(1, parseInt(req.query.limit) || 9);
    const startIndex = Math.max(0, parseInt(req.query.startIndex) || 0);

    const listingType = req.query.type
      ? req.query.type.toLowerCase() === "all"
        ? ["sell", "rent", "plots", "pg", "commercial"]
        : [req.query.type.toLowerCase()]
      : ["sell", "rent", "plots", "pg", "commercial"];

    const propertyType = req.query.propertyType || undefined;
    const buildingType = req.query.buildingType || undefined;
    const city = req.query.city ? req.query.city.toLowerCase() : undefined;
    const propertyCondition = req.query.condition || undefined;
    const minPrice = Number(req.query.minPrice) || 0;
    const maxPrice = req.query.maxPrice ? Number(req.query.maxPrice) : undefined;

    const searchTerm = req.query.searchTerm?.trim() || "";

    //  Sorting options
    let sortObj = { createdAt: "desc" };

    if (req.query.sort === "oldest") {
      sortObj = { createdAt: "asc" };
    } else if (req.query.sort === "popular") {
      sortObj = { views: "desc" };
    } else if (req.query.sort === "trending") {
      sortObj = [
        { createdAt: "desc" },
        { views: "desc" }, // Trending: Newest first, then highest views
      ];
    }

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

        { listingType: { in: listingType } },
        propertyType ? { propertyType } : null,
        buildingType ? { buildingType } : null,
        city ? { city: { equals: city, mode: "insensitive" } } : null,
        propertyCondition ? { propertyCondition } : null,
        maxPrice !== undefined ? { price: { gte: minPrice, lte: maxPrice } } : { price: { gte: minPrice } },
        req.query.sort === "trending"
          ? { createdAt: { gte: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7) } }
          : null,
      ].filter(Boolean),
    };

    // fetch listings .....
    const listings = await prisma.post.findMany({
      where: whereClause,
      orderBy: sortObj,
      take: limit,
      skip: startIndex,
    });

    // console.log(`Fetched ${listings.length} listings`);
    return res.status(200).json(listings);
  } catch (error) {
    console.error("Error fetching listings:", error);
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
    if (!req.body || !req.body.postData || Object.keys(req.body.postData).length === 0) {
      return res.status(400).json({ error: "Invalid request data." });
    }

    const { postData, images } = req.body;
    // console.log("Parsed Data:", postData);

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
    // console.log("Formatted Data:", formattedData);

    const newPost = await prisma.post.create({
      data: formattedData,
    });

    return res.status(201).json({ post: newPost, message: "Listing Added Successfully!" });

  } catch (error) {
    console.error("Error creating listing:", error);
    return res.status(500).json({ error: "Failed To Add Listing." });
  }
};

export const Updatelisting = async (req, res) => {
  try {
    const { id } = req.params;
    const { postData, images } = req.body;

    // console.log("Received data to update:", postData);

    // Handle optional fields like lat/long to set null if empty strings are passed
    if (postData.lat === '') postData.lat = null;
    if (postData.long === '') postData.long = null;

    if (postData.amenities && !Array.isArray(postData.amenities)) {
      postData.amenities = JSON.parse(postData.amenities);
    }

    if (postData.nearbyPlaces && !Array.isArray(postData.nearbyPlaces)) {
      postData.nearbyPlaces = JSON.parse(postData.nearbyPlaces);
    }

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
        images: updatedImages,
      },
    });
    // console.log("updatedListing", updatedListing)
    return res.status(200).json(updatedListing);
  } catch (error) {
    console.error("Error updating listing:", error);
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