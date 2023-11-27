import {
  Bold,
  Code,
  CodepenIcon,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Italic,
  List,
  ListOrdered,
  Quote,
  Redo,
  Strikethrough,
  Undo,
} from "lucide-react";
import { TooltipProvider } from "../ui/Tooltip";
import { ToolbarItem } from "./ToolbarItem";
import { Editor } from "@tiptap/react";

type ToolbarProps = {
  editor: Editor;
};

export const Toolbar = ({ editor }: ToolbarProps) => {
  return (
    <div className="flex justify-center flex-wrap gap-3 border-b border-gray-200 p-2 sm:p-4">
      <TooltipProvider>
        <ToolbarItem
          icon={Bold}
          tooltipValue="Toggle bold font"
          isActive={editor.isActive("bold")}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          handleClick={() => editor.chain().focus().toggleBold().run()}
        />
        <ToolbarItem
          icon={Italic}
          tooltipValue="Toggle italic font"
          isActive={editor.isActive("italic")}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          handleClick={() => editor.chain().focus().toggleItalic().run()}
        />
        <ToolbarItem
          icon={Strikethrough}
          tooltipValue="Toggle strike through text"
          isActive={editor.isActive("strike")}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          handleClick={() => editor.chain().focus().toggleStrike().run()}
        />
        <ToolbarItem
          icon={Code}
          tooltipValue="Toggle code font"
          isActive={editor.isActive("code")}
          disabled={!editor.can().chain().focus().toggleCode().run()}
          handleClick={() => editor.chain().focus().toggleCode().run()}
        />
        <ToolbarItem
          icon={Heading1}
          tooltipValue="Add level 1 heading"
          isActive={editor.isActive("heading", { level: 1 })}
          handleClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
        />
        <ToolbarItem
          icon={Heading2}
          tooltipValue="Add level 2 heading"
          isActive={editor.isActive("heading", { level: 2 })}
          handleClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
        />
        <ToolbarItem
          icon={Heading3}
          tooltipValue="Add level 3 heading"
          isActive={editor.isActive("heading", { level: 3 })}
          handleClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
        />
        <ToolbarItem
          icon={Heading4}
          tooltipValue="Add level 4 heading"
          isActive={editor.isActive("heading", { level: 4 })}
          handleClick={() =>
            editor.chain().focus().toggleHeading({ level: 4 }).run()
          }
        />
        <ToolbarItem
          icon={Heading5}
          tooltipValue="Add level 5 heading"
          isActive={editor.isActive("heading", { level: 5 })}
          handleClick={() =>
            editor.chain().focus().toggleHeading({ level: 5 }).run()
          }
        />
        <ToolbarItem
          icon={Heading6}
          tooltipValue="Add level 6 heading"
          isActive={editor.isActive("heading", { level: 6 })}
          handleClick={() =>
            editor.chain().focus().toggleHeading({ level: 6 }).run()
          }
        />
        <ToolbarItem
          icon={List}
          tooltipValue="Add bullet list"
          isActive={editor.isActive("bulletList")}
          handleClick={() => editor.chain().focus().toggleBulletList().run()}
        />
        <ToolbarItem
          icon={ListOrdered}
          tooltipValue="Add ordered list"
          isActive={editor.isActive("orderedList")}
          handleClick={() => editor.chain().focus().toggleOrderedList().run()}
        />
        <ToolbarItem
          icon={CodepenIcon}
          tooltipValue="Add code block"
          isActive={editor.isActive("codeBlock")}
          handleClick={() => editor.chain().focus().toggleCodeBlock().run()}
        />
        <ToolbarItem
          icon={Quote}
          tooltipValue="Add quote block"
          isActive={editor.isActive("blockquote")}
          handleClick={() => editor.chain().focus().toggleBlockquote().run()}
        />
        <ToolbarItem
          icon={Undo}
          tooltipValue="Undo"
          disabled={!editor.can().chain().focus().undo().run()}
          handleClick={() => editor.chain().focus().undo().run()}
        />
        <ToolbarItem
          icon={Redo}
          tooltipValue="Redo"
          disabled={!editor.can().chain().focus().redo().run()}
          handleClick={() => editor.chain().focus().redo().run()}
        />
      </TooltipProvider>
    </div>
  );
};
