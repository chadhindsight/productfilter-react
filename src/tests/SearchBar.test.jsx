import { describe, expect, it } from "vitest";
import { SearchBar } from "../src/components/SearchBar";
import { render, screen } from "@testing-library/react";
import { AppProvider } from "../src/context/globalState";

describe("Search Bar Component", ()=>{
    it("renders the search bar", ()=>{
        render(
        <AppProvider>   
            <SearchBar />
        </AppProvider>
    )
    expect(screen.getByTestId('searchTing')).toBeInTheDocument();
    })

    it('contains a search input field', () => {
        render(
          <AppProvider>
            <SearchBar />
          </AppProvider>
        );
        
        // You can also find the input by its role and placeholder text
        const inputElement = screen.getByPlaceholderText('Search products...');
        expect(inputElement).toBeInTheDocument();
      });

      it('shows the search icon', () => {
        render(
          <AppProvider>
            <SearchBar />
          </AppProvider>
        );
        
        const searchIcon = screen.getByLabelText('Search products');
        expect(searchIcon).toBeInTheDocument();
      });  
})

