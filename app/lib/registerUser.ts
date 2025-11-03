import { client } from "@/sanity/lib/client";
import bcrypt from "bcryptjs";

export async function registerUser(name: string, email: string, password: string) {
  try {
    const existingUser = await client.fetch(
      `*[_type == "user" && email == $email][0]`,
      { email }
    );

    if (existingUser) {
      return { success: false, message: "Email already registered" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await client.create({
      _type: "user",
      name,
      email,
      password: hashedPassword,
    });

    return { success: true, user: newUser };
  } catch (error) {
    console.error("Sanity user registration error:", error);
    return { success: false, message: "Failed to register user" };
  }
}
