// it might take a while to make a large map
// Perhaps this could be async?

// TODO: make map (nested array), and return it
export default function makeMap(row, col) {
  // array from seems to work best for this
  // create rows
  // const map = Array.from({ length: row }, () => null);
  // for each row in map add a nested array for columns, set to a random truthy or falsy value
  // map.fill(Array.from({ length: col }, () => Math.floor(Math.random() * 4)));
  // this does not work, makes each row the same

  let mapNeedsMade = true;

  let map;

  while (mapNeedsMade) {
    // make nested array based on rows and columns
    map = Array.from({ length: row }, () =>
      Array.from({ length: col }, () => Boolean(Math.floor(Math.random() * 4)))
    );
    // call check function to make sure map works
    // pass by value not reference.
    const copyMap = map.map((mapRow) => mapRow.slice());
    // return map
    mapNeedsMade = checkMap(copyMap, row, col);
  }

  // now we determine player, monster, and door location
  const playerLoc = [0, 0];
  const monsterLoc = [0, 0];
  const doorLoc = [0, 0];
  // randomly generate starting column and row
  do {
    playerLoc[0] = Math.floor(Math.random() * row);
    playerLoc[1] = Math.floor(Math.random() * col);
  } while (map[playerLoc[0]][playerLoc[1]] === false);
  // player cannot start in a wall (false value)
  // repeat for monster and exit door

  do {
    monsterLoc[0] = Math.floor(Math.random() * row);
    monsterLoc[1] = Math.floor(Math.random() * col);
  } while (
    monsterLoc[0] === playerLoc[0] ||
    monsterLoc[1] === playerLoc[1] ||
    map[monsterLoc[0]][monsterLoc[1]] === false
  );
  // make sure monster is far from player at start

  do {
    doorLoc[0] = Math.floor(Math.random() * row);
    doorLoc[1] = Math.floor(Math.random() * col);
  } while (
    (doorLoc[0] === playerLoc[0] && doorLoc[1] === playerLoc[1]) ||
    map[doorLoc[0]][doorLoc[1]] === false
  );
  // make sure player does not start on the door

  // return map and locations
  return { map, playerLoc, monsterLoc, doorLoc };
}

// TODO: write function to ensure a map is navigable
function checkMap(map2check, numRows, numCols) {
  // find first true room
  for (let i = 0; i < numRows; i++) {
    if (map2check[i][0] === true) {
      // call checkRoom then see if its a good map
      checkRoom(map2check, i, 0, numRows, numCols);
      // go through the checked map and see if any rooms were unreachable
      console.log(map2check);
      for (let r in map2check) {
        for (let c in map2check[r]) {
          if (map2check[r][c] === true)
            // a room we could not reach
            return true;
        }
      }
      // we were able to check all rooms
      return false;
    }
  }
  // if we go through a rows and find no rooms we call it a bad map
  return true;
}

function checkRoom(mapReference, r, c, numRows, numCols) {
  // set crnt Room to false
  mapReference[r][c] = false;

  // check room to left
  // if ((y-1) < 0 ) dont check
  if (c - 1 >= 0)
    if (mapReference[r][c - 1] === true)
      checkRoom(mapReference, r, c - 1, numRows, numCols);

  // check room below
  if (r + 1 < numRows)
    if (mapReference[r + 1][c] === true)
      checkRoom(mapReference, r + 1, c, numRows, numCols);

  // check room to right
  if (c + 1 < numCols)
    if (mapReference[r][c + 1] === true)
      checkRoom(mapReference, r, c + 1, numRows, numCols);

  // check room above
  if (r - 1 >= 0)
    if (mapReference[r - 1][c] === true)
      checkRoom(mapReference, r - 1, c, numRows, numCols);
}
