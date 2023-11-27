"use client";

import { EditorOptionsButton } from "./EditorOptionsButton";
import { PublishButton } from "./PublishButton";
import { useSession } from "next-auth/react";
import { Container } from "../shared/Container";
import { Editor } from "./Editor";
import { Note } from "@prisma/client";

type NoteEditorProps = {
  note: Note;
  isEditable: boolean;
};

export const NoteEditor = ({ note, isEditable }: NoteEditorProps) => {
  const { title, content, id, isPublished } = note;
  const { data } = useSession();

  return (
    <Container className="mt-8">
      {isEditable ? (
        <div className="w-full flex justify-between items-center bg-white p-4 rounded-xl shadow-xl mb-8">
          <p className="text-sm font-semibold sm:text-base">
            {data?.user?.name} /{" "}
            <span className="text-neutral-500">{title}</span>
          </p>

          <div className="flex items-center gap-2">
            <PublishButton noteId={id} isPublished={isPublished} />
            <EditorOptionsButton noteId={id} />
          </div>
        </div>
      ) : null}

      <Editor
        noteId={id}
        initialEditorContent={content}
        isEditable={isEditable}
      />
    </Container>
  );
};
