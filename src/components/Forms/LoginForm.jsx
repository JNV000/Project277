import Input from "./Input"; // see import.js in forms
import { Link, Outlet } from "react-router-dom";

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

export default function Registration() {
  // link to registration page and about page below form
  return (
    <>
      <form className="w-max mx-auto flex flex-col gap-y-4 border p-8 rounded-md my-4 mt-4">
        {fields.map((field) => (
          <Input key={field.id} {...field} />
        ))}

        <button
          type="submit"
          className="px-4 py-2 rounded bg-blue-500 text-white"
        >
          Login
        </button>
      </form>
      <Link
        to={`/register`}
        className="button underline text-white hover:text-gray-500"
      >
        Create Account
      </Link>
    </>
  );
}

Registration.propTypes = {};
