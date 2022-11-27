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

  // make nested array based on rows and columns
  const map = Array.from({ length: row }, () =>
    Array.from({ length: col }, () => Math.floor(Math.random() * 4))
  );

  // call check function to make sure map works
  // pass by value not reference.

  // return map
  return map;
}

// TODO: write function to ensure a map is navigable
