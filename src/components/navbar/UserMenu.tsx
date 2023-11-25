"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/DropdownMenu";
import { ChevronsUpDown } from "lucide-react";
import { signOut } from "next-auth/react";
import { Button } from "../ui/Button";
import { Avatar } from "./Avatar";
import { User } from "@prisma/client";
import Link from "next/link";

type UserMenuProps = {
  currentUser: User;
};

export const UserMenu = ({ currentUser }: UserMenuProps) => {
  const { name, email, image } = currentUser;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="max-w-[150px] flex items-center gap-2"
        >
          <Avatar imageUrl={image} />
          <p className="text-start font-semibold line-clamp-1">{name}</p>
          <ChevronsUpDown className="w-4 h-4 text-zinc-500" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuLabel className="flex flex-col space-y-0.5 leading-none">
          <p className="text-sm text-black font-semibold">{name}</p>
          <p className="truncate text-xs text-zinc-700">{email}</p>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <Link href="/dashboard">Dashboard</Link>
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => signOut()}>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};