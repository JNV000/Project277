import Input from "./Input"; // see import.js in forms
import PropTypes from "prop-types";

// initial version taken from in-class work

const fields = [
  {
    id: "firstName",
    label: "First Name",
    type: "text",
  },
  {
    id: "lastName",
    label: "Last Name",
    type: "text",
  },
  {
    id: "email",
    label: "Email",
    type: "email",
  },
  {
    id: "password",
    label: "Password",
    type: "password",
  },
];

export default function Registration({ onClick }) {
  return (
    <form
      onSubmit={onClick}
      className="w-max mx-auto h-fit flex flex-col gap-y-4 border p-8 rounded-md my-4 mt-4"
    >
      {fields.map((field) => (
        <Input key={field.id} {...field} />
      ))}

      <button
        type="submit"
        className="px-4 py-2 rounded bg-blue-500 text-white"
      >
        Create Account
      </button>
    </form>
  );
}

Registration.propTypes = {
  onClick: PropTypes.func.isRequired,
};
