import { createComponent } from 'cf-style-container';

var bcColor = (disabled, hover, gameEnd) => {

  if(disabled) {
    return '#68B0AB'
  } else if (!disabled && hover) {
    if (!gameEnd) {
      return '#768BA5'
    }
    return '#C7E8F3'
  } else {
    return '#C7E8F3'
  }
}

const Square = createComponent(
  ({ disabled, hover, gameEnd }) => ({
    width: 40,
    height: 40,
    padding: 10,
    cursor: disabled ? 'initial' : 'pointer',
    backgroundColor: bcColor(disabled, hover, gameEnd),
    border: `1px solid black`,
    lineHeight: 1,
    textAlign: 'center',
    fontSize: 18,
    color: '#202A35'
  }),
  'div',
  ['onClick', 'onContextMenu', 'onMouseEnter', 'onMouseLeave']
);

export default Square;
