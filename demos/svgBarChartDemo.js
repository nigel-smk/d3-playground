export function svgBarChartDemo() {

  //let dataset = [ 5, 10, 15, 20, 25 ];
  let dataset = [ 25, 7, 5, 26, 11, 8, 25, 14, 23, 19, 14, 11, 22, 29, 11, 13, 17, 18, 10, 24, 18, 25, 9, 3 ];

  let w = 500;
  let h = 100;

  /** Create the svg element and keep a reference */
  let svg = d3.select('body').append('svg');

  svg.attr('width', w)
    .attr('height', h);

  // svg.selectAll('rect')
  //   .data(dataset)
  //   .enter()
  //   .append('rect')
  //   .attr('x', 0)
  //   .attr('y', 0)
  //   .attr('width', 20)
  //   .attr('height', 100);

  // svg.selectAll('rect')
  //   .data(dataset)
  //   .enter()
  //   .append('rect')
  //   .attr('x', (d, i) => i * 21 )
  //   .attr('y', 0)
  //   .attr('width', 20)
  //   .attr('height', (d) => d * 5);

  // svg.selectAll('rect')
  //   .data(dataset)
  //   .enter()
  //   .append('rect')
  //   .attr('x', (d, i) => i * 21 )
  //   .attr('y', (d) => h - (d * 5))
  //   .attr('width', 20)
  //   .attr('height', (d) => d * 5);

  svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('x', (d, i) => i * 21 )
    .attr('y', (d) => h - (d * 5))
    .attr('width', 20)
    .attr('height', (d) => d * 5)
    .attr('fill', (d) => "rgb(0, 0, " + (d * 10) + ")");
}