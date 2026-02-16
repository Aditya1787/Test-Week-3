import React from "react";
import useProductSearch from "../../question_1/src/useProductSearch";
import ProductList from "../../question_1/src/ProductList";

function App() {
  const productData = [
    { id: 1, name: "Laptop", price: 55000 },
    { id: 2, name: "Smartphone", price: 25000 },
    { id: 3, name: "Headphones", price: 3000 },
    { id: 4, name: "Keyboard", price: 1500 },
    { id: 5, name: "Mouse", price: 800 },
  ];

  const { searchTerm, setSearchTerm, filteredProducts } =
    useProductSearch(productData);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Product Directory</h2>

      <input
        type="text"
        placeholder="Search product by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;
