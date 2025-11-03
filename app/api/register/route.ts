import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    // Check if user already exists
    const existingUser = await client.fetch(
      `*[_type == "user" && email == $email][0]`,
      { email }
    );
    if (existingUser)
      return NextResponse.json({ success: false, message: "Email already registered" });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user in Sanity
    const newUser = await client.create({
      _type: "user",
      name,
      email,
      passwordHash: hashedPassword,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true, user: newUser });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json({ success: false, message: "Something went wrong" });
  }
}
