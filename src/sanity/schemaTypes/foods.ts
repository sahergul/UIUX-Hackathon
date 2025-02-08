import { defineType, defineField } from "sanity";

const item = defineType({
  name: "food",
  type: "document",
  title: "Food",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Food Name",
    }),
    defineField({
      name: "category",
      type: "reference", // Reference the `category` document
      to: [{ type: "category" }], // Link to the `category` schema
      title: "Category",
      description: "Category of the food item (e.g., Main Course, Dessert, Drink, etc.)",
    }),
    defineField({
      name: "price",
      type: "number",
      title: "Current Price",
    }),
    defineField({
      name: "originalPrice",
      type: "number",
      title: "Original Price",
      description: "Price before discount (if any)",
    }),
    defineField({
      name: "tags",
      type: "array",
      title: "Tags",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      description: "Tags for categorization (e.g., Best Seller, Popular, New)",
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Food Image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
      description: "Short description of the food item",
    }),
    defineField({
      name: "rating",
      type: "text",
      title: "Rating",
    }),
    defineField({
      name: "available",
      type: "boolean",
      title: "Available",
      description: "Availability status of the food item",
    }),
  ],
});

export default item;