import Input from "./Input"; // see import.js in forms
import { Form } from "react-router-dom";
import PropTypes from "prop-types";

const fields = [
  {
    id: "rows",
    label: "Rows",
    type: "number",
    minVal: 3,
    maxVal: 6,
  },
  {
    id: "columns",
    label: "Columns",
    type: "number",
    minVal: 3,
    maxVal: 6,
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
      </Form>
    </>
  );
}

GameForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
