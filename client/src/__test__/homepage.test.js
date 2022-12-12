import { render, screen } from "@testing-library/react";
import HomePage from '../components/HomePage'
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from '@jest/globals'

describe("Add Peeps Form tests", () => {
    const mockPeepHandler = jest.fn();
    const mockData = [{
        author: "DF123",
        text: "Hello world",

    },
    {
        author: "DfTest",
        text: "Hello world",

    },
    ];
    beforeEach(() => {

        render(
            <MemoryRouter>
                <HomePage peepHandler={mockPeepHandler} peepData={mockData} />
            </MemoryRouter>
        );
    });
    describe("Initial Render and Form Input Tests", () => {
        it("should render the header of the page Title", () => {
            expect(screen.getByText(/Trending today/i)).toBeInTheDocument();
        });
        it("should send message buttton", () => {
            expect(screen.getByTestId('required-button')).toBeInTheDocument();
        });

    });


});