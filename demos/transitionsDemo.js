import { randomNumbers } from '../randomNumbers';

export function transitionsDemo() {

  let dataset = randomNumbers(20, 100);

  let w = 500;
  let h = 100;
  let barPadding = 2;

  let xScale = d3.scale.linear()
    .domain([0, dataset.length])
    .range([0, w]);

  let yScale = d3.scale.linear()
    .domain([0, d3.max(dataset)])
    .range([0, h]);

  let colorScale = d3.scale.linear()
    .domain([0, d3.max(dataset)])
    .rangeRound([0, 255]);

  console.log(colorScale(0));
  console.log(colorScale(d3.max(dataset)));
  console.log(colorScale(d3.max(dataset) / 2));


  d3.select('body')
    .append('button')
    .html('click to update')
    .on("click", () => {
      // updateData();
      updateDataWithTransition();
    });

  let svg = d3.select('body')
    .append('svg')
    .attr('width', w)
    .attr('height', h);

  svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('x', (d, i) => xScale(i) )
    .attr('y', (d) => h - yScale(d))
    .attr('width', xScale(1) - barPadding)
    .attr('height', (d) => yScale(d))
    .attr('fill', (d) => "rgb(0, 0, " + colorScale(d) + ")");

  function updateData() {
    dataset = randomNumbers(20, 100);

    yScale = d3.scale.linear()
      .domain([0, d3.max(dataset)])
      .range([0, h]);

    colorScale = d3.scale.linear()
      .domain([0, d3.max(dataset)])
      .rangeRound([0, 255]);

    svg.selectAll('rect')
      .data(dataset)
      .attr('y', (d) => h - yScale(d))
      .attr('height', (d) => yScale(d))
      .attr('fill', (d) => "rgb(0, 0, " + colorScale(d) + ")");
  }

  function updateDataWithTransition() {
    dataset = randomNumbers(20, 100);

    yScale = d3.scale.linear()
      .domain([0, d3.max(dataset)])
      .range([0, h]);

    colorScale = d3.scale.linear()
      .domain([0, d3.max(dataset)])
      .rangeRound([0, 255]);

    svg.selectAll('rect')
      .data(dataset)
      .transition()
      .attr('y', (d) => h - yScale(d))
      .attr('height', (d) => yScale(d))
      .attr('fill', (d) => "rgb(0, 0, " + colorScale(d) + ")");
  }
}