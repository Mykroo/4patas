import { render, screen } from "@testing-library/react";
import { FeaturedPets } from "../FeaturedPets";
import * as petsModule from "../../../lib/pets";

describe("FeaturedPets", () => {
  it("renders pet cards when pets are present", () => {
    jest.spyOn(petsModule, "featuredPets", "get").mockReturnValue([
      {
        id: 1,
        image: "/images/pet1.jpg",
        nameKey: "pets.fido.name",
        descriptionKey: "pets.fido.description",
        link: "/pets/1",
      },
    ]);
    render(<FeaturedPets />);
    expect(screen.getByTestId("pet-list")).toBeInTheDocument();
    expect(screen.getByText("pets.fido.name")).toBeInTheDocument();
  });

  it("renders fallback when no pets", () => {
    jest.spyOn(petsModule, "featuredPets", "get").mockReturnValue([]);
    render(<FeaturedPets />);
    expect(screen.getByTestId("no-pets")).toBeInTheDocument();
    expect(screen.getByText(/no pets found/i)).toBeInTheDocument();
  });
}); 