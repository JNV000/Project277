// this is just a static about page
export default function About() {
  return (
    <>
      <h1 className="underline text-5xl">
        Project for SWIC CIS 277, Fall 2022
      </h1>
      <p className="mt-5">
        A project featuring a mock user Login system using JSON server adn React
        routing, and a simple game making use of components and a reducer. The
        game has the user moving through a series of 2D grid based maps by
        clicking on squares. The user tries to get the 'X' to the door(🚪)
        without running into the monster (💀).
      </p>
      <h2 className="text-2xl mt-3">How to Play</h2>
      <ul className="list-disc">
        <li>1. Login, create an account if you do not have one.</li>
        <li>2. Select number of rows and columsn you want in each map.</li>
        <li>
          3. Click on adjacent squares to move the 'X'. Diagnols are not
          adjacent.
        </li>
        <li>3. Try to get to the space marked with the door.</li>
        <li>
          4. Avoid the monster. It can move after every turn you take, so you
          may get a Game Over from walking next to it or by walking into its
          space.
        </li>
      </ul>
    </>
  );
}
