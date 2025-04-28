import Link from "next/link";
import { Button } from "./Button";
import type { ReactNode, ReactElement } from "react";
import type { LinkProps } from "next/link";

export interface LinkButtonProps extends Omit<LinkProps, "children"> {
  children: ReactNode;
  ariaLabel?: string;
  className?: string;
}

export const LinkButton = ({ href, children, ariaLabel, className = "", ...props }: LinkButtonProps): ReactElement => {
  return (
    <Button asChild aria-label={ariaLabel} className={className}>
      <Link href={href} {...props}>
        {children}
      </Link>
    </Button>
  );
}; 