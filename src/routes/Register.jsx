// import { Link, Outlet } from "react-router-dom";
import RegisterForm from "../components/Forms/RegisterForm";

export default function Root() {
  // login/logout will be on left side, other components are children displayed on the wider left part of screen
  return (
    // reducer/hook will be used to either Login or Logout Button
    <RegisterForm />
  );
}
