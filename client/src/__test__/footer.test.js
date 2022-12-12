import Footer from "../components/Footer";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("Header component test", () => {
    it("Header matched the snapshot", () => {
        const headerComponent = render(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>
        );
        expect(headerComponent).toMatchSnapshot();
    });
});