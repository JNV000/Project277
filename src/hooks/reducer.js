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
      const newGame = {
        rows: action.game.rows,
        columns: action.game.columns,
        map: makeMap(action.game.rows, action.game.columns),
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
