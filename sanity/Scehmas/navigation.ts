import { defineField, defineType } from "sanity";

export const navigation = defineType({
  name: "navigation",
  title: "Navigation Menu",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Menu Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug / Link URL",
      type: "string",
      description: "Example: /about or /shop",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "submenu",
      title: "Submenu Items",
      type: "array",
      of: [
        defineField({
          name: "submenuItem",
          title: "Submenu Item",
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "slug",
              title: "Slug / URL",
              type: "string",
              description: "Example: /shop/tea or /shop/soaps",
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Controls the order of menu items (lower appears first)",
      validation: (Rule) => Rule.min(1),
    }),
  ],
});

export default navigation;
