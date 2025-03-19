import React, { useMemo } from "react";
import { Grid2, Card, CardMedia, CardContent, Typography } from "@mui/material";
import { useAppContext } from "../../context/globalState";
import Product from "./ProductCard";

const ProductList = () => {
  const { state } = useAppContext();
  const { products, searchTerm, selectedCategories } = state;
  const filteredProducts = useMemo(() => {
    const anyCategorySelected = Object.values(selectedCategories).some(Boolean);

    return products.filter((product) => {
      const matchesCategory = !anyCategorySelected || selectedCategories[product.category];
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [products, searchTerm, selectedCategories]);

  return (
    <Grid2 container spacing={3} sx={{ padding: 3 }}>
      {filteredProducts.map((product) => (
        <Grid2 size={{ xs: 12, sm: 6, md:4, lg:3 }} key={product.name}>
          <Product product={product} /> 
        </Grid2>
      ))}
    </Grid2>
  );
};

export default ProductList;
