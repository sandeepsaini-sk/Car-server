const { z } = require("zod");

const BookingSchema = z
  .object({
    car: z
      .string({ required_error: "Car ID is required" })
      .trim()
      .min(1, "Car ID must not be empty"),

    userId: z
      .string({ required_error: "User ID is required" })
      .trim()
      .min(1, "User ID must not be empty"),

    location: z
      .string({ required_error: "Location is required" })
      .trim()
      .min(2, "Location must be at least 2 characters"),

    username: z
      .string({ required_error: "Username is required" })
      .trim()
      .min(2, "Username must be at least 2 characters"),

    title: z
      .string({ required_error: "Car name is required" })
      .trim()
      .min(2, "Car name must be at least 2 characters"),

    email: z
      .string({ required_error: "Email is required" })
      .email("Invalid email address"),

    gender: z.enum(["male", "female", "other"], {
      required_error: "Gender is required",
    }),

    driverRequired: z
      .enum(["yes", "no"], {
        required_error: "Driver requirement must be specified",
      })
      .transform((val) => val === "yes"),

    paymentMethod: z
      .enum(["Cash"], { required_error: "Payment method is required" }),

    pickupDate: z.coerce.date({ required_error: "Pickup date is required" }),

    dropoffDate: z.coerce.date({ required_error: "Drop-off date is required" }),

    price: z
      .number({ required_error: "Price must be a number" })
      .nonnegative("Price must be zero or greater")
      .optional(),

    seat: z
      .number({ required_error: "Seat count is required" })
      .int()
      .min(1, "At least 1 seat required"),

    image: z
      .string()
      .optional(), // base64 string or URL

    status: z
      .enum(["Pending", "Confirmed", "Cancelled"])
      .default("Pending"),
  })
  .refine((data) => data.pickupDate < data.dropoffDate, {
    message: "Drop-off date must be after pickup date",
    path: ["dropoffDate"],
  });

module.exports = BookingSchema;
