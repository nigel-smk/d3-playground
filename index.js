import style from './style.css'
import { outerHTML as diffOuterHTML } from 'diffhtml'
import { selectionDemo } from './demos/selections';
import { htmlBarChartDemo } from './demos/htmlBarChartDemo';
import { svgBarChartDemo } from './demos/svgBarChartDemo';
import { scaleDemo } from './demos/scaleDemo';
import { transitionsDemo } from './demos/transitionsDemo';

let demos = [
  selectionDemo,
  htmlBarChartDemo,
  svgBarChartDemo,
  scaleDemo,
  transitionsDemo
];

function registerDemo(func) {
  let nav = document.getElementById('nav');
  let newButton = document.createElement('button');
  newButton.addEventListener("click", function() {
    func();
  });
  let textNode = document.createTextNode(func.name);

  newButton.append(textNode);
  nav.append(newButton);
}

demos.forEach(registerDemo);



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