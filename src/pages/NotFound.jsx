import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex items-center justify-center h-screen">
      <h2>404 — Not Found</h2>
      <p><Link to="/">Go back home</Link></p>
    </section>
  );
}
