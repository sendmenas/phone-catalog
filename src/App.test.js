import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders brands page", () => {
  render(<App />);
  const headerElement = screen.getByText(/Brands/i);
  expect(headerElement).toBeInTheDocument();
});
