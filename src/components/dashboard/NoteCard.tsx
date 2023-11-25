import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { formatDistance, parseISO } from "date-fns";
import { buttonVariants } from "../ui/Button";
import { FileEdit } from "lucide-react";
import { Badge } from "../ui/Badge";
import { Note } from "@prisma/client";
import { cn } from "@/lib/utils";
import Link from "next/link";

type NoteCardProps = {
  note: Note;
};

export const NoteCard = ({ note }: NoteCardProps) => {
  const { title, description, isPublished, updatedAt, id } = note;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span className="font-bold truncate">{title}</span>
          {isPublished ? (
            <Badge>Published</Badge>
          ) : (
            <Badge variant="destructive">Unpublished</Badge>
          )}
        </CardTitle>

        <CardDescription className="text-neutral-500">
          Last update:{" "}
          {formatDistance(parseISO(String(updatedAt)), new Date(), {
            addSuffix: true,
          })}
        </CardDescription>
      </CardHeader>

      <CardContent className="h-[20px] text-sm text-neutral-500 truncate">
        {description || "No description"}
      </CardContent>

      <CardFooter>
        <Link
          href={`/note/${id}`}
          className={cn(buttonVariants({ className: "w-full mt-2" }))}
        >
          <FileEdit className="w-5 h-5 mr-1.5" />
          <span>Edit note</span>
        </Link>
      </CardFooter>
    </Card>
  );
};
