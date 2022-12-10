import { Link, Outlet } from "react-router-dom";
import LogoutBtn from "../components/Logout";
import LoginForm from "../components/Forms/LoginForm";

export default function Root() {
  // login/logout will be on left side, other components are children displayed on the wider left part of screen
  return (
    // reducer/hook will be used to either Login or Logout Button

    <main className="flex gap-x-4">
      <div className="w-1/5 bg-blue-600 h-screen text-white">
        <h1>Hello World!</h1>
        <p>
          Login form goes here. After logging in/picking user logout button will
          go here instead.
        </p>
        <LoginForm />
        <LogoutBtn />
      </div>
      <Outlet />
      <p>Create account, game stuff, and about page will go here.</p>
    </main>
  );
}
