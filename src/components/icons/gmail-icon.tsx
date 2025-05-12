
import { SiGmail } from "react-icons/si";
import type React from 'react';
import { cn } from "@/lib/utils";

export interface GmailIconProps extends React.HTMLAttributes<HTMLDivElement> {}

export function GmailIcon(props: GmailIconProps) {
  const { className, ...rest } = props;
  return (
    <div className={cn("p-1 rounded-md bg-white", className)} {...rest}>
      <SiGmail size={40} color="#D44638" />
    </div>
  );
}

