import { Heading } from "../atoms/Heading";
import { LinkButton } from "../atoms/LinkButton";
import type { ReactElement } from "react";

export const Header = (): ReactElement => {
  return (
    <header className="w-full bg-white shadow-sm py-4 px-6 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <img src="/static/images/drakotoon.png" alt="Shelter 4Patas logo" className="w-10 h-10 rounded-full" />
        <Heading level={2} className="text-blue-900 m-0">Shelter 4Patas</Heading>
      </div>
      <nav aria-label="Main navigation" className="flex gap-2">
        <LinkButton href="/" ariaLabel="Home">Home</LinkButton>
        <LinkButton href="/adopt" ariaLabel="Adopt">Adopt</LinkButton>
        <LinkButton href="/donate" ariaLabel="Donate">Donate</LinkButton>
      </nav>
    </header>
  );
}; 