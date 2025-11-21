export interface PillProps {
  title: string
}
// interfaces/index.tsx
import { ButtonHTMLAttributes, ReactNode } from "react";
export interface ButtonProps {
  title: string;
  "styles: string"
  size: 'small' | 'medium' | 'large';
  shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  className?: string;
  onClick?: () => void;
}
