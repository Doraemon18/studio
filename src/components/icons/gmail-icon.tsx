
import { SiGmail } from "react-icons/si";
import type React from 'react';

export interface GmailIconProps extends React.HTMLAttributes<HTMLDivElement> {}

export function GmailIcon(props: GmailIconProps) {
  return (
    <div {...props}>
      <SiGmail size={40} color="#D44638" />
    </div>
  );
}
