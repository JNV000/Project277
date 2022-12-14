import reducer from "../hooks/reducer";

it("should not update or take a turn if a square to far from the user is pressed", () => {
  const testGame = {
    rows: 1,
    columns: 4,
    map: Array(4).fill(true),
    player: [0, 0], // we can put the player here
    monster: [0, 4],
    door: [0, 4],
    turns: 0,
    cleared: 0,
  };

  const state = {
    user: null,
    game: testGame,
  };

  const action = {
    type: "made_move",
    index: "0-3",
  };

  const newState = reducer(state, action);

  // turns should still be 0 and user should not have moved
  expect(newState.game.player).toStrictEqual(testGame.player);
  expect(newState.game.turns).toBe(0);
  expect(newState.game.cleared).toBe(0);
});

it("should move player and increment the turn when an adjacent square is clicked", () => {
  const testGame = {
    rows: 1,
    columns: 4,
    map: Array(4).fill(true),
    player: [0, 0], // we can put the player here
    monster: [0, 4],
    door: [0, 4],
    turns: 0,
    cleared: 0,
  };

  const state = {
    user: null,
    game: testGame,
  };

  const action = {
    type: "made_move",
    index: "0-1",
  };

  const newState = reducer(state, action);

  // turns should still be 1 and user should have moved
  expect(newState.game.player).toStrictEqual([0, 1]);
  expect(newState.game.turns).toBe(1);
  expect(newState.game.cleared).toBe(0);
});

it("should end the game and set to null when running into an enemy, even if door is there too", () => {
  const testGame = {
    rows: 1,
    columns: 4,
    map: Array(4).fill(true),
    player: [0, 0], // we can put the player here
    monster: [0, 1],
    door: [0, 1],
    turns: 0,
    cleared: 0,
  };

  const state = {
    user: null,
    game: testGame,
  };

  const action = {
    type: "made_move",
    index: "0-1",
  };

  const newState = reducer(state, action);

  // game should be null
  expect(newState.game).toBe(null);
});

it("should set user and game to null", () => {
  const testGame = {
    rows: 1,
    columns: 4,
    map: Array(4).fill(true),
    player: [0, 1], // we can put the player here
    monster: [0, 4],
    door: [0, 2],
    turns: 0,
    cleared: 0,
  };

  const state = {
    user: "hi",
    game: testGame,
  };

  const action = {
    type: "user_logout",
  };

  const newState = reducer(state, action);

  // turns should still be 0 and user should not have moved
  expect(newState.game).toBe(null);
  expect(newState.user).toBe(null);
});

it("should end the game and set to null when running into an enemy, even if door is there too", () => {
  const testGame = {
    rows: 1,
    columns: 4,
    map: Array(4).fill(true),
    player: [0, 0], // we can put the player here
    monster: [0, 1],
    door: [0, 1],
    turns: 0,
    cleared: 0,
  };

  const state = {
    user: null,
    game: testGame,
  };

  const action = {
    type: "made_move",
    index: "0-1",
  };

  const newState = reducer(state, action);

  // game should be null
  expect(newState.game).toBe(null);
});

it("should set user and game to null", () => {
  const testGame = {
    rows: 1,
    columns: 4,
    map: Array(4).fill(true),
    player: [0, 1], // we can put the player here
    monster: [0, 4],
    door: [0, 2],
    turns: 0,
    cleared: 0,
  };

  const state = {
    user: "hi",
    game: testGame,
  };

  const action = {
    type: "user_logout",
  };

  const newState = reducer(state, action);

  // both should be null
  expect(newState.game).toBe(null);
  expect(newState.user).toBe(null);
});

it("should set game to null, but leave user", () => {
  const testGame = {
    rows: 1,
    columns: 4,
    map: Array(4).fill(true),
    player: [0, 1], // we can put the player here
    monster: [0, 4],
    door: [0, 2],
    turns: 0,
    cleared: 0,
  };

  const state = {
    user: "hi",
    game: testGame,
  };

  const action = {
    type: "reset_game",
  };

  const newState = reducer(state, action);

  // turns should still be 0 and user should not have moved
  expect(newState.game).toBe(null);
  expect(newState.user).toBe("hi");
});

it("should increment cleared when getting to a door", () => {
  const testGame = {
    rows: 3, // need to give valid input for makeMap
    columns: 3,
    map: Array(3).fill(true),
    player: [0, 1], // we can put the player here
    monster: [0, 3],
    door: [0, 0],
    turns: 0,
    cleared: 0,
  };

  const state = {
    user: "hi",
    game: testGame,
  };

  const action = {
    type: "made_move",
    index: "0-0",
  };

  const newState = reducer(state, action);

  // turns should still be 0 and user should not have moved
  expect(newState.game.turns).toBe(testGame.turns + 1);
  expect(newState.game.cleared).toBe(testGame.cleared + 1);
  expect(newState.user).toBe("hi");
});
