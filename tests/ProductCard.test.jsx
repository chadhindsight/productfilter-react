// Mock useAppContext globally
vi.mock("../src/context/globalState", () => ({
    useAppContext: vi.fn().mockReturnValue({
      dispatch: vi.fn(), 
    }),
    AppProvider: ({ children }) => <div>{children}</div>
  }));
  

import { describe, expect, it } from "vitest";
import ProductCard from "../src/components/productComponents/ProductCard";
import { useAppContext } from "../src/context/globalState";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "../src/context/globalState";


const testProduct = {
    name: 'Sony Playstation 5',
    url: 'images/playstation_5.png',
    category: 'games',
    price: 499.99,
    id: 21
  }


describe("Product Card Component", ()=>{
    it('renders the product Card component', ()=>{
        render(
            <BrowserRouter>
            <AppProvider>
                <ProductCard product={testProduct}/>
            </AppProvider>
        </BrowserRouter>
        )

        expect(screen.getByText("Sony Playstation 5")).toBeInTheDocument();
        expect(screen.getByText("$499.99")).toBeInTheDocument();
        expect(screen.getByRole("img", { name: "Sony Playstation 5" })).toBeInTheDocument();
    })

    it("calls dispatch when 'Add To Cart' is clicked", () => {
        const mockDispatch = vi.fn();
        useAppContext.mockReturnValue({ dispatch: mockDispatch }); // ✅ Mock BEFORE rendering
    
        console.log("Mocked useAppContext:", useAppContext()); 
    
        render(
          <BrowserRouter>
            <ProductCard product={testProduct} />
          </BrowserRouter>
        );
    
        fireEvent.click(screen.getByText("Add To Cart"));
        expect(mockDispatch).toHaveBeenCalledWith({
          type: "ADD_TO_CART",
          payload: testProduct,
        });
    });
    
     
})