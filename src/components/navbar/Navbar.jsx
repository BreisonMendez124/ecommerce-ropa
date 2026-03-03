import React from "react";

export default function Navbar({ cartCount }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <span className="navbar-brand fw-bold">Fashion Store</span>

        <div className="ms-auto">
          <button className="btn btn-outline-light">
            🛒 Carrito ({cartCount})
          </button>
        </div>
      </div>
    </nav>
  );
}