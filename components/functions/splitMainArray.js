var run = (mainArray) => {

  // square root of the total array, so without having to import size, get size
  var splitSize = mainArray.length ** 0.5;

  var newGrid = [];
  for (var v=0; v<mainArray.length; v+=splitSize) {
       newGrid.push(mainArray.slice(v,v+splitSize));
  }
  return newGrid
}



export function splitMainArray (mainArray) {

  return(

    run(mainArray)

  )

}
