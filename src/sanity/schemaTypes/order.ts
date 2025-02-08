import { defineType, defineField } from "sanity";

const order = defineType(
{
    name: "order",
    type: "document",
    title: "Order",
    fields: [
    defineField({
        name: "shippingAddress",
        type: "object",
        title: "Shipping Address",
        fields: [
          { name: "firstName", type: "string", title: "First Name" },
          { name: "lastName", type: "string", title: "Last Name" },
          // Add other fields...
        ],
      }),
      defineField({
        name: "billingAddress",
        type: "object",
        title: "Billing Address",
        fields: [
          { name: "sameAsShipping", type: "boolean", title: "Same as Shipping" },
          // Add other fields...
        ],
      }),
      defineField({
        name: "items",
        type: "array",
        title: "Items",
        of: [{ type: "reference", to: [{ type: "food" }] }],
      }),
      defineField({
        name: "total",
        type: "number",
        title: "Total",
      }),
      defineField({
        name: "status",
        type: "string",
        title: "Status",
      }),
    ],
  })

  export default order