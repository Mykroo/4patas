import Image, { type ImageProps } from "next/image";
import type { ReactElement } from "react";

export const ImageAtom = (props: ImageProps): ReactElement => {
  return (
    <Image
      {...props}
      className={`rounded-lg object-cover ${props.className ?? ""}`.trim()}
      alt={props.alt}
      priority={props.priority ?? false}
    />
  );
}; 