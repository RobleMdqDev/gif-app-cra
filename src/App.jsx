import React, { useState } from "react";

import { AddCategory, GifGrid } from "./components";

// cambio 1
export const App = () => {
  const [categories, setCategories] = useState([]);

  const handleAddCategory = (value) => {
    setCategories([value, ...categories]);
  };

  return (
    <>
      {/* Titulo */}
      <h1>GifApp</h1>

      {/* Input */}
      <AddCategory addCategory={handleAddCategory} />
      {/* Listado de Gif */}

      {
      categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))
      }
    </>
  );
};
