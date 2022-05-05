import { render, screen } from "@testing-library/react";
import CircleChart from "../app/components/CircleChart";

// test("true é truthy", () => {
//   const value = true;
//   expect(value).toBeTruthy();
// });

it("renderes caption", () => {
  render(<CircleChart size={180} progress={80} caption={"javascript"} />);

  const caption = screen.getByText("javascript");

  expect(caption).toBeInTheDocument();
});
