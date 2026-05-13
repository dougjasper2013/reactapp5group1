import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Image
          src="/logo/PlatePal_logo.png"
          alt="PlatePal"
          width={130}
          height={46}
          priority
          style={{ objectFit: "contain" }}
        />
      </div>

      <ul className="nav-links">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/recipes">Recipes</Link>
        </li>
        <li>
          <Link href="/favourites">Favourites</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
