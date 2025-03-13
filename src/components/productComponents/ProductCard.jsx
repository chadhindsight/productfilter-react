import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

export const Product = ({ product }) => {
    // TODO : Add the "Add to Cart" button
    
  return (
    <Card sx={{ backgroundColor: "#1c1e21", color: "#fff" }}>
      <CardMedia
        component="img"
       
        image={product.url}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          ${product.price.toFixed(2)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Product;