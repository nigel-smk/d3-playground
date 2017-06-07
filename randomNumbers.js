export function randomNumbers(count, range) {
  let dataSet = [];
  for (let i = 0; i < count; i++) {
    let newNumber = Math.random() * range;
    dataSet.push(Math.round(newNumber));
  }

  return dataSet;
}