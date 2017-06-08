export function layoutsDemo() {

  var dataset = {
    nodes: [
      { name: "Nigel" },
      { name: "Matt" }, //1
      { name: "Everson" },
      { name: "Danny" },
      { name: "Pizarro" }, //4
      { name: "Pat" },
      { name: "Taylor Swift" },
      { name: "Chris" }, //7
      { name: "Ted" },
      { name: "Nik" }
    ],
    edges: [
      { source: 2, target: 4 },
      { source: 4, target: 5 },
      { source: 5, target: 6 },
      { source: 6, target: 7 },
      { source: 7, target: 2 },
      { source: 2, target: 6 },
      { source: 0, target: 2 },
      { source: 1, target: 9 },
      { source: 1, target: 6 },
      { source: 3, target: 8 },
      { source: 8, target: 9 }
    ]
  }

  let w = 600;
  let h = 400;

  let colors = d3.scale.category20();

  let svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

  let force = d3.layout.force()
    .nodes(dataset.nodes)
    .links(dataset.edges)
    .size([w, h])
    .linkDistance([100])
    .charge([-200])
    .start();

  let edges = svg.selectAll("line")
    .data(dataset.edges)
    .enter()
    .append("line")
    .style("stroke", "#ccc")
    .style("stroke-width", 1);

  let nodes = svg.selectAll("text")
    .data(dataset.nodes)
    .enter()
    .append("text")
    .attr("text-anchor", "middle")
    .style("fill", (d, i) => {
      return colors(i);
    })
    .text((d) => d.name)
    .call(force.drag);

  force.on("tick", () => {

    edges
      .attr("x1", (d) => d.source.x )
      .attr("y1", (d) => d.source.y )
      .attr("x2", (d) => d.target.x )
      .attr("y2", (d) => d.target.y );

    nodes
      .attr("x", (d) => d.x )
      .attr("y", (d) => d.y );

  });
}