/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { useState } from "react";

export function ProductCard({ name, description, price, imageUrl }) {
  const [productoSeleccionado, setProductoSeleccionado] = useState(false);

  return (
    <div className="flex flex-col gap-3 border border-gray-950 p-3 rounded-lg">
      {productoSeleccionado && (
        <div className="relative">
          <div className="absolute bg-orange-400 rounded-full w-fit p-3">
            <Image
              width={30}
              height={30}
              src="/assets/icon/check.svg"
              alt="checkIcon"
            />
          </div>
        </div>
      )}
      <img src={imageUrl} className="w-40 h-40" alt="pokemonImage" />
      <h1 className="text-2xl">{name}</h1>
      <div>
        <span>Descripcion</span>
        <p>{description}</p>
      </div>
      <div>
        <span>Precio</span>
        <p>${price} USD</p>
      </div>
      <button
        onClick={() => {
          setProductoSeleccionado(!productoSeleccionado);
        }}
      >
        Agregar al carro de compras
      </button>
    </div>
  );
}
