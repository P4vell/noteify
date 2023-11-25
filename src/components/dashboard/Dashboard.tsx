import { CreateNoteButton } from "./CreateNoteButton";
import { Container } from "../shared/Container";

export const Dashboard = () => {
  return (
    <Container>
      <div className="flex justify-between items-center border-b border-gray-200 pb-5 my-8">
        <h2 className="text-3xl font-semibold sm:text-4xl">My Notes</h2>
        <CreateNoteButton />
      </div>
    </Container>
  );
};
