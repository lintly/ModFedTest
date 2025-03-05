import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import "@testing-library/jest-dom";

import Vendors from "../components/Test";

// Mock the remote component
// vi.mock("parts/VendorAddresses", () => ({
//   __esModule: true,
//   default: () => <div>Mock Vendor Addresses</div>,
// }));


beforeEach(() => {
  vi.clearAllMocks();
  vi.resetModules(); // Clears module cache
});

describe("App", () => {
  it("renders the App component", async () => {
    render(<Vendors />);
    expect(screen.getByText(/Vendors/)).toBeInTheDocument();

    // screen.debug(); // prints out the jsx in the App component unto the command line
  });
});
