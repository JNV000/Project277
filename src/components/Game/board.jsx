import PropTypes from "prop-types";
import Square from "./square";

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
  // I probably don't need this as a separate function, but it makes the code more readable
  function makeBoardClass() {
    const boardClass = `container grid w-auto grid-cols-${cols} grid-rows-${rows}`;
    return boardClass;
  }
  */
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
    <div className={`container grid grid-cols-${cols} grid-rows-${rows}`}>
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
