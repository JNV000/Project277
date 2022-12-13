import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
// import App from "./App";
import "./index.css";
import Root from "./routes/Root";
import Register from "./routes/Register";
import Game from "./routes/Game";
import Error from "./routes/Error";
import apiService from "./services/api.service";
// import useGame from "./hooks/useGame";

// function that calls either login or logout

// login function

const login = async ({ request }) => {
  // do I add my hook here?
  const fd = await request.formData();

  // get email and password
  const input = Object.fromEntries(fd);
  // console.log(input);

  // call apiService.login
  const loginUser = await apiService.getUser(input.email, input.password);

  // console.log(user);
  // console.log(user.id);
  // TODO: do without second apiService fetch
  // setUser(loginUser); // test this

  // redirect to game with user id

  return redirect(`${loginUser.id}/game`);
};

// logout function

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    action: login,
    children: [
      {
        path: "register",
        element: <Register />,
      },
      {
        path: ":id/game",
        element: <Game />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
