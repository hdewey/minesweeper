var run = (stats) => {

  var arraySize = stats.size ** 2
  var grid = [];

  // loop to create a 2 dimentional array with a smaller array for each cell
  for (var i = 0; i < arraySize; i++) {
    grid.push([i,0,0]);
  }

  // check to see i is a bomb, and if so, declare that in the specific cell's array
  for (var i = 0; i < arraySize; i++) {
    for (var b = 0; b < stats.bombNumber+1; b++) {
      if(grid[i][0] == stats.bombsInArray[b]) {
        // example structure : [4, 1, 0] has bomb or [8, 0, 0] does not have a bomb
        grid[i][1] = 1;

      }
    }
  }

  // grid is an array with the length of size^2 and for each cell [i, isBomb?, 0]
  return grid
}

export function createGrid (stats) {

  return(
    // grid is an array with the length of size^2 and for each cell [i, isBomb?, 0]
    run(stats)

  )

}
