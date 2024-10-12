import Link from "next/link";

export function Navbar() {
  return (
    <nav>
      <div>
        <div>Logo</div>
        <div>
          <div className="space-x-4">
            <Link href="/">Inicio</Link>
            <Link href="/nosotros">Nosotros</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
