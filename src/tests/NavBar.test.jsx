import { render, screen } from "@testing-library/react";
import {NavBar} from ".";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "../context/globalState";

describe("NavBar Component", () => {
  it("renders the NavBar component", () => {
    render(
      <BrowserRouter>
        <AppProvider>
          <NavBar />
        </AppProvider>
      </BrowserRouter>
    );

    
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("renders the back button in the Navbar", () => {
    render(
      <BrowserRouter>
        <AppProvider>
          <NavBar />
        </AppProvider>
      </BrowserRouter>
    );
  
    // Check if the back button is rendered
    const backButton = screen.getByRole("link", { name: /back/i });
    expect(backButton).toBeInTheDocument();
    expect(backButton).toHaveAttribute("aria-label", "back");
  });;


  it("renders the SearchBar component", () => {
    render(
      <BrowserRouter>
        <AppProvider>
          <NavBar />
        </AppProvider>
      </BrowserRouter>
    );
  
    // Check if the SearchBar input is rendered
    const searchInput = screen.getByRole("textbox", { name: /search products/i });
    expect(searchInput).toBeInTheDocument();
  });

 
});