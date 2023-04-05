import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="flex flex-row">
        <li className="btn-ghost btn text-xl normal-case">
          <Link href="/">Home</Link>
        </li>
        <li className="btn-ghost btn text-xl normal-case">
          <Link href="/exercises/spinning-box">Boxes</Link>
        </li>
        <li className="btn-ghost btn text-xl normal-case">
          <Link href="/exercises/camera-control">Camera</Link>
        </li>
        <li className="btn-ghost btn text-xl normal-case">
          <Link href="/exercises/map-control">Map</Link>
        </li>
        <li className="btn-ghost btn text-xl normal-case">
          <Link href="/exercises/labels">Labels</Link>
        </li>
        <li className="btn-ghost btn text-xl normal-case">
          <Link href="/exercises/lineage">Lineage</Link>
        </li>
        <li className="btn-ghost btn text-xl normal-case">
          <Link href="/exercises/third-person">3rd Person</Link>
        </li>
        <li className="btn-ghost btn text-xl normal-case">
          <Link href="/exercises/lighting">Lighting</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
