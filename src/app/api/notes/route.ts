import { getCurrentUser } from "@/actions/getCurrentUser";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export const GET = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const notes = await db.note.findMany({
    where: {
      userId: currentUser.id,
    },
  });

  return NextResponse.json(notes);
};
