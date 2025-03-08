import React from 'react';
import { InputBase, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import { useAppContext } from '../context/globalState';

// Styled component for the search input
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '9999px', // rounded-full
  backgroundColor: alpha(theme.palette.grey[700], 1), // bg-gray-700
  width: '100%',
  transition: theme.transitions.create('width'),
  '&:focus-within': {
    width: '100%', // focus:w-full
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 4), // p-2 pl-10
    borderRadius: '9999px', // rounded-full
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));

export function SearchBar() {
  const { state, dispatch } = useAppContext();

  const onInputChange = (e) => {
    // listens for changes and dispatches an action to update searchTerm in the global state
    dispatch({ type: "SET_SEARCH_TERM", payload: e.target.value });
  };

  console.log(state.searchTerm);
  
  return (
    <Search>
      <StyledInputBase
        id="search"
        placeholder="Search products..."
        value={state.searchTerm}
        onChange={onInputChange}
        startAdornment={
          <InputAdornment position="start" sx={{ pl: 1 }}>
            <SearchIcon />
          </InputAdornment>
        }
      />
    </Search>
  );
}