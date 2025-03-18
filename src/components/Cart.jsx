import { Button, Divider, List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import { useAppContext } from "../context/globalState";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';

export const Cart = () =>{
    const {dispatch, state} = useAppContext();
    const { cartItems } = state; 

    const handleAddToCart = (product) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: product });
      };

    const handleRemoveFromCart = (product) => {
      
        dispatch({ type: "REMOVE_FROM_CART", payload: product});
      };

    return(
        <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Your Cart
            </Typography>
            <Divider />
             <List>
                {
                    cartItems.map((item, index) =>(
                        <ListItem key={index} divider>
                        <ListItemText
                          primary={item.product.name}
                          secondary={`Quantity: ${item.quantity}`}
                        />
                        <Typography variant="body2" id="price-in-cart">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </Typography>
                        <Button variant="outlined" startIcon={<AddShoppingCartIcon />}>
                            Increase Quantity
                        </Button>
                        <Button onClick={()=> handleRemoveFromCart(item.product)} variant="outlined" startIcon={<DeleteIcon />}>
                            Delete
                        </Button> 
                      </ListItem>
                    ))
                }
            </List>   
        </Paper>
    )
}