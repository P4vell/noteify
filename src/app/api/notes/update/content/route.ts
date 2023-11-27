import { NextResponse } from "next/server";
import { Note } from "@prisma/client";
import { db } from "@/lib/db";

export const PATCH = async (request: Request) => {
  const body: Pick<Note, "content" | "id"> = await request.json();
  const { content, id } = body;

  if (!content || !id) {
    return new NextResponse("Missing content or note id", { status: 400 });
  }

  const note = await db.note.update({
    where: {
      id,
    },
    data: {
      content,
    },
  });

  return NextResponse.json(note);
};
