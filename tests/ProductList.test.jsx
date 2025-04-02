vi.mock("../../context/globalState", () => ({
    useAppContext: vi.fn(),
    AppProvider: ({ children }) => <div>{children}</div>
  }));

import { describe, expect, it } from "vitest";
import { products } from "../src/context/products";

// Before each test render
const mockProducts = [
    ...products
  ];
  
  useAppContext.mockReturnValue({
    state: {
      products: mockProducts,
      searchTerm: "",
      selectedCategories: {
        cameras: false,
        smartphones: false,
        games: false,
        televisions: false
      }
    }
  });