import * as yup from "yup";

const addListingSchema = yup.object().shape({
  title: yup
    .string()
    .min(2, "Title must be at least 3 characters")
    .max(30, "Title cannot be longer than 30 characters")
    .required("Title is required"),

  price: yup
    .number()
    .required("Price is required"),

  address: yup
    .string()
    .min(2, "Title must be at least 3 characters")
    .max(50, "Title cannot be longer than 50 characters")
    .required("Addrerss is required"),

  city: yup
    .string()
    .min(2, "Title must be at least 3 characters")
    .max(15, "Title cannot be longer than 15 characters")
    .required("City is required"),

  size: yup
    .number()
    .required("Size is required"),

  lat: yup
    .string()
    .min(7, "Latitude must be at least 7 characters")
    .max(9, "Latitude cannot be longer than 9 characters")
    .required("Latitude is required"),

  long: yup
    .string()
    .min(7, "Latitude must be at least 7 characters")
    .max(9, "Latitude cannot be longer than 9 characters")
    .required("Longitude is required"),

  bedrooms: yup.number(),

  bathrooms: yup.number(),

  listingType: yup
    .string()
    .oneOf(["buy", "rent", "commericial", "pg","plots"], "Please select one"),

  propertyType: yup.string(),

  propertyCondition: yup.string(),

  parking: yup  
    .string()
    .required("Email is required"),

  uPolicy: yup.string(),

  petPolicy: yup.string(),

  iPolicy: yup.string(),

  school: yup.string(),

  bus: yup.string(),

  restaurant: yup.string(),

  desc: yup
    .string()
    .min(3, "description must be at least 6 characters")
    .max(5000, "description cannot be longer than 8 characters")
    .required("Description is required"),

  // acceptedToc: yup
  //   .boolean()
  //   .oneOf([true], "Please accept the term & conditions"),
});

export default addListingSchema;
