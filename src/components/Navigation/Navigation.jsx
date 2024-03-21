import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/catalog">Catalog</Link>
        <Link to="/favorites">Favorites</Link>
      </nav>
    </header>
  );
};
