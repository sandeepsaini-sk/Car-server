const { z } = require('zod');

const CarSchema = z.object({
   title: z
    .string({ required_error: "Brand name is required" })
    .trim()
    .min(2, { message: "Brand name must be at least 2 characters" })
    .max(50, { message: "Brand name must not exceed 50 characters" }),
  image: z
    .string({ required_error: "Image URL is required" }),

  brand: z
    .string({ required_error: "Brand name is required" })
    .trim()
    .min(2, { message: "Brand name must be at least 2 characters" })
    .max(50, { message: "Brand name must not exceed 50 characters" }),

  oil: z
    .string({ required_error: "Fuel type is required" })
    .trim(),

  type: z
    .string({ required_error: "Car type is required" })
    .trim()
    .min(3, { message: "Car type must be at least 3 characters" })
    .max(30, { message: "Car type must not exceed 30 characters" }),

  seat: z
    .number({ required_error: "Seat count is required" })
    .min(1, { message: "Seat count must be at least 1 character" })
    .max(60, { message: "Seat count must not exceed 15 characters" }),

  price: z
    .number({ required_error: "Price is required" })
    .min(1, { message: "Price must not be empty" })
});

module.exports = CarSchema;
