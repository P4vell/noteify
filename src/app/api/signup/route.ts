import { SignupCredentials } from "@/lib/schemas/signup";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import bcrypt from "bcrypt";

export const POST = async (request: Request) => {
  const body: SignupCredentials = await request.json();
  const { email, name, password } = body;

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await db.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
    },
  });

  return NextResponse.json(user);
};
