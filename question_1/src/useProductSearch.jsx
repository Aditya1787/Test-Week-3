import { useState, useEffect } from "react";

const useProductSearch = (products) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredProducts(results);
  }, [searchTerm, products]);

  return { searchTerm, setSearchTerm, filteredProducts };
};

export default useProductSearch;
