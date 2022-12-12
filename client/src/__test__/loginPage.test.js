import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from '@jest/globals'

import LoginPage from "../components/LoginPage";


describe("Login page tests", () => {

    const mockFunction = jest.fn()

    beforeEach(() => {


        render(
            <MemoryRouter>
                <LoginPage setUser={mockFunction} />
            </MemoryRouter>
        );
    });
    describe("Initial Render and Form Input Tests", () => {

        it("should render the email input box", () => {
            expect(screen.getByPlaceholderText("name@example.com")).toBeInTheDocument();
        });
        it("should render the password input box", () => {
            expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
        });

    });
    describe("Test Login Page Forms Input", () => {

        it("should render the value of the email", () => {
            const mockData = {
                name: `Johnsmith`,
                userName: `Jsmith`,
                email: `test@gmail.com`,
                password: `password`,
            };
            const emailInput = screen.getByPlaceholderText("name@example.com");
            userEvent.type(emailInput, mockData.email);
            expect(emailInput).toHaveValue(mockData.email);
        });
        it("should render the password value when typed", () => {
            const mockData = {
                name: `Johnsmith`,
                userName: `Jsmith`,
                email: `test@gmail.com`,
                password: `password`,
            };
            const passwordInput = screen.getByPlaceholderText("Password");
            userEvent.type(passwordInput, mockData.password);
            expect(passwordInput).toHaveValue(mockData.password);
        });
    });

});