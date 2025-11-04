import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    // 1️⃣ Check if email already exists
    const existingUser = await client.fetch(
      `*[_type == "user" && email == $email][0]`,
      { email }
    );

    if (existingUser) {
      return NextResponse.json({
        success: false,
        message: "Email already registered",
      });
    }

    // 2️⃣ Hash password
    const passwordHash = await bcrypt.hash(password, 10);

    // 3️⃣ Create user document
    const newUser = await client.create({
      _type: "user",
      name,
      email,
      passwordHash,
      createdAt: new Date().toISOString(),
    });

    // 4️⃣ Return safe user info
    return NextResponse.json({
      success: true,
      user: {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
      message: "Registration successful!",
    });
  } catch (error) {
    console.error("Sanity Registration Error:", error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong during registration.",
    });
  }
}
