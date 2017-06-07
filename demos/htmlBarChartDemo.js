export function htmlBarChartDemo() {

  // let dataset = [ 5, 10, 15, 20, 25 ];

  let dataset = [ 25, 7, 5, 26, 11, 8, 25, 14, 23, 19, 14, 11, 22, 29, 11, 13, 17, 18, 10, 24, 18, 25, 9, 3 ];

  d3.select('body')
    .selectAll('div')
    .data(dataset)
    .enter()
    .append('div')
    .attr('class', 'bar')
    .style('height', (d, i) => d * 5 + 'px');

}