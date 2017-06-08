import { randomNumbers2d, gaussian2d, log2d, cauchy2d, rchisq2d } from '../randomNumbers';

export function axesDemo() {
  let dataset = newData();

  let w = 600;
  let h = 400;
  let padding = 30;

  let xScale = d3.scale.linear()
    .domain([ d3.min(dataset, (d) => d[0]), d3.max(dataset, (d) => d[0]) ])
    .range([ 0, w ]);

  let yScale = d3.scale.linear()
    .domain([ d3.min(dataset, (d) => d[1]), d3.max(dataset, (d) => d[1]) ])
    .range([ 0, h - padding ]);

  let svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

  svg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("cx", (d) => xScale(d[0]))
    .attr("cy", (d) => yScale(d[1]))
    .attr("r", 5);

  let xAxis = d3.svg.axis()
    .scale(xScale)
    .orient("bottom")
    .ticks(5);

  svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(0," + (h - padding) + ")")
    .call(xAxis);





  d3.select('body')
    .append('button')
    .html('click to update')
    .on("click", () => {
      // updateData();
      updateDataWithTransition();
    });

  function updateDataWithTransition() {
    dataset = newData();

    let xScale = d3.scale.linear()
      .domain([ d3.min(dataset, (d) => d[0]), d3.max(dataset, (d) => d[0]) ])
      .range([ 0, w ]);

    let yScale = d3.scale.linear()
      .domain([ d3.min(dataset, (d) => d[1]), d3.max(dataset, (d) => d[1]) ])
      .range([ 0, h - padding ]);

    svg.selectAll("circle")
      .data(dataset)
      .transition()
      .attr("cx", (d) => xScale(d[0]))
      .attr("cy", (d) => yScale(d[1]))
      .attr("r", 5);

    xAxis = d3.svg.axis()
      .scale(xScale)
      .orient("bottom")
      .ticks(5);

    svg.select(".axis")
      .transition()
      .call(xAxis);
  }
}

function newData() {
  let distributions = [
    randomNumbers2d(500, 10000, 5000),
    gaussian2d(500, 10, 3),
    log2d(500, 10, 3),
    cauchy2d(500, 10, 3),
    rchisq2d(500, 5)
  ];
  let i = Math.floor(Math.random() * distributions.length);
  return distributions[i];
}