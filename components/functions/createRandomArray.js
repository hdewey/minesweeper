// Creating a random array of numbers, length is 1/5 of total cells

var run = (size) => {
  const nums = new Set();
  while(nums.size !== Math.round(Math.pow(size, 2) * .2)) {
    nums.add(Math.floor(Math.random() * Math.pow(size, 2)) + 1);
  }
  // for debug: console.log([...nums])
  return [...nums]
}

export function createRandomArray (size) {
  return (
    run(size)
  )
}
