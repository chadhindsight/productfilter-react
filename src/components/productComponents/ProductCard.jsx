import React from "react";
import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { useAppContext } from "../../context/globalState";



export const Product = ({ product }) => {
    // TODO : Add the "Add to Cart" button(state & dispatch, <button> with onClick)
    const { dispatch } = useAppContext();

    const onAddToCart = ()=> {
      dispatch({type: "ADD_TO_CART", payload: product})
    }
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
        <Button onClick={onAddToCart}>Add To Cart</Button>
      </CardContent>
    </Card>
  );
};

export default Product;