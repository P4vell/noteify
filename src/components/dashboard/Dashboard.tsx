"use client";

import { CreateNoteButton } from "./CreateNoteButton";
import { EmptyState } from "./EmptyState";
import { Container } from "../shared/Container";
import { useQuery } from "react-query";
import { NoteCard } from "./NoteCard";
import { Skeleton } from "../ui/Skeleton";
import { Note } from "@prisma/client";
import axios from "axios";

export const Dashboard = () => {
  const { data: notes, isLoading } = useQuery(["notes"], async () => {
    const { data } = await axios.get("/api/notes");
    return data as Note[];
  });

  return (
    <Container>
      <div className="flex justify-between items-center border-b border-gray-200 pb-5 my-8">
        <h2 className="text-3xl font-semibold sm:text-4xl">My Notes</h2>
        <CreateNoteButton />
      </div>

      {notes && notes.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {notes.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      ) : isLoading ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...new Array(6)].map((_, index) => (
            <Skeleton key={index} className="h-[190px]" />
          ))}
        </div>
      ) : (
        <EmptyState />
      )}
    </Container>
  );
};
