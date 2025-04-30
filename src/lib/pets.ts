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
    nameKey: "fido.name",
    descriptionKey: "fido.description",
    link: "/pets/1",
  },
  {
    id: 2,
    image: "/images/pet2.jpg",
    nameKey: "luna.name",
    descriptionKey: "luna.description",
    link: "/pets/2",
  },
  {
    id: 3,
    image: "/images/pet3.jpg",
    nameKey: "max.name",
    descriptionKey: "max.description",
    link: "/pets/3",
  },
]; 