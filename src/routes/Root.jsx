import { Link, Outlet } from "react-router-dom";

export default function Root() {
  // login/logout will be on left side, other components are children displayed on the wider left part of screen
  return (
    <main className="flex gap-x-4">
      <div></div>
      <Outlet />
    </main>
  );
}
