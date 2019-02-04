import Layout from '../components/layout';

// game components
import Desk   from '../components/desk';
import Square from '../components/square';
import Mine   from '../components/mine';
import Flag   from '../components/flag';

// setup functions
import { createGrid }         from '../components/functions/createGrid';
import { minesInProximity }   from '../components/functions/minesInProximity';
import { splitMainArray }     from '../components/functions/splitMainArray';
import { mapBombs }           from '../components/functions/mapBombs';
import { mapEmpties }         from '../components/functions/mapEmpties';
import { createRandomArray }  from '../components/functions/createRandomArray';
import { emptiesInProximity } from '../components/functions/emptiesInProximity';
import { findEmpties }        from '../components/functions/findEmpties';

// whole game based off of size:
// change it to experiment around
var size = 5;

// stats about to board to be used as function parameters
var stats = {
  size : size,
  bombNumber : size ** 2 * .2,
  //test without random numbers:
  //bombsInArray : [0,7,12,17,23],
  grid : [],
  bombsInArray: createRandomArray(size)
}

// creating an array of 100 cells
stats.grid = createGrid(stats);

class Index extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      gameEnd: 0,
      // finding i: where i is a bomb, building an array consiting of those #'s
      bombs: mapBombs(stats.grid),
      disabled: [],
      empties: findEmpties(stats, splitMainArray(stats.grid)),
      opened: [],
      flag: [],
      correct: [],
      mainArray: stats.grid,
      splitArray: splitMainArray(stats.grid),
      won: 0,
    }
  }

  gameState = () => {
    // show this at title
    if (this.state.gameEnd && !this.state.won) {
      return `you cleared ` + Math.round((this.state.correct.length/this.state.bombs.length) * 100) + `% of bombs...`
    } else if (this.state.won) {
      return `Area Clear! You Won!!!`;
    } else {
      return `Minesweeping in Progress...`
    }
  }

  shouldDisable = (i) => {
    // check to see if this cell should have disabled attr.
    if (this.state.disabled.indexOf(i) > -1) {
      return true;
    } else if (this.state.opened.indexOf(i) > -1 && mapEmpties(i, this.state.splitArray)) {
      return true;
    } else if (this.state.gameEnd && (mapEmpties(i, this.state.splitArray) || this.state.bombs.indexOf(i) > -1 )) {
      return true;
    } else if (this.state.opened.indexOf(i) > -1 && minesInProximity(i, this.state.splitArray) == 0) {
      return true;
    } else {
      return false;
    }
  }

  // decide what this cell is going to show
  showContent = (i) => {
    if(this.state.bombs.indexOf(i) == -1 && this.state.opened.indexOf(i) > -1 && !mapEmpties(i, this.state.splitArray)) {
      return minesInProximity(i, this.state.splitArray);
    } else if (this.state.gameEnd && this.state.bombs.indexOf(i) == -1 && !mapEmpties(i, this.state.splitArray)) {
      return minesInProximity(i, this.state.splitArray);
    } else {
        return ``;
    }
  }

  // when the user left clicks a cell, either open cell and show number, or end game
  handleLeftClick = (i) => {
    if (!this.shouldDisable(i) && this.state.flag.indexOf(i) == -1) {
      if (this.state.bombs.indexOf(i) !== -1) {
        this.setState({
          gameEnd : 1
        });
      } else if (this.state.opened.indexOf(i) == -1) {
        const newOpenState = [...this.state.opened];
        newOpenState.push(i)
        this.setState({
          opened : newOpenState
        })
        // logs numbered that is clicked = console.log(minesInProximity(i, this.state.splitArray))
      }
      if(minesInProximity(i, this.state.splitArray) == 0) {
        //console.log('cell clicked: ' + i)
        var x = emptiesInProximity(i, this.state.splitArray);
        //console.log(...x)
        const newOpenState = [...this.state.opened];
        newOpenState.push(...x, i)
        this.setState({
          opened : newOpenState
        })
      }

    }
  }

  // when the user right clicks to place a flag
  handleRightClick = (i,e) => {

    // if this cell isn't a flag, isn't disabled, and game isnt over
    if (this.state.flag.indexOf(i) == -1 && !this.shouldDisable(i) && !this.state.gameEnd) {
      // make this cell a flag
      const newFlagState = [...this.state.flag];
      newFlagState.push(i)
      this.setState({
        flag : newFlagState
      });

      // if it's also a bomb, add to the correct array
      if(this.state.bombs.indexOf(i) > -1) {
        //console.log('this cell is a bomb')
        const newCorrectState = [...this.state.correct];
        newCorrectState.push(i)
        this.setState({
          correct : newCorrectState
        });

        //console.log(newCorrectState.length)

        // if the correct array length is equal to the amount of bombs,
        // and the # of flags is equal to the bombs, the game has been won.
        if (newCorrectState.length == this.state.bombs.length) {
          if (newFlagState.length == this.state.bombs.length) {
            //console.log('game won!');
            this.setState({
              won: 1
            })
          }
        }
      }
      // if this cell is already a flag, remove the flag
    } else if (this.state.flag.indexOf(i) > -1 && !this.shouldDisable(i) && !this.state.gameEnd) {
      var current = this.state.flag.indexOf(i);
      const newFlagState = [...this.state.flag];
      newFlagState.splice(current, 1);
      this.setState({
        flag : newFlagState
      });
      // if once you remove that flag, all bombs have been flagged, game has been won
      if (this.state.correct.length == this.state.bombs.length) {
        if (newFlagState.length == this.state.bombs.length) {
            //console.log('game won!');
            this.setState({
              won: 1
            })
        }
      }
      // if this cell had a flag and was a bomb, remove it from the correct array
      if(this.state.bombs.indexOf(i) > -1) {
        //console.log('this cell is a bomb and already has a flag, remove: ', i)
        var current = this.state.correct.indexOf(i)
        const newCorrectState = [...this.state.correct];
        newCorrectState.splice(current, 1)
        this.setState({
          correct : newCorrectState
        });
      }
    }
    e.preventDefault();
  }

  componentDidMount() {
    // used for debug
  }

  render() {

    return(

      <Layout title={this.gameState()}>
        <Desk boardSize={stats.size}>
          {[...Array(stats.size ** 2).keys()].map(
            i => (
              <Square
              key={i}
              gameEnd={this.state.gameEnd}
              disabled={this.shouldDisable(i)}
              onClick={() => this.handleLeftClick(i)}
              onContextMenu={(e) => this.handleRightClick(i,e)}
              onMouseEnter={() => {this.setState({ hover: i })}}
              onMouseLeave={() => {this.setState({ hover: undefined })}}
              hover={this.state.hover == i ? true : false}
              >
                {this.state.gameEnd && (this.state.bombs.indexOf(i) > -1 && this.state.flag.indexOf(i) == -1) ? <Mine /> : ``}
                {this.state.flag.indexOf(i) > -1 ? <Flag /> : ``}
                {this.showContent(i)}
              </Square>
            ))
          }
        </Desk>
      </Layout>

    )

  }
}

export default Index;
