import { db } from "@/lib/db";

export const getNoteById = async (noteId: string) => {
  const note = await db.note.findUnique({
    where: {
      id: noteId,
    },
  });

  return note;
};
