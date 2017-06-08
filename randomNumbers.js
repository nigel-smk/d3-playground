// http://statisticsblog.com/probability-distributions
import * as PD from 'probability-distributions';

export function randomNumbers(count, range) {
  let dataSet = [];
  for (let i = 0; i < count; i++) {
    let newNumber = Math.random() * range;
    dataSet.push(Math.round(newNumber));
  }

  return dataSet;
}

export function randomNumbers2d(count, xRange, yRange) {
  let xValues = randomNumbers(count, xRange);
  let yValues = randomNumbers(count, yRange);

  return zip(xValues, yValues);
}

export function gaussian2d(count, mean, std) {
  let xValues = PD.rnorm(count, mean, std);
  let yValues = PD.rnorm(count, mean, std);
  return zip(xValues, yValues);
}

export function log2d(count, mean, std) {
  let xValues = PD.rlnorm(count, mean, std);
  let yValues = PD.rlnorm(count, mean, std);
  return zip(xValues, yValues);
}

export function cauchy2d(count, mean, std) {
  let xValues = PD.rcauchy(count, mean, std);
  let yValues = PD.rcauchy(count, mean, std);
  return zip(xValues, yValues);
}

export function rchisq2d(count, deg) {
  let xValues = PD.rchisq(count, deg);
  let yValues = PD.rchisq(count, deg);
  return zip(xValues, yValues);
}

function zip(source, target) {
  return source.map((x, i) => {
    return [x, target[i]];
  });
}