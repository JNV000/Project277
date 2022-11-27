import PropTypes from "prop-types";
import Square from "./square";

// TODO: make dive to hold other divs, use props to create grid style based on number of rows and columns.

export default function Board({ map, rows, cols }) {
  // TODO: use Reducer to get click function to pass to square
  return (
    <div>
      {map.map((row, rIndex) =>
        row.map((crntRoom, cIndex) => (
          <Square
            room={crntRoom}
            key={`${rIndex}-${cIndex}`}
            id={`${rIndex}-${cIndex}`}
          />
        ))
      )}
    </div>
  );
}

// TODO: make integration test to check numbeer of squares

Board.propTypes = {
  map: PropTypes.array.isRequired,
  rows: PropTypes.number.isRequired,
  cols: PropTypes.number.isRequired,
};
