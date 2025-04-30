export interface Pet {
  id: number;
  image: string;
  nameKey: string; // i18n key for name
  descriptionKey: string; // i18n key for description
  link: string;
}

export const featuredPets: ReadonlyArray<Pet> = [
  {
    id: 1,
    image: "/images/pet1.jpg",
    nameKey: "Pets.fido.name",
    descriptionKey: "Pets.fido.description",
    link: "/pets/1",
  },
  {
    id: 2,
    image: "/images/pet2.jpg",
    nameKey: "Pets.luna.name",
    descriptionKey: "Pets.luna.description",
    link: "/pets/2",
  },
  {
    id: 3,
    image: "/images/pet3.jpg",
    nameKey: "Pets.max.name",
    descriptionKey: "Pets.max.description",
    link: "/pets/3",
  },
]; 