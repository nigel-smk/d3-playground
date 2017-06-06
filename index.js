import style from './style.css'
import { outerHTML as diffOuterHTML } from 'diffhtml'

const margin = {
  top: 10,
  right: 20,
  bottom: 20,
  left: 40
};

let data = [ 5, 10 , 15, 20, 25 ];

d3.select("body") // selects the body element jquery style
  // .selectAll("p") // selects all p in the body
  .data(data) // executes the following methods for each datum
  .enter() // executes the following methods only on unbound data
    // TODO how does update/enter/exit work? http://animateddata.co.uk/lab/d3enterexit/
  .append("p") //
  .text("New Paragraph");

// debugger;
let selection = d3.selectAll("p");
// TODO why is the selection nested? http://prcweb.co.uk/lab/selection