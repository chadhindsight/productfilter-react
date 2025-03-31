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
})

