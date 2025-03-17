import { Paper } from "@mui/material";
import { useAppContext } from "../../context/globalState";

export const Cart = () =>{
    const {dispatch, state} = useAppContext();

    return(
        <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Your Cart
            </Typography>
            {
                
            }
        </Paper>
    )
}