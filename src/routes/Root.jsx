import { Outlet, useNavigate } from "react-router-dom";
import LoginForm from "../components/forms/LoginForm";
import LogoutBtn from "../components/Logout";
import apiService from "../services/api.service";
import useGame from "../hooks/useGame";

export default function Root() {
  // login/logout will be on left side, other components are children displayed on the wider left part of screen
  // since hooks have to be called from function components I may have to log in from here.
  const { user, setUser } = useGame();
  // const submit = useSubmit();
  const navigate = useNavigate();

  // this looks really, horribly ugly, but it works
  async function loginAction(e) {
    e.preventDefault();
    // pass the form into FormData
    const fd = new FormData(e.target);
    // get email and password
    const input = Object.fromEntries(fd);
    // console.log(input);

    // call apiService.login
    const loginUser = await apiService.getUser(input.email, input.password);
    if (loginUser) {
      setUser(loginUser);
      // redirect to game with user id
      // submit(e.target, { method: "post" });
      // navigate works better here, don't have to fetch a second time
      navigate(`${loginUser.id}/game`);
    } else alert("Invalid email or password!");
  }

  return (
    // reducer/hook will be used to either Login or Logout Button
    <main className="flex h-screen gap-x-4">
      <div className="w-1/6 min-w-fit bg-blue-600 h-screen text-center text-white">
        <h1 className="pt-5 text-xl">Hello World!</h1>
        {user ? (
          <LogoutBtn first={user.fName} last={user.lName} />
        ) : (
          <LoginForm handleSubmit={loginAction} />
        )}
      </div>
      <div className="align-start ml-11 mt-5">
        <Outlet />
      </div>
    </main>
  );
}
