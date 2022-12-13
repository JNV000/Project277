import useGame from "../hooks/useGame";
import GameForm from "../components/forms/GameForm";
import Board from "../components/game/board";

// this will hold either the inputs to make a game and then the map/game during play.

export default function Game() {
  // state for game
  const { user, game, setUser, makeMove, resetGame } = useGame();
  // if there is a game in the state load the board, else create one
  function createGame(e) {
    e.preventDefault();
    // pass the form into FormData
    const fd = new FormData(e.target);
    const newGame = Object.fromEntries(fd);
    console.log(newGame);
    // TODO: make reducer and hook method to make game
  }

  return (
    <div className="content-center pt-10">
      <GameForm handleSubmit={createGame} />
    </div>
  );
}
