import type { ReactNode, ReactElement } from "react";
import React from "react";

export interface HeadingProps {
  level?: 1 | 2 | 3 | 4;
  children: ReactNode;
  className?: string;
}

export const Heading = ({ level = 2, children, className = "" }: HeadingProps): ReactElement => {
  const tag = `h${level}` as "h1" | "h2" | "h3" | "h4";
  const size =
    level === 1 ? "text-5xl font-bold" :
    level === 2 ? "text-3xl font-bold" :
    level === 3 ? "text-2xl font-semibold" :
    "text-xl font-semibold";
  return React.createElement(tag, { className: `${size} ${className}` }, children);
}; 