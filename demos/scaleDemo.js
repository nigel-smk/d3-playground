export function scaleDemo() {

  // let dataset = [ 5, 10, 15, 20, 25 ];
  let dataset = [ 25, 7, 5, 26, 11, 8, 25, 14, 23, 19, 14, 11, 22, 29, 11, 13, 17, 18, 10, 24, 18, 25, 9, 3 ];

  let scale = d3.scale.linear();
  // defaults to 1-1
  console.log('1-1 scale');
  console.log(scale(2.5));

  scale.domain([100, 500]);
  scale.range([10, 350]);

  // generated scale
  console.log('scale(100)');
  console.log(scale(100));
  console.log('scale(300)');
  console.log(scale(300));
  console.log('scale(500)');
  console.log(scale(500));

  debugger;

  let w = 500;
  let h = 100;
  let barPadding = 2;

  let xScale = d3.scale.linear()
    .domain([0, dataset.length])
    .range([0, w]);

  let yScale = d3.scale.linear()
    .domain([0, d3.max(dataset)])
    .range([0, h]);

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
    .attr('fill', (d) => "rgb(0, 0, " + (d * 10) + ")");

}