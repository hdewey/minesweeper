var run = (i, splitArray) => {


  for (var b = 0; b < splitArray.length; b++) {
    for (var x = 0; x < splitArray[b].length; x++) {
      if(splitArray[b][x][0] == i) {
        //console.log(i)
        var position = {
          row : b,
          col : x
        }
        return position
      }
    }
  }
}

export function position (i, splitArray) {

  return (
    run(i, splitArray)
  )

}
