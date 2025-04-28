import type { ReactNode, ReactElement } from "react";
import React from "react";

export interface TextProps {
  as?: "p" | "span";
  children: ReactNode;
  className?: string;
}

export const Text = ({ as = "p", children, className = "" }: TextProps): ReactElement => {
  const base = "text-base text-gray-700";
  return React.createElement(as, { className: `${base} ${className}` }, children);
}; 