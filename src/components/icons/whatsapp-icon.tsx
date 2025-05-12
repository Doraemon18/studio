
import type { SVGProps } from 'react';
import { Phone } from 'lucide-react'; // Using lucide-react Phone icon

export function WhatsappIcon(props: SVGProps<SVGSVGElement>) {
  const iconSize = 35; 
  const scaleFactor = iconSize / 24; // Lucide default is 24

  // Approximate coordinates for the tail parts
  // These are illustrative and may need fine-tuning to perfectly match the CSS 3D effect.
  // White (main) part of the tail
  const whiteTailPath = "M30,58 L10,75 L18,65 Z";
  // Green (accent) part of the tail - slightly offset and "behind" white
  const greenAccentTailPath = "M31,59 L12,77 L19,66 Z";


  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80" // Default width as per CSS example (.white class)
      height="80" // Default height as per CSS example
      viewBox="0 0 80 80" // ViewBox to match the dimensions
      {...props} // Spread existing props like className, onClick, etc.
    >
      <defs>
        <filter id="whatsapp-icon-shadow" x="-50%" y="-50%" width="200%" height="200%">
          {/* Approximating CSS shadow: dx, dy, blur. stdDeviation is roughly blur/2. */}
          <feDropShadow dx="2" dy="2" stdDeviation="1.5" floodColor="rgba(0,0,0,0.3)" />
        </filter>
      </defs>

      {/* Group to apply the shadow filter */}
      <g filter="url(#whatsapp-icon-shadow)">
        {/* White outer circle (main body) */}
        {/* r=39 to make diameter effectively 78, leaving space for shadow or antialiasing within 80x80 box */}
        <circle cx="40" cy="40" r="39" fill="#FFFFFF" />
        
        {/* Green accent part of the tail (drawn first to be "behind" the white part) */}
        <path d={greenAccentTailPath} fill="#3AC371" />

        {/* White main part of the tail */}
        <path d={whiteTailPath} fill="#FFFFFF" />
        
        {/* Green inner circle */}
        <circle cx="40" cy="40" r="35" fill="#3AC371" />
      </g>
      
      {/* Phone Icon, centered in the green circle, rotated, and scaled */}
      <g 
        transform={`translate(40, 40) rotate(90) scale(${scaleFactor}) translate(-12, -12)`}
        // Explanation of transform:
        // 1. translate(-12, -12): Center the 24x24 Lucide icon at the origin (0,0) for scaling/rotation.
        // 2. scale(${scaleFactor}): Scale the icon to the target size (35px).
        // 3. rotate(90): Rotate the icon 90 degrees clockwise.
        // 4. translate(40, 40): Move the transformed icon to the center of the 80x80 SVG canvas.
      >
        <Phone color="#FFFFFF" strokeWidth={1.5} fill="#FFFFFF" /> 
        {/* strokeWidth and fill to make the phone icon appear more solid, like Font Awesome's .fas */}
      </g>
    </svg>
  );
}
