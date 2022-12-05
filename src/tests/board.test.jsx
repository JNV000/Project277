import { render, screen } from "@testing-library/react";
import Board from "../components/board";
import makeMap from "../utils/makeMap";

it("renders a map", () => {
  // set up props and map
  const x = 5;
  const y = 6;
  const testMap = makeMap(x, y);

  // render board
  render(<Board map={testMap} rows={x} cols={y} />);

  // get squares from screen
  const squares = screen.getAllByRole("button");
  expect(squares).toHaveLength(x * y); // we expect 31 divs on a board
  // 5*6 + 1 div for the board
});
