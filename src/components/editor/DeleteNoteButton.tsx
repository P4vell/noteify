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
      variant="ghost"
      size="sm"
      className="w-full justify-start"
      isLoading={isLoading}
      onClick={() => deleteNoteHandler()}
    >
      <Trash2 className="w-4 h-4 mr-1.5" />
      <span>Delete</span>
    </Button>
  );
};
