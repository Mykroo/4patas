import { ImageAtom } from "../atoms/ImageAtom";
import { Heading } from "../atoms/Heading";
import { Text } from "../atoms/Text";
import { LinkButton } from "../atoms/LinkButton";
import type { ReactElement } from "react";

export interface CardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  linkHref?: string;
  linkLabel?: string;
  className?: string;
}

export const Card = ({
  imageSrc,
  imageAlt,
  title,
  description,
  linkHref,
  linkLabel,
  className = "",
}: CardProps): ReactElement => {
  return (
    <div className={`bg-white rounded-lg overflow-hidden shadow-lg flex flex-col ${className}`}>
      <ImageAtom
        src={imageSrc}
        alt={imageAlt}
        width={400}
        height={300}
        className="w-full h-64 object-cover"
      />
      <div className="p-4 flex-1 flex flex-col">
        <Heading level={3} className="mb-2">{title}</Heading>
        <Text className="mb-4 flex-1">{description}</Text>
        {linkHref && linkLabel && (
          <LinkButton href={linkHref} ariaLabel={linkLabel} className="self-start">
            {linkLabel}
          </LinkButton>
        )}
      </div>
    </div>
  );
}; 