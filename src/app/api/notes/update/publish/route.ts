import { NextResponse } from "next/server";
import { Note } from "@prisma/client";
import { db } from "@/lib/db";

export const PATCH = async (request: Request) => {
  const body: Pick<Note, "id"> = await request.json();
  const { id: noteId } = body;

  if (!noteId) {
    return new NextResponse("Id not provided", { status: 400 });
  }

  const note = await db.note.findUnique({
    where: {
      id: noteId,
    },
  });

  if (!note) {
    return new NextResponse("Not found", { status: 404 });
  }

  const updatedValue = !note.isPublished;

  const updatedNote = await db.note.update({
    where: {
      id: noteId,
    },
    data: {
      isPublished: updatedValue,
    },
  });

  return NextResponse.json(updatedNote);
};
