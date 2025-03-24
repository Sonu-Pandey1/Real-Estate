import * as yup from "yup";

const addListingSchema = yup.object().shape({

  listingType: yup
    .string()
    .required("Listing Type is required"),
  // .oneOf(["buy", "rent", "commericial", "pg","plots"], "Please select one"),

  buildingType: yup
    .string()
    .required("Building Type is required"),
  // .oneOf(["Residential", "commericial",], "Please select one"),

  propertyType: yup
    .string()
    .required("Property Type is required"),
  // .oneOf(["Apartment", "Villas",], "Please select one"),

  propertyAvailability: yup
    .string()
    .required("Property Availability is required"),
  // .oneOf(["Ready to move ", "under constration", "in 3 month", "in 6 months"], "Please select one"),

  propertyCondition: yup
    .string()
    .required("Property Condition is required"),
  // .oneOf(["Row ", "semi-furnished", "furnished"], "Please select one"),

  state: yup
    .string()
    .required("State is required"),

  city: yup
    .string()
    .required("City is required"),

  address: yup
    .string()
    .required("Address is required"),

  propertyName: yup
    .string()
    .min(2, "Property Name must be at least 2 characters")
    .max(30, "Property Name cannot be longer than 30 characters")
    .required("Property Name is required"),

  price: yup
    .string()
    .min(2, "Price must be at least 2 characters")
    .max(20, "Price cannot be longer than 10 characters")
    .required("Price is required"),

  size: yup
    .number()
    .required("Size is required"),

  bedroom: yup
    .number(),

  bathroom: yup
    .number(),

  balcony: yup
    .number(),

  parking: yup
    .string()
    .required("Parking is required"),
  // .oneOf(["open", "covered",], "Please select one"),

  lat: yup
    .string()
    .min(7, "Latitude must be at least 7 characters")
    .max(9, "Latitude cannot be longer than 9 characters"),
  // .required("Latitude is required"),

  long: yup
    .string()
    .min(7, "Latitude must be at least 7 characters")
    .max(9, "Latitude cannot be longer than 9 characters"),
  // .required("Longitude is required"),

  description: yup
    .string()
    .min(3, "description must be at least 6 characters")
    .max(5000, "description cannot be longer than 8 characters"),
    // .required("Description is required"),

  offer: yup
    .boolean(),

  tac: yup
    .boolean()
    .oneOf([true], "Please accept the term & conditions"),
});

export default addListingSchema;
