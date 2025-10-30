import { defineField, defineType } from "sanity";

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    // ✅ Product Name
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    // ✅ Slug (Auto-generated from name)
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    // ✅ Price
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),

    // ✅ Multiple Categories
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "category" }],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),

    // ✅ Product Images
    defineField({
      name: "image",
      title: "Product Images",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),

    // ✅ Product Description (Optional)
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),

    // ✅ Creation Date (Automatically handled by Sanity)
    defineField({
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    }),
  ],
});

export default product;
