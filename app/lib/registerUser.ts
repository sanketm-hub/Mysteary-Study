"use server";

import { client } from "@/sanity/lib/client";
import bcrypt from "bcryptjs";

// Server Action to register a user
export async function registerUser(name: string, email: string, password: string) {
  try {
    // Check if the user already exists
    const existingUser = await client.fetch(
      `*[_type == "user" && email == $email][0]`,
      { email }
    );

    if (existingUser) {
      return { success: false, message: "User already exists" };
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 10);

    // Create new user document in Sanity
    const newUser = await client.create({
      _type: "user",
      name,
      email,
      passwordHash,
      provider: "credentials",
      createdAt: new Date().toISOString(),
    });

    return { success: true, user: newUser };
  } catch (error) {
    console.error("Sanity user registration error:", error);
    return { success: false, message: "Failed to create user" };
  }
}
