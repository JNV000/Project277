import Input from "./Input"; // see import.js in forms
import { Form } from "react-router-dom";
import PropTypes from "prop-types";

// lcoking grid size to 4 for testing
const fields = [
  {
    id: "rows",
    label: "Rows",
    type: "number",
    minVal: 4,
    maxVal: 4,
    isReq: true,
  },
  {
    id: "columns",
    label: "Columns",
    type: "number",
    minVal: 4,
    maxVal: 4,
    isReq: true,
  },
];

export default function GameForm({ handleSubmit }) {
  // const submit = useSubmit();
  // link to registration page and about page below form

  return (
    <>
      <Form
        className="w-max mx-auto h-fit flex flex-col gap-y-4 border p-8 rounded-md my-4 mt-4"
        onSubmit={handleSubmit}
      >
        {fields.map((field) => (
          <Input key={field.id} {...field} />
        ))}
        <button
          type="submit"
          className="px-4 py-2 rounded bg-blue-500 text-white"
        >
          Start Game
        </button>
        <p>Map size locked to 4x4 for testing</p>
      </Form>
    </>
  );
}

GameForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
