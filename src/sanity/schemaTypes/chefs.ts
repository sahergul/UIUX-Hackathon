import { defineType, defineField } from "sanity";

const chef = defineType(

  {
    name: 'chef',
    type: 'document',
    title: 'Chef',
    fields: [
      defineField(
      {
        name: 'name',
        type: 'string',
        title: 'Chef Name',
      }),
      defineField(
        {
        name: 'position',
        type: 'string',
        title: 'Position',
        description: 'Role or title of the chef (e.g., Head Chef, Sous Chef)',
      }),
      defineField(
        {
        name: 'experience',
        type: 'number',
        title: 'Years of Experience',
        description: 'Number of years the chef has worked in the culinary field',
      }),
      defineField(
      {
        name: 'specialty',
        type: 'string',
        title: 'Specialty',
        description: 'Specialization of the chef (e.g., Italian Cuisine, Pastry)',
      }),
      defineField(
        {
        name: 'image',
        type: 'image',
        title: 'Chef Image',
        options: {
          hotspot: true,
        },
      }),
      defineField(
        {
        name: 'description',
        type: 'text',
        title: 'Description',
        description: 'Short bio or introduction about the chef',
      }),
      defineField(
      {
        name: 'available',
        type: 'boolean',
        title: 'Currently Active',
        description: 'Availability status of the chef',
      }),
    ],
  });

  export default chef