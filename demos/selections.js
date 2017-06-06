export function selectionDemo() {
  let data = [ 5, 10 , 15, 20, 25 ];
  debugger;

  /** Select the body element **/
  let bodySelection = d3.select("body"); // selects the body element jquery style
  console.log('Body Selection:');
  console.log(bodySelection);
  debugger;

  /** Select p elements within the selected body element **/
  let pSelection = bodySelection.selectAll("p"); // selects all p in the body
  console.log('Paragraph Selection:');
  console.log(pSelection);
  debugger;

  let boundSelection = pSelection.data(data); // executes the following methods for each datum
  console.log('Data Bound Selection:');
  console.log(boundSelection);
  debugger;

  let enterSelection = boundSelection.enter(); // executes the following methods only on unbound data
  console.log('Enter Selection:');
  console.log(enterSelection);
  debugger;

  let appendSelection = enterSelection.append("p");
  console.log("Append Selection: ");
  console.log(appendSelection);
  debugger;

  let textSelection = appendSelection.text("New Paragraph");
  console.log('Text Selection: ');
  console.log(textSelection);
  debugger;

  data = [ 5, 15, 25 ];

  let exitSelection = d3.select('body')
    .selectAll('p')
    .data(data)
    .exit()
    .remove();
  console.log('Exit Selection: ');
  console.log(exitSelection);
  debugger;

  d3.select('body')
    .selectAll('p')
    .data(data)
    .text(function(d, i) {
      return "I am the " + i + "th paragraph and my data is " + d;
    });
  debugger;
}