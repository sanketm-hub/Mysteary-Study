import { defineType, defineField } from "sanity";

export const user = defineType({
  name: "user",
  title: "User",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Full Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "passwordHash",
      title: "Password Hash",
      type: "string",
      hidden: true, // Prevent exposure in Sanity Studio
    }),
    defineField({
      name: "provider",
      title: "Auth Provider",
      type: "string",
      initialValue: "credentials",
    }),
    defineField({
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
});

export default user;
