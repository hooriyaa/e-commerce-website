import { defineField, defineType } from "sanity";

export const TopCategory = defineType({
  name: "topCategory",
  title: "Top-Category",
  type: "document",
  fields: [
    defineField({
      name: "id",
      title: "ID",
      type: "number",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "productCount",
      title: "Product Count",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
