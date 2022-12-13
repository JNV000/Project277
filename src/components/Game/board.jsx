import PropTypes from "prop-types";
import Square from "./square";

// TODO: make dive to hold other divs, use props to create grid style based on number of rows and columns.

export default function Board({ map, rows, cols }) {
  /*
  I cannot explain why but putting the string literal in the
  but puttin the string literal directly into className causes
  the grid to not work.
  */
  function makeBoardClass() {
    const boardClass = `container grid w-auto grid-cols-${String(
      cols
    )} grid-rows-${String(rows)}`;
    return boardClass;
  }

  return (
    <div className={makeBoardClass()}>
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
