import { defineField, defineType } from "sanity";

export const FeaturedProducts = defineType({
  name: "featuredProducts",
  title: "Featured-Products",
  type: "document",
  fields: [
    defineField({
      name: "id",
      title: "id",
      type: "number",
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "The name of the product",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      description: "The price of the product",
    }),
    defineField({
      name: "oldPrice",
      title: "Old Price",
      type: "number",
      description: "Optional: The original price before a sale.",
    }),
    defineField({
      name: "tag",
      title: "Tag",
      type: "string",
      options: {
        list: [
          { title: "New", value: "New" },
          { title: "Sales", value: "Sales" },
        ],
        layout: "dropdown",
      },
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "Upload the product image",
    }),
  ],
});
