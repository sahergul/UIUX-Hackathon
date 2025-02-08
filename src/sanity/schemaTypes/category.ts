import { defineType, defineField } from "sanity";

const category = defineType({
  name: "category",
  type: "document",
  title: "Category",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Category Name",
      validation: (Rule) => Rule.required(), // Ensure the category name is required
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "name", // Automatically generate slug from the category name
        maxLength: 200, // Limit the length of the slug
      },
      validation: (Rule) => Rule.required(), // Ensure the slug is required
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
      description: "A brief description of the category",
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Category Image",
      options: {
        hotspot: true, // Enable hotspot for responsive images
      },
      description: "An image representing the category",
    }),
  ],
});

export default category;