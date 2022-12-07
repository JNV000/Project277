import { useRouteError } from "react-router-dom";
// this is just an error element

export default function Error() {
  const error = useRouteError();

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-y-4">
      <h1 className="text-4xl font-semibold">Error</h1>
      <p>
        Sorry, an unexpected error has occurred. Please go back to the last
        functioning page.
      </p>
      <p>
        <em className="italic">{error.statusText || error.message}</em>
      </p>
    </main>
  );
}
