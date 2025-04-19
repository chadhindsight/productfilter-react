import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { useAppContext } from "../src/context/globalState";
import ProductList from "../src/components/productComponents/ProductList";
import { BrowserRouter } from "react-router-dom";
import { products } from "../src/context/products";

// Mock the module first
vi.mock("../src/context/globalState", () => ({
  useAppContext: vi.fn(),
  AppProvider: ({ children }) => <div>{children}</div>
}));

// Mock ProductCard
vi.mock("../src/components/productComponents/ProductCard", () => ({
  default: ({ product }) => <div>{product.name}</div>
}));

// Mock LoadingSpinner
vi.mock("../src/components/LoadingSpinner", () => ({
  default: () => <div>Loading...</div>
}));

// Get reference to the mocked function
const mockedUseAppContext = vi.mocked(useAppContext);

describe("ProductList Component", () => {
  const mockProducts = [...products];

  beforeEach(() => {
    // Reset mock before each test
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
        },
        isLoading: false // Loading is complete
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

  it("filters products based on search term", () => {
    mockedUseAppContext.mockReturnValue({
      state: {
        products: mockProducts,
        searchTerm: "playstation",
        selectedCategories: {
          cameras: false,
          smartphones: false,
          games: false,
          televisions: false
        },
        isLoading: false // Loading is complete
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

  it("shows loading spinner when isLoading is true", () => {
    mockedUseAppContext.mockReturnValue({
      state: {
        products: [],
        searchTerm: "",
        selectedCategories: {
          cameras: false,
          smartphones: false,
          games: false,
          televisions: false
        },
        isLoading: true // Loading in progress
      },
      dispatch: vi.fn()
    });

    render(
      <BrowserRouter>
        <ProductList />
      </BrowserRouter>
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();
    expect(screen.queryByText(mockProducts[0].name)).not.toBeInTheDocument();
  });

  it("hides loading spinner and shows products when isLoading is false", () => {
    mockedUseAppContext.mockReturnValue({
      state: {
        products: mockProducts,
        searchTerm: "",
        selectedCategories: {
          cameras: false,
          smartphones: false,
          games: false,
          televisions: false
        },
        isLoading: false // Loading complete
      },
      dispatch: vi.fn()
    });

    render(
      <BrowserRouter>
        <ProductList />
      </BrowserRouter>
    );

    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    expect(screen.getByText(mockProducts[0].name)).toBeInTheDocument();
  });
});