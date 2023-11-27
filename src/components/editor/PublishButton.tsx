"use client";

import { Popover, PopoverContent, PopoverTrigger } from "../ui/Popover";
import { Check, Copy, Globe } from "lucide-react";
import { useMutation } from "react-query";
import { useOrigin } from "@/hooks/useOrigin";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/Button";
import { toast } from "sonner";
import { Note } from "@prisma/client";
import axios from "axios";

type PublishButtonProps = {
  noteId: string;
  isPublished: boolean;
};

export const PublishButton = ({ noteId, isPublished }: PublishButtonProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const origin = useOrigin();
  const url = `${origin}/preview/${noteId}`;
  const router = useRouter();

  const { mutate: updatePublishStatus, isLoading } = useMutation({
    mutationFn: async () => {
      const { data } = await axios.patch("/api/notes/update/publish", {
        id: noteId,
      });
      return data as Note;
    },
    onSuccess: ({ isPublished }) => {
      router.refresh();
      toast.success(
        isPublished ? "Note has been published" : "Note has been unpublished"
      );
    },
    onError: () => {
      toast.error("Something went wrong, please try again");
    },
  });

  const copyNoteUrl = () => {
    navigator.clipboard.writeText(url);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="sm">
          Publish
          {isPublished ? <Globe className="text-sky-500 w-4 h-4 ml-2" /> : null}
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-72" align="end" alignOffset={8} forceMount>
        {isPublished ? (
          <div className="space-y-4">
            <div className="flex items-center gap-x-2">
              <Globe className="text-sky-500 animate-pulse h-4 w-4" />
              <p className="text-xs font-medium text-sky-500">
                This note is live on web.
              </p>
            </div>
            <div className="flex items-center">
              <input
                className="flex-1 px-2 text-xs border rounded-l-md h-8 bg-muted truncate"
                value={url}
                disabled
              />
              <Button className="h-8 rounded-l-none" onClick={copyNoteUrl}>
                {isCopied ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
            <Button
              size="sm"
              className="w-full text-xs"
              isLoading={isLoading}
              onClick={() => updatePublishStatus()}
            >
              Unpublish
            </Button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <Globe className="h-8 w-8 text-muted-foreground mb-2" />
            <p className="text-sm font-medium mb-2">Publish this note</p>
            <span className="text-xs text-muted-foreground mb-4">
              Share your work with others.
            </span>
            <Button
              isLoading={isLoading}
              onClick={() => updatePublishStatus()}
              className="w-full text-xs"
              size="sm"
            >
              Publish
            </Button>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};
