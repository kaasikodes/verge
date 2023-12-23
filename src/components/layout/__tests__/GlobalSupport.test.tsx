import { describe, expect, it } from "vitest";

import { render, screen } from "@testing-library/react";
import GlobalSupport from "../GlobalSupport";
describe("Layout", () => {
  describe("GlobalSupport", () => {
    it("Should render a btn with Veerge Assistant text", () => {
      render(<GlobalSupport />);
      const btnElement = screen.getByRole("button", {
        name: (content) => /Veerge Assistant/i.test(content),
      });
      expect(btnElement).toBeDefined();
    });
    it("Button should render 2 images with non empty src attributes, and appropriate alt values", () => {
      render(<GlobalSupport />);
      const imgElements = screen.queryAllByRole("img");
      expect(imgElements.length).toBe(2);
      //   alt
      expect(imgElements[0]).toHaveAttribute("alt", "support");
      expect(imgElements[1]).toHaveAttribute("alt", "close");
      //   src
      expect(imgElements[0]).toHaveAttribute("src"); //should have src
      expect(imgElements[1]).not.toHaveAttribute("src", ""); //src should not be empty
    });
  });
});
