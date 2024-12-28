import { defineType, defineField } from "sanity";

const chairGallery = defineType({
  name: "chairGallery",
  title: "Chair-Gallery",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
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

export default chairGallery;
