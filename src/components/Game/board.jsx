import PropTypes from "prop-types";
import { isPartiallyEmittedExpression } from "typescript";
import Square from "./square";

// TODO: make dive to hold other divs, use props to create grid style based on number of rows and columns.

export default function Board({
  map,
  playMark,
  monsterMark,
  doorMark,
  rows,
  cols,
  clickFunction,
}) {
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

  function getMarker(crntRow, crntCol) {
    // compare to player, monster, and door location
    if (crntRow === playMark[0] && crntCol === playMark[1]) {
      return "X";
    }
    if (crntRow === monsterMark[0] && crntCol === monsterMark[1]) {
      return "💀";
    }
    if (crntRow === doorMark[0] && crntCol === doorMark[1]) {
      return "🚪";
    }
    return "";
  }
  // <div className={makeBoardClass()}>
  // made grid class static for easier testing.
  return (
    <div className="container grid w-auto grid-cols-4 grid-rows-4">
      {map.map((row, rIndex) =>
        row.map((crntRoom, cIndex) => (
          <Square
            room={crntRoom}
            key={`${rIndex}-${cIndex}`}
            id={`${rIndex}-${cIndex}`}
            marker={getMarker(rIndex, cIndex)}
            handleClick={clickFunction}
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
  playMark: PropTypes.array.isRequired,
  monsterMark: PropTypes.array.isRequired,
  doorMark: PropTypes.array.isRequired,
  clickFunction: PropTypes.func.isRequired,
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
