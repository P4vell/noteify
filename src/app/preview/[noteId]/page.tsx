import { getNoteById } from "@/actions/getNoteById";
import { NoteEditor } from "@/components/editor/NoteEditor";
import { notFound } from "next/navigation";

type NotePageProps = {
  params: {
    noteId: string;
  };
};

const PreviewPage = async ({ params }: NotePageProps) => {
  const { noteId } = params;
  const note = await getNoteById(noteId);

  if (!note || !note.isPublished) {
    return notFound();
  }

  return <NoteEditor isEditable={false} note={note} />;
};

export default PreviewPage;
