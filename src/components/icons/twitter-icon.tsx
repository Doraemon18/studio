
import type { SVGProps } from 'react';

export function TwitterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor" // Twitter icon is typically solid
      stroke="currentColor"
      strokeWidth="0" // No stroke for solid fill
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22.46 6c-.77.35-1.6.58-2.46.67.9-.53 1.59-1.37 1.92-2.38-.84.5-1.78.86-2.79 1.07C18.27 4.41 17.02 4 15.64 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C7.38 8.98 4.37 7.28 2.38 4.76c-.39.67-.61 1.45-.61 2.28 0 1.48.76 2.79 1.91 3.55-.71 0-1.37-.22-1.95-.54v.03c0 2.07 1.48 3.8 3.44 4.19-.36.1-.74.15-1.14.15-.28 0-.55-.03-.81-.08.54 1.7 2.11 2.93 3.97 2.96-1.47 1.15-3.32 1.83-5.33 1.83-.35 0-.69-.02-1.03-.06C3.49 20.27 5.82 21 8.36 21c7.63 0 11.8-6.33 11.8-11.81 0-.18 0-.36-.01-.53.81-.58 1.51-1.31 2.07-2.14z" />
    </svg>
  );
}
