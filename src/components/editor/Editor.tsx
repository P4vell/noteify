"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import { useEffect, useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { useMutation } from "react-query";
import { Toolbar } from "./Toolbar";
import { toast } from "sonner";
import { Note } from "@prisma/client";
import StarterKit from "@tiptap/starter-kit";
import axios from "axios";

type EditorProps = {
  initialEditorContent: string;
  noteId: string;
  isEditable: boolean;
};

export const Editor = ({
  noteId,
  initialEditorContent,
  isEditable,
}: EditorProps) => {
  const [editorContent, setEditorContent] = useState(initialEditorContent);
  const debouncedEditorContent = useDebounce(editorContent, 3000);
  const editor = useEditor({
    autofocus: true,
    extensions: [StarterKit],
    content: editorContent,
    editable: isEditable,
    onUpdate: ({ editor }) => {
      setEditorContent(editor.getHTML());
    },
  });

  const { mutate: updateNoteHandler } = useMutation({
    mutationFn: async (payload: Pick<Note, "content" | "id">) => {
      const { data } = await axios.patch("/api/notes/update/content", payload);
      return data;
    },
    onSuccess: () => {
      toast.success("Note has been saved!");
    },
    onError: () => {
      toast.error("Failed to save a note");
    },
  });

  useEffect(() => {
    if (debouncedEditorContent === "" || initialEditorContent === editorContent)
      return;
    updateNoteHandler({ content: debouncedEditorContent, id: noteId });
  }, [debouncedEditorContent]);

  return (
    <div className="w-full min-h-[70vh] bg-white rounded-xl shadow-xl">
      {editor && isEditable ? <Toolbar editor={editor} /> : null}
      <div className="prose p-4">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};
