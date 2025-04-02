import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { useAppContext } from "../src/context/globalState";
import ProductList from "../src/components/productComponents/ProductList";
import { BrowserRouter } from "react-router-dom";
import { products } from "../src/context/products";

// 1. Mock the module first
vi.mock("../src/context/globalState", () => ({
  useAppContext: vi.fn(),
  AppProvider: ({ children }) => <div>{children}</div>
}));

// 2. Get reference to the mocked function
const mockedUseAppContext = vi.mocked(useAppContext);

// 3. Mock ProductCard
vi.mock("../src/components/productComponents/ProductCard", () => ({
  default: ({ product }) => <div>{product.name}</div>
}));

describe("ProductList Component", () => {
  const mockProducts = [...products];

  beforeEach(() => {
    // 4. Reset mock before each test
    mockedUseAppContext.mockClear();
  });

  it("renders all products when no filters are applied", () => {
    // Set mock implementation
    mockedUseAppContext.mockReturnValue({
      state: {
        products: mockProducts,
        searchTerm: "",
        selectedCategories: {
          cameras: false,
          smartphones: false,
          games: false,
          televisions: false
        }
      },
      dispatch: vi.fn()
    });

    render(
      <BrowserRouter>
        <ProductList />
      </BrowserRouter>
    );

    mockProducts.forEach(product => {
      expect(screen.getByText(product.name)).toBeInTheDocument();
    });
  });

  it("filters products by search term", () => {
    mockedUseAppContext.mockReturnValue({
      state: {
        products: mockProducts,
        searchTerm: "playstation",
        selectedCategories: {
          cameras: false,
          smartphones: false,
          games: false,
          televisions: false
        }
      },
      dispatch: vi.fn()
    });

    render(
      <BrowserRouter>
        <ProductList />
      </BrowserRouter>
    );

    const matchingProducts = mockProducts.filter(p => 
      p.name.toLowerCase().includes("playstation")
    );
    
    matchingProducts.forEach(product => {
      expect(screen.getByText(product.name)).toBeInTheDocument();
    });
  });

  // Additional tests...
});