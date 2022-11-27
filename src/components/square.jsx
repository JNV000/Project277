// a div that accepts an onClick funcion and true/false props

import PropTypes from "prop-types";

export default function Square({ room, id, handleClick, marker }) {
  // TODO: add ternary, if room is true make div white and add onClick function, else make dive black with no onClick function

  return (
    <div
      id={id}
      className={room ? "bg-white" : "bg-black"}
      onClick={handleClick}
    >
      {marker}
    </div>
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
