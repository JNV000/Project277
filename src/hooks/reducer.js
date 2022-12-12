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
      return {
        // everthing except the user should be null
        user: newUser,
        game: null,
      };
    }
    default:
      throw new Error("Invalid action");
  }
}
