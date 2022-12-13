import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import useGame from "../hooks/useGame";

export default function LogoutBtn() {
  // use either reducer or props to get userName
  // on click function to logout then remove user info from reducer
  const { clearUser } = useGame();
  const navigate = useNavigate();
  // call logout hook and then useNavigate to root
  function logout() {
    clearUser();
    navigate("/");
    // need to reload or logout button stays on screen
    window.location.reload(false);
    // why is this necessary?
  }

  return (
    <>
      <p className="my-8 text-xl">Name goes here</p>
      <button
        type="button"
        className="rounded bg-blue-400 py-2 px-4 font-bold text-white hover:bg-blue-100"
        onClick={logout}
      >
        Logout
      </button>
    </>
  );
}
