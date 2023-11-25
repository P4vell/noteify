import { getCurrentUser } from "@/actions/getCurrentUser";
import { NextResponse } from "next/server";
import { NoteData } from "@/lib/schemas/note";
import { db } from "@/lib/db";

export const POST = async (request: Request) => {
  const currentUser = await getCurrentUser();
  const body: NoteData = await request.json();
  const { title, description } = body;

  if (!currentUser) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const note = await db.note.create({
    data: {
      title,
      description,
      userId: currentUser.id,
    },
  });

  return NextResponse.json(note);
};
