import useGame from "../hooks/useGame";
import GameForm from "../components/forms/GameForm";
import Board from "../components/game/board";

// this will hold either the inputs to make a game and then the map/game during play.

export default function Game() {
  // state for game
  const { game, startGame, makeMove, resetGame } = useGame();
  // if there is a game in the state load the board, else create one
  function createGame(e) {
    e.preventDefault();
    // pass the form into FormData
    const fd = new FormData(e.target);
    const newGame = Object.fromEntries(fd);
    startGame(newGame);
  }

  return (
    <div className="content-center justify-center pl-5 pt-5">
      {game ? (
        <>
          <div className="align-middle text-center border-4">
            <p>{`Turns Taken: ${game.turns}, Maps Cleared: ${game.cleared}`}</p>
            <Board
              map={game.map}
              rows={parseInt(game.rows)}
              cols={parseInt(game.columns)}
              playMark={game.player}
              monsterMark={game.monster}
              doorMark={game.door}
              clickFunction={makeMove}
            />
          </div>
          <button
            className="px-4 py-2 rounded mt-1 bg-blue-500 text-white"
            onClick={resetGame}
          >
            End Game
          </button>
        </>
      ) : (
        <GameForm handleSubmit={createGame} />
      )}
    </div>
  );
}
