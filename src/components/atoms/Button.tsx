import { Button as ShadUIButton } from "ui/button";
import type { ComponentPropsWithoutRef, ReactElement } from "react";

export type ButtonProps = ComponentPropsWithoutRef<typeof ShadUIButton>;

export const Button = ({ className = "", ...props }: ButtonProps): ReactElement => {
  return (
    <ShadUIButton
      className={`focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
      {...props}
    />
  );
}; 