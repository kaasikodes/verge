import { describe, expect, it } from "vitest";

import { render, screen } from "@testing-library/react";
import AppFooter from "../AppFooter";
describe("Layout", () => {
  describe("AppFooter", () => {
    it("Should render a span End-to-end encryption text", () => {
      render(<AppFooter />);
      const spanElement = screen.getByText((content) =>
        /End-to-end encryption/i.test(content)
      );
      expect(spanElement).toBeDefined();
    });
    it("Should render an image with alt text and non empty src", () => {
      render(<AppFooter />);
      const imgElement = screen.getByRole("img");
      expect(imgElement).toHaveAttribute("alt", "encryption");
      expect(imgElement).toHaveAttribute("src"); //should have src
      expect(imgElement).not.toHaveAttribute("src", ""); //src should not be empty
    });
  });
});
