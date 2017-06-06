import style from './style.css'
import { outerHTML as diffOuterHTML } from 'diffhtml'
import { selectionDemo } from './demos/selections';

function registerDemo(id, func) {
  document.getElementById(id).addEventListener("click", function() {
    func();
  })
}

registerDemo("selections", selectionDemo);

// let pSelection = bodySelection.selectAll("p"); // selects all p in the body
// console.log('Paragraph Selection:');
// console.log(pSelection);
// debugger;

// TODO how does update/enter/exit work? http://animateddata.co.uk/lab/d3enterexit/
// selections extend arrays: https://bost.ocks.org/mike/selection/#subclass
// TODO why is the selection nested? http://prcweb.co.uk/lab/selection
// use modern web standards to build glorious data visualizations
// TODO why do we need to select the body first? https://bost.ocks.org/mike/selection/#group


// Gotchas
// markup written in JS
// Angular