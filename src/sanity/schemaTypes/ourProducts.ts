import { defineField, defineType } from "sanity";

export const OurProduct = defineType({
  name: "ourProducts",
  title: "Our-Products",
  type: "document",
  fields: [
    defineField({
      name: "id",
      title: "ID",
      type: "number",
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: "oldPrice",
      title: "Old Price",
      type: "number",
      description: "Original price before sale",
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
    }),
  ],
});
