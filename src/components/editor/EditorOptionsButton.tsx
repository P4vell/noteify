import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/DropdownMenu";
import { Image as ImageIcon, MoreHorizontal } from "lucide-react";
import { Button } from "../ui/Button";
import { DeleteNoteButton } from "./DeleteNoteButton";

type EditorOptionsButtonProps = {
  noteId: string;
};

export const EditorOptionsButton = ({ noteId }: EditorOptionsButtonProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="w-7 h-7 p-1"
          aria-label="Open options menu"
        >
          <MoreHorizontal className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="font-medium">
        <DropdownMenuItem>
          <ImageIcon className="w-4 h-4 mr-1.5" />
          <span>Update cover image</span>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <DeleteNoteButton noteId={noteId} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
