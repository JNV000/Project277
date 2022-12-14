import makeMap from "../utils/makeMap";

/*
 * needs to hold
 * map
 * player location
 * and has functions for
 * clicking on square
 * ...
 */

export default function reducer(state, action) {
  switch (action.type) {
    case "user_login": {
      // TODO: make a test for either this with useGame
      // make a new user object set to user info attached to the action
      const newUser = {
        fName: action.user.firstName,
        lName: action.user.lastName,
        email: action.user.email,
        id: action.user.id,
      };
      // console.log(newUser);
      return {
        // everthing except the user should be null
        user: newUser,
        game: null,
      };
    }
    case "new_game": {
      // make a new game object set to user info attached to the action
      const mapData = makeMap(action.game.rows, action.game.columns);
      const newGame = {
        rows: action.game.rows,
        columns: action.game.columns,
        map: mapData.map,
        player: mapData.playerLoc,
        monster: mapData.monsterLoc,
        door: mapData.doorLoc,
        turns: 0,
        cleared: 0,
      };
      console.log(newGame);
      return {
        // everthing except the user should be null
        user: state.user,
        game: newGame,
      };
    }
    case "made_move": {
      // the most complicated one.
      // get index clicked and compare to current player location
      const rowClick = parseInt(action.index.charAt(0));
      const colClick = parseInt(action.index.charAt(2));
      // verify that room is next to current player location
      // left, down, right, up
      console.log(rowClick, colClick);
      console.log(state.game.player[0]);
      if (
        (rowClick === state.game.player[0] &&
          colClick === state.game.player[1] - 1) ||
        (rowClick === state.game.player[0] + 1 &&
          colClick === state.game.player[1]) ||
        (rowClick === state.game.player[0] &&
          colClick === state.game.player[1] + 1) ||
        (rowClick === state.game.player[0] - 1 &&
          colClick === state.game.player[1])
      ) {
        // no need to check boundaries, can't click on a square that ins't there
        // make const for new game state
        const nextGameState = {
          rows: state.game.rows,
          columns: state.game.columns,
          map: state.game.map,
          player: [rowClick, colClick], // we can put the player here
          monster: state.game.monster,
          door: state.game.door,
          // increment turns taken
          turns: state.game.turns + 1,
          cleared: state.game.cleared,
        };
        // check if new player location is on the door or monster
        if (
          state.game.door[0] === rowClick &&
          state.game.door[1] === colClick
        ) {
          alert("Map cleared! Entering next map");
          // increment number of maps cleared
          nextGameState.cleared = state.game.cleared + 1;
          // make a new map or reset
          const nextMap = makeMap(state.game.rows, state.game.columns);
          nextGameState.player = nextMap.playerLoc;
          nextGameState.monster = nextMap.monsterLoc;
          nextGameState.door = nextMap.doorLoc;
          nextGameState.map = nextMap.map;
        }
        if (
          state.game.monster[0] === rowClick &&
          state.game.monster[1] === colClick
        ) {
          // end game
          alert("Game Over! You got too close to the monster.");
          return {
            // everthing except the user should be null
            user: state.user,
            game: null,
          };
        }
        // get monsters next location and check for game over again.
        const monsterMove = Math.floor(Math.random() * 4);
        switch (monsterMove) {
          case 0: {
            // move up?
            if (
              state.game.monster[0] - 1 >= 0 &&
              state.game.map[state.game.monster[0] - 1][state.game.monster[1]]
            ) {
              nextGameState.monster = [
                state.game.monster[0] - 1,
                state.game.monster[1],
              ];
            }
            break;
          }
          case 1: {
            // move down
            if (
              state.game.monster[0] + 1 < state.game.rows &&
              state.game.map[state.game.monster[0] + 1][state.game.monster[1]]
            ) {
              nextGameState.monster = [
                state.game.monster[0] + 1,
                state.game.monster[1],
              ];
            }
            break;
          }
          case 2: {
            // move left
            if (
              state.game.monster[1] - 1 >= 0 &&
              state.game.map[state.game.monster[0]][state.game.monster[1] - 1]
            ) {
              nextGameState.monster = [
                state.game.monster[0],
                state.game.monster[1] - 1,
              ];
            }
            break;
          }
          case 3: {
            // move right
            if (
              state.game.monster[1] + 1 < state.game.columns &&
              state.game.map[state.game.monster[0]][state.game.monster[1] + 1]
            ) {
              nextGameState.monster = [
                state.game.monster[0],
                state.game.monster[1] + 1,
              ];
            }
          }
          // if not then its ok if the monster doesn't move
        }
        if (
          nextGameState.monster[0] === rowClick &&
          nextGameState.monster[1] === colClick
        ) {
          // end game
          alert("Game Over! You got too close to the monster.");
          return {
            // everthing except the user should be null
            user: state.user,
            game: null,
          };
        }
        return {
          user: state.user,
          game: nextGameState,
        };
      } else {
        // if a square that can't be moved to was clicked do nothing
        return {
          user: state.user,
          game: state.game,
        };
      }
    }
    case "user_logout": {
      return {
        // just ditch everyting
        user: null,
        game: null,
      };
    }
    default:
      throw new Error("Invalid action");
  }
}
