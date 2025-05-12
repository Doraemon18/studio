import { FaWhatsapp } from "react-icons/fa";
import type { SVGProps } from 'react'; // Keep for props consistency if needed, though current implementation doesn't use it.

// Using React.HTMLAttributes<HTMLDivElement> as the component returns a div
export interface WhatsAppIconProps extends React.HTMLAttributes<HTMLDivElement> {}

export function WhatsappIcon(props: WhatsAppIconProps) {
  // The user provided a specific implementation with a div wrapper
  // and fixed size/color for FaWhatsapp.
  // The className from props (contact/page.tsx) will be applied to this div.
  return (
    <div {...props}>
      <FaWhatsapp size={40} color="#25D366" />
    </div>
  );
}
