"use client";
import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/20/solid";
import { useCartContext } from "../CartContext/CartContext";

export function Navbar() {
  const { productos } = useCartContext();

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center text-white">
          <div>My Ecommerce</div>
          <div>
            <div className="flex flex-row gap-5">
              <Link href="/">Inicio</Link>
              <Link href="/nosotros">Nosotros</Link>
              <Link href="/detalleCompra">Detalle compra</Link>
              <div className="relative">
                <button className="text-white hover:text-gray-400">
                  <ShoppingCartIcon className="w-6 h-6" />
                  {productos.length > 0 && (
                    <span className="absolute top-2 right-2 bg-red-600 text-white rounded-full w-5 h-5">
                      {productos.length}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
