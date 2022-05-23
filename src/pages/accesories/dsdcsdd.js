import React, { useEffect, useState } from "react";

import data from "../../../data.json";
import Card from "../card/Card.jsx";
import Filter from "../filter/Filter.jsx";
import "./Home.css";

function Home() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  useEffect(() => {
    setProducts(data);
    setFilteredProducts(data);
  }, []);

  useEffect(() => {
    const filtered = selectedTag
      ? products.filter((item) => item.tag === selectedTag)
      : products;

    setFilteredProducts(
      sortBy
        ? [...filtered].sort((a, b) =>
            sortBy === "lowest" ? a.price - b.price : b.price - a.price
          )
        : [...filtered].sort((a, b) => (a.id > b.id ? 1 : -1))
    );
  }, [selectedTag, sortBy, products]);

  return (
    <div className="container-fluid">
      <h2>Products: {filteredProducts.length}</h2>
      <Filter
        handleSort={setSortBy}
        handleTagChange={setSelectedTag}
        selectedTag={selectedTag}
        sortBy={sortBy}
      />
      <hr />
      <div className="row custom-card">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-md-3 mb-2">
            <Card products={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;