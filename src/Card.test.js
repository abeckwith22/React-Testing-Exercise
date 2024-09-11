import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";


// smoke test
it("renders", () => {
    render(<Card/>);
});

// snapshot test
it('matches snapshot', () => {
    const {
        asFragment
    } = render(<Card/>);
    expect(asFragment()).toMatchSnapshot();
});

