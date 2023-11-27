import { getNoteById } from "@/actions/getNoteById";
import { NoteEditor } from "@/components/editor/NoteEditor";
import { notFound } from "next/navigation";

type NotePageProps = {
  params: {
    noteId: string;
  };
};

const NotePage = async ({ params }: NotePageProps) => {
  const { noteId } = params;
  const note = await getNoteById(noteId);

  if (!note) {
    return notFound();
  }

  return <NoteEditor isEditable note={note} />;
};

export default NotePage;
