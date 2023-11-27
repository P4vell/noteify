import { NextResponse } from "next/server";
import { Note } from "@prisma/client";
import { db } from "@/lib/db";

export const DELETE = async (request: Request) => {
  const body: Pick<Note, "id"> = await request.json();
  const { id: noteId } = body;

  if (!noteId) {
    return new NextResponse("Id not provided", { status: 400 });
  }

  const note = await db.note.delete({
    where: {
      id: noteId,
    },
  });

  return NextResponse.json(note);
};
