"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/Form";
import { NoteData, noteSchema } from "@/lib/schemas/note";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "react-query";
import { useRouter } from "next/navigation";
import { Textarea } from "../ui/Textarea";
import { useForm } from "react-hook-form";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { toast } from "sonner";
import { Note } from "@prisma/client";
import axios from "axios";

export const CreateNoteButton = () => {
  const form = useForm<NoteData>({
    resolver: zodResolver(noteSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });
  const router = useRouter();

  const { mutate: createNoteHandler, isLoading } = useMutation({
    mutationFn: async (payload: NoteData) => {
      const { data } = await axios.post("/api/notes/create", payload);
      return data as Note;
    },
    onSuccess: ({ id }) => {
      toast.success("Note has been created!");
      router.push(`/note/${id}`);
    },
    onError: () => {
      toast.error("Something went wrong, please try again");
    },
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm">Create new note</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create note</DialogTitle>
          <DialogDescription>
            Start writing down your ideas by creating a new note
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            className="space-y-4"
            onSubmit={form.handleSubmit((data) => createNoteHandler(data))}
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description (optional)</FormLabel>
                  <FormControl>
                    <Textarea rows={5} placeholder="Description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" isLoading={isLoading} className="w-full">
              Create form
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
