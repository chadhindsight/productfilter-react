import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { useAppContext } from "../../context/globalState";



export const ProductCard = ({ product }) => {
    const { dispatch } = useAppContext();
    const onAddToCart = ()=> {
      dispatch({type: "ADD_TO_CART", payload: product})
    }
  return (
    <Card sx={{ backgroundColor: "#1c1e21", color: "#fff" }}>
      <CardMedia
        component="img"
       
        image={`https://chadhindsight.pythonanywhere.com/${product.url}`}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          ${product.price.toFixed(2)}
        </Typography>
        <Button onClick={onAddToCart}
        variant="contained"
        sx={{ mt: 2, backgroundColor: "#D3DAE0", "&:hover": { backgroundColor: "#45a049" } }}
        >Add To Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;