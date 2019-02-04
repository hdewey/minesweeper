import { position }         from '../../components/functions/position.js';
import { minesInProximity } from '../../components/functions/minesInProximity';

var run = (i, splitArray, position) => {

  //console.log(minesInProximity)

  var row = position.row;
  var col = position.col;

  var emptiesArray = [];

  if(splitArray[row-1] !== undefined) {
    //console.log('check')
    if(splitArray[row-1][col-1] !== undefined) {
      //console.log('northwest is valid');
      if (minesInProximity(i, splitArray, splitArray[row-1][col-1][1]) == 0) {
        emptiesArray.push(splitArray[row-1][col-1][0])
      }
    }
  }
  //north
  if(splitArray[row-1] !== undefined) {
    if(splitArray[row-1][col] !== undefined) {
      //console.log('north is valid');
      if(minesInProximity(i, splitArray, splitArray[row-1][col][1]) == 0) {
        emptiesArray.push(splitArray[row-1][col][0])
      }
    }
  }
  //northeast
  if(splitArray[row-1] !== undefined) {
    if(splitArray[row-1][col+1] !== undefined) {
      //console.log('northeast is valid');
      if(minesInProximity(i, splitArray, splitArray[row-1][col+1][1]) == 0) {
        emptiesArray.push(splitArray[row-1][col+1][0])
      }
    }
  }
  //west
  if(splitArray[row][col-1] !== undefined) {
    //console.log('west is valid');
    if (minesInProximity(i, splitArray, splitArray[row][col-1][1]) == 0) {
      emptiesArray.push(splitArray[row][col-1][0])
      //console.log(splitArray[row][col-1])
      console.log(minesInProximity(i, splitArray, splitArray[row][col-1][1]))
    }
  }
  //east
  if(splitArray[row][col+1] !== undefined) {
    //console.log('east is valid')
    if (minesInProximity(i, splitArray, splitArray[row][col+1][1]) == 0) {
      emptiesArray.push(splitArray[row][col+1][0])
    }
  }
  //southwest
  if(splitArray[row+1] !== undefined) {
    if(splitArray[row+1][col-1] !== undefined) {
      //console.log('southwest is valid');
      if (minesInProximity(i, splitArray, splitArray[row+1][col-1][1]) == 0) {
        emptiesArray.push(splitArray[row+1][col-1][0])
      }
    }
  }
  //south
  if(splitArray[row+1] !== undefined) {
    if(splitArray[row+1][col] !== undefined) {
      if(minesInProximity(i, splitArray, splitArray[row+1][col][1]) == 0) {
        emptiesArray.push(splitArray[row+1][col][0])
      }
    }
  }
  //southeast
  if(splitArray[row+1] !== undefined) {
    if(splitArray[row+1][col+1] !== undefined) {
      if(minesInProximity(i, splitArray, splitArray[row+1][col+1][1]) == 0) {
        emptiesArray.push(splitArray[row+1][col+1][0])
      }
    }
  }
  return emptiesArray;
  // return(
  //   'hello world'
  // )

}

export function emptiesInProximity(i, splitArray) {

  return(
    run(i, splitArray, position(i, splitArray))
  )

}
