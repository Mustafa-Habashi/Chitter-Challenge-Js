import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from '@jest/globals'
import SignUpPage from "../components/SignUpPage";


describe("Sign up page tests", () => {

    beforeEach(() => {


        render(
            <MemoryRouter>
                <SignUpPage />
            </MemoryRouter>
        );
    });
    describe("Initial Render and Form Input Tests", () => {
        it("should render name input box", () => {
            expect(screen.getByPlaceholderText("John Smith")).toBeInTheDocument();
        });
        it("should render the username input box", () => {
            expect(screen.getByPlaceholderText("examlpe123")).toBeInTheDocument();
        });
        it("should render the email input box", () => {
            expect(screen.getByPlaceholderText("name@example.com")).toBeInTheDocument();
        });
        it("should render the password input box", () => {
            expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
        });

    });
    describe("Test SignUp Forms Input", () => {

        it("should render the value of name", () => {
            const mockData = {
                name: `Johnsmith`,
                userName: `Jsmith`,
                email: `test@gmail.com`,
                password: `password`,
            };
            const nameInput = screen.getByPlaceholderText("John Smith");
            userEvent.type(nameInput, mockData.name);
            expect(nameInput).toHaveValue(mockData.name);
        });
        it("should render the value of the username", () => {
            const mockData = {
                name: `Johnsmith`,
                userName: `Jsmith`,
                email: `test@gmail.com`,
                password: `password`,
            };
            const usernameInput = screen.getByPlaceholderText("examlpe123");
            userEvent.type(usernameInput, mockData.userName);
            expect(usernameInput).toHaveValue(mockData.userName);
        });
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