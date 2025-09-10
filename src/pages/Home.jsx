import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="w-full h-screen bg-amber-600">
        <div className="flex items-center justify-center h-full">
          <h1 className="text-white text-4xl font-bold">Full Width Section</h1>
        </div>
      </section>

      {/* Container-based section */}
      <div className="container">
        <section className="w-full h-screen bg-amber-300 flex items-center justify-center">
          <h2 className="text-black text-3xl font-semibold">Container Section</h2>
        </section>
      </div>
    </div>
  );
}
