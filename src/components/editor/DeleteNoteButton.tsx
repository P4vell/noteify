"use client";

import { useMutation } from "react-query";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";
import { Button } from "../ui/Button";
import { toast } from "sonner";
import axios from "axios";

type DeleteNoteButtonProps = {
  noteId: string;
};

export const DeleteNoteButton = ({ noteId }: DeleteNoteButtonProps) => {
  const router = useRouter();

  const { mutate: deleteNoteHandler, isLoading } = useMutation({
    mutationFn: async () => {
      const { data } = await axios.delete("/api/notes/delete", {
        data: { id: noteId },
      });
      return data;
    },
    onSuccess: () => {
      toast.success("Note has been deleted");
      router.push("/dashboard");
    },
    onError: () => {
      toast.error("Something went wrong, please try again");
    },
  });

  return (
    <Button
      variant="destructive"
      size="sm"
      isLoading={isLoading}
      onClick={() => deleteNoteHandler()}
      aria-label="Delete note"
    >
      <Trash2 className="w-4 h-4 sm:mr-1.5" />
      <span className="hidden sm:inline">Delete note</span>
    </Button>
  );
};
