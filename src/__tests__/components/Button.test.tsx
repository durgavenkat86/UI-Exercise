import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Button } from "../../components";

describe("Button Component", () => {
  it("Primary button should render", () => {
    let { getByText } = render(
      <Button
        type="submit"
        label="Next"
        onClick={() => {}}
        bclassName="primary"
      />
    );
    expect(getByText("Next")).toHaveClass("primary");
  });
});
