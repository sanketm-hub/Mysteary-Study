import { client } from "@/sanity/lib/client";
import bcrypt from "bcryptjs";

export async function loginUser(email: string, password: string) {
  try {
    const user = await client.fetch(
      `*[_type == "user" && email == $email][0]`,
      { email }
    );

    if (!user) {
      return { success: false, message: "Invalid email or password" };
    }

    const passwordMatch = await bcrypt.compare(password, user.passwordHash);

    if (!passwordMatch) {
      return { success: false, message: "Invalid email or password" };
    }

    const safeUser = {
      _id: user._id,
      name: user.name,
      email: user.email,
    };

    return { success: true, user: safeUser };
  } catch (error) {
    console.error("Login error:", error);
    return { success: false, message: "Login failed" };
  }
}
