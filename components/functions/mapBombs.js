var run = (mainArray) => {

  var bombs = [];

  for (var b = 0; b < mainArray.length; b++) {
    if(mainArray[b][1] == 1) {
      bombs.push(mainArray[b][0]);
    }
  }

  return bombs

}


export function mapBombs (mainArray) {

  return(

    run(mainArray)

  )

}
