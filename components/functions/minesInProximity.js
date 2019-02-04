import { position } from '../../components/functions/position.js'

var run = (i, splitArray, position) => {

  var row = position.row;
  var col = position.col;

  //console.log(splitArray);

  var count = 0;

  // northwest
  if(splitArray[row-1] !== undefined) {
    //console.log('check')
    if(splitArray[row-1][col-1] !== undefined) {
      //console.log('northwest is valid');
      if (splitArray[row-1][col-1][1] == 1) {
        count++;
      }
    }
  }
  //north
  if(splitArray[row-1] !== undefined) {
    if(splitArray[row-1][col] !== undefined) {
      //console.log('north is valid');
      if(splitArray[row-1][col][1] == 1) {
        count++;
      }
    }
  }
  //northeast
  if(splitArray[row-1] !== undefined) {
    if(splitArray[row-1][col+1] !== undefined) {
      //console.log('northeast is valid');
      if(splitArray[row-1][col+1][1] == 1) {
        count++;
      }
    }
  }
  //west
  if(splitArray[row][col-1] !== undefined) {
    //console.log('west is valid');
    if (splitArray[row][col-1][1] == 1) {
      count++
    }
  }
  //east
  if(splitArray[row][col+1] !== undefined) {
    //console.log('east is valid')
    if (splitArray[row][col+1][1] == 1) {
      count++;
    }
  }
  //southwest
  if(splitArray[row+1] !== undefined) {
    if(splitArray[row+1][col-1] !== undefined) {
      //console.log('southwest is valid');
      if (splitArray[row+1][col-1][1] == 1) {
        count++;
      }
    }
  }
  //south
  if(splitArray[row+1] !== undefined) {
    if(splitArray[row+1][col] !== undefined) {
      if(splitArray[row+1][col][1] == 1) {
        count++;
      }
    }
  }
  //southeast
  if(splitArray[row+1] !== undefined) {
    if(splitArray[row+1][col+1] !== undefined) {
      if(splitArray[row+1][col+1][1] == 1) {
        count++;
      }
    }
  }
  return count;
}

export function minesInProximity (i, splitArray) {

  return(

    run(i, splitArray, position(i, splitArray))

  )

}
