"use client";
import { ProductCard } from "../components/ProductCard/ProductCard";
import { useEffect, useState } from "react";

export default function Home() {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((productos) => setProductos(productos));
  }, []);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-row gap-8 row-start-2 items-center sm:items-start">
        {productos.map((producto, index) => (
          <ProductCard
            key={index}
            name={producto.title}
            description={producto.description}
            price={producto.price}
            imageUrl={producto.image}
          />
        ))}
      </main>
    </div>
  );
}
