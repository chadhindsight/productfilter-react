import { AppBar, Toolbar, Badge, Box, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { SearchBar } from './SearchBar';
import { useAppContext } from '../context/globalState';

export function NavBar() {
    const { state } = useAppContext();


  

  return (
    <AppBar position="static" color="default" sx={{ bgcolor: 'grey.900' }}>
      <Toolbar>
        {/* Search Bar component */}
        <SearchBar />
        
        {/* Flexible spacer that pushes the cart icon to the right */}
        <Box sx={{ flexGrow: 1 }} />
        
        <IconButton color="inherit">
            {/* will display the number of items in the cart */}
          <Badge badgeContent={state.cartItems.length} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}