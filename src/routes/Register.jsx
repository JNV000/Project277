// import { Link, Outlet } from "react-router-dom";
import RegisterForm from "../components/Forms/RegisterForm";
import apiService from "../services/api.service";

export default function Root() {
  // login/logout will be on left side, other components are children displayed on the wider left part of screen
  return (
    // reducer/hook will be used to either Login or Logout Button
    <RegisterForm
      onClick={async (e) => {
        e.preventDefault();
        // pass the form into FormData
        const fd = new FormData(e.target);
        const newUser = Object.fromEntries(fd);
        // const results = await apiService.add(newUser);
        await apiService.add(newUser);
        // clear the form
        e.target.reset();
        // tell user account was created
        alert("Account created. Try logging in.");
        // console.log(results);
      }}
    />
  );
}
