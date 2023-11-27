"use client";

import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/Tooltip";
import { LucideIcon } from "lucide-react";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";

type ToolbarItemProps = {
  icon: LucideIcon;
  tooltipValue: string;
  isActive?: boolean;
  disabled?: boolean;
  handleClick: () => void;
};

export const ToolbarItem = ({
  handleClick,
  icon: Icon,
  isActive,
  disabled,
  tooltipValue,
}: ToolbarItemProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          className={cn("w-8 h-8 p-1", {
            "bg-neutral-200": isActive,
          })}
          disabled={disabled}
          onClick={handleClick}
          aria-label={tooltipValue}
        >
          <Icon className="w-6 h-6" />
        </Button>
      </TooltipTrigger>

      <TooltipContent>{tooltipValue}</TooltipContent>
    </Tooltip>
  );
};
