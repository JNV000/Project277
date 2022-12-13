import PropTypes from "prop-types";
import Square from "./square";

// TODO: make dive to hold other divs, use props to create grid style based on number of rows and columns.

export default function Board({ map, rows, cols }) {
  // TODO: use Reducer to get click function to pass to square
  return (
    <div
      className={`container grid w-auto grid-cols-${String(
        cols
      )} grid-rows-${String(rows)}`}
    >
      {map.map((row, rIndex) =>
        row.map((crntRoom, cIndex) => (
          <Square
            room={crntRoom}
            key={`${rIndex}-${cIndex}`}
            id={`${rIndex}-${cIndex}`}
            marker="🚪"
          />
        ))
      )}
    </div>
  );
}

// TODO: make integration test to check number of squares

Board.propTypes = {
  map: PropTypes.array.isRequired,
  rows: PropTypes.number.isRequired,
  cols: PropTypes.number.isRequired,
};

/*
<Square
            room={crntRoom}
            key={`${rIndex}-${cIndex}`}
            id={`${rIndex}-${cIndex}`}
            marker="🚪"
          />
*/

/*
className={`container grid w-auto grid-cols-${String(
        cols
      )} grid-rows-${String(rows)}`}
*/
