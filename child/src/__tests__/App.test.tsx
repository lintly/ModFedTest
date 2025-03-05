import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import "@testing-library/jest-dom";

import App from "../App";

beforeEach(() => {
  vi.clearAllMocks();
  vi.resetModules(); // Clears module cache
});

describe("App", () => {
  it("renders the App component", () => {
    render(<App />);
    expect(screen.getByText(/greeting/)).toBeInTheDocument();
    // expect(screen.getByText(/count is 0/)).toBeInTheDocument();
    // expect(screen.getByText("Show/Hide Slideout")).toBeInTheDocument();

    // screen.debug(); // prints out the jsx in the App component unto the command line
  });

  // it("increments count on button click", () => {
  //   render(<App />);
  //   const button = screen.getByText("count is 0");
  //   fireEvent.click(button);
  //   expect(screen.getByText("count is 1")).toBeInTheDocument();
  //   fireEvent.click(button);
  //   expect(screen.getByText("count is 2")).toBeInTheDocument();
  // });

  // it("should show slideout when button is clicked", () => {
  //   render(<App />);
  //   const button = screen.getByText("Show/Hide Slideout");
  //   fireEvent.click(button);
  //   expect(screen.getByText("Jeff")).toBeInTheDocument();
  // });

  // it("change language", async () => {
  //   render(<App />);
  //   const lbl1 = screen.getByAltText(/English/);
  //   const lbl2 = screen.getByAltText(/Pseudolocalize/);

  //   expect(lbl1).toBeInTheDocument();
  //   expect(lbl2).toBeInTheDocument();

  //   const btn1 = screen.getByRole("button", { name: /English/ });
  //   const btn2 = screen.getByRole("button", { name: /Pseudolocalize/ });

  //   expect(btn1).toBeDisabled();
  //   expect(btn2).toBeEnabled();
  // });
});
