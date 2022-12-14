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
// import apiService from "./services/api.service";
import About from "./routes/About";

/* // login function
const login = async ({ request }) => {
  // do I add my hook here?
  const fd = await request.formData();
  // get email and password
  const input = Object.fromEntries(fd);
  // console.log(input);
  // call apiService.login
  const loginUser = await apiService.getUser(input.email, input.password);
  // TODO: do without second apiService fetch
  // redirect to game with user id
  return redirect(`${loginUser.id}/game`);
};
*/

/*
 In hindsight all login and user related
 actions should have been handled by routing
 and params. The reducer should have been just for the game.
*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "register",
        element: <Register />,
      },
      {
        path: ":id/game",
        element: <Game />,
      },
      {
        path: ":about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
