import PropTypes from "prop-types";

export default function LogoutBtn() {
  // use either reducer or props to get userName
  // on click function to logout then remove user info from reducer

  return (
    <>
      <p className="my-8 text-xl">Name goes here</p>
      <button
        type="button"
        className="rounded bg-blue-400 py-2 px-4 font-bold text-white hover:bg-blue-100"
        onClick={null}
      >
        Logout
      </button>
    </>
  );
}
