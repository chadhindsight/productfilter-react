import { describe, expect } from "vitest";
import { Footer } from "../src/components/Footer";
import { render, screen } from "@testing-library/react";


describe("Footer Component and related content", ()=>{
     const currentYear = new Date().getFullYear();
    
     it("renders the Footer component", () => {
        render(
            <Footer />
        )
        // Check if year is correct. NB: Typography component is a paragraph nehind the scenes
        expect(screen.getByText(`© ${currentYear} chadhindsight. All rights reserved.`)).toBeInTheDocument();
    })

    it("renders the links to creator's social media platforms", ()=>{
        render(
            <Footer />
        )
        
        // Test assertions for social links
        const LinkedIn = screen.getByRole("link", { name: /LinkedIn/i });
        const Instagram = screen.getByRole("link", { name: /Instagram/i });
        const Github = screen.getByRole("link", { name: /Github/i });

        expect(LinkedIn).toBeInTheDocument();
        expect(Instagram).toBeInTheDocument();
        expect(Github).toBeInTheDocument();
    })
})