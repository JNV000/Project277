import Input from "./Input"; // see import.js in forms
import { Form, Link } from "react-router-dom";
import PropTypes from "prop-types";

const fields = [
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

export default function LoginForm({ handleSubmit }) {
  // const submit = useSubmit();
  // link to registration page and about page below form

  return (
    <>
      <Form
        className="w-max mx-auto flex flex-col gap-y-4 border p-7 rounded-md my-4 mt-4 bg-black"
        onSubmit={handleSubmit}
      >
        {fields.map((field) => (
          <Input key={field.id} {...field} />
        ))}

        <button
          type="submit"
          className="px-4 py-2 rounded bg-blue-500 text-white"
        >
          Login
        </button>
        <Link
          to={`/register`}
          className="button underline align-middle text-center text-white hover:text-gray-300"
        >
          Create Account
        </Link>
      </Form>
      <Link
        to={`/about`}
        className="button underline ml-4 text-white hover:text-gray-300"
      >
        About Page
      </Link>
    </>
  );
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

// old onSubmit function
/*
(e) => {
          e.preventDefault();
          submit(e.target, { method: "post" }); // submit must be done before submit to tranfer input
          e.target.reset();
        }
*/
