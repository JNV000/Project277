import useGame from "../hooks/useGame";
import GameForm from "../components/forms/GameForm";
import Board from "../components/game/board";

// this will hold either the inputs to make a game and then the map/game during play.

export default function Game() {
  // state for game
  const { user, game, startGame, makeMove, resetGame } = useGame();
  // if there is a game in the state load the board, else create one
  function createGame(e) {
    e.preventDefault();
    // pass the form into FormData
    const fd = new FormData(e.target);
    const newGame = Object.fromEntries(fd);
    console.log(newGame);
    startGame(newGame);
  }

  return (
    <div className="content-center pt-3">
      {game ? (
        <Board
          map={game.map}
          rows={parseInt(game.rows)}
          cols={parseInt(game.columns)}
          playMark={game.player}
          monsterMark={game.monster}
          doorMark={game.door}
        />
      ) : (
        <GameForm handleSubmit={createGame} />
      )}
    </div>
  );
}
