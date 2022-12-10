import PropTypes from "prop-types";

export default function LogoutBtn() {
  // use either reducer or props to get userName
  // on click function to logout then remove user info from reducer

  return (
    <>
      <p className="my-8 text-center text-5xl">Name goes here</p>
      <button
        type="button"
        className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
        onClick={null}
      >
        Logout
      </button>
    </>
  );
}
