// a div that accepts an onClick funcion and true/false props

import PropTypes from "prop-types";

export default function Square({ room, id, handleClick, marker }) {
  // TODO: add ternary, if room is true make div white and add onClick function, else make dive black with no onClick function

  return (
    <button
      id={id}
      className={
        room
          ? "bg-white h-20 w-20 border-2 col-span-1 row-span1 text-4xl"
          : "bg-black h-20 w-20 col-span-1 row-span1"
      }
      onClick={handleClick}
    >
      {marker}
    </button>
  );
}

Square.propTypes = {
  room: PropTypes.bool,
  id: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  marker: PropTypes.string,
};

Square.defaultProps = {
  handleClick: () => {},
  room: true,
  marker: "",
};
