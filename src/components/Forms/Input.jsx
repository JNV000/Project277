import PropTypes from "prop-types";
import capitalize from "lodash.capitalize";

export default function Input({
  id,
  isReq,
  label,
  minLen,
  maxLen,
  placeholder,
  type,
}) {
  return (
    <>
      <label htmlFor={id} className="sr-only">
        {label || capitalize(id)}
      </label>
      <input
        id={id}
        minLength={minLen || 4}
        maxLength={maxLen || 25}
        name={id}
        placeholder={label || capitalize(id)}
        required={isReq}
        type={type || "text"}
        className="px-4 py-2 rounded border border-gray-300 focus:border-green-500 text-gray-700 focus:ring focus:ring-opacity-50"
      />
    </>
  );
}

Input.defaultProps = {
  isReq: true,
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  isReq: PropTypes.bool,
  label: PropTypes.string,
  minLen: PropTypes.number,
  maxLen: PropTypes.number,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};
