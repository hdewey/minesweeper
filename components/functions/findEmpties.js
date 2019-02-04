import { minesInProximity } from '../../components/functions/minesInProximity'

var run  = (stats, splitArray) => {
  var empties = []

  for (var i = 0; i < stats.size ** 2; i++) {
    //console.log(i)
    if(minesInProximity(i, splitArray) == 0 ) {
      //console.log(i)
      empties.push(i)
      //console.log(this.state.empties)
    }
  }
  return [...empties];
}

export function findEmpties (stats, splitArray) {
  return (
    run(stats, splitArray)
  )
}
