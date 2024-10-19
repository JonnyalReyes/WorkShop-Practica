import Image from "next/image";
import { ProductCard } from "../components/ProductCard/ProductCard";

export default function Home() {
  const pokemons = [
    {
      name: "Eevee",
      description: "Eevee de color marron",
      price: 200,
      imageUrl: "/assets/images/evee.png",
    },
    {
      name: "Pikachu",
      description: "Pikachu de color amarillo",
      price: 300,
      imageUrl: "/assets/images/pikachu.png",
    },
    {
      name: "Charmander",
      description: "Charmander de color naranja",
      price: 400,
      imageUrl: "/assets/images/charmander.png",
    },
  ];
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-row gap-8 row-start-2 items-center sm:items-start">
        {pokemons.map((pokemon, index) => (
          <ProductCard
            key={index}
            name={pokemon.name}
            description={pokemon.description}
            price={pokemon.price}
            imageUrl={pokemon.imageUrl}
          />
        ))}
      </main>
    </div>
  );
}
