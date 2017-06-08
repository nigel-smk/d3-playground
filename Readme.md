# D3 PowerHour

## Opening Slide
- what is D3?
  - js library for data visualizations
  - fine grained control of html, svg, (and now canvas)
- what are some alternatives?
  - Highchart.js
  - charts.js
  - trading more complex dev for more control
- lets look at some cool visualizations

## D(-3)
- prefuse
  - java based
- flare
  - flash (actionscript)
- protovis
  - by Bostock
    - New York Times
  - Jeff Heer
  - Vadim Ogievetsky
  - all from Stanford University's Stanford Visualization Group
  - more abstracted (working with 'marks' like bars or wedges)
  - no longer in development
 - D3 
 
 ## Data
 - arrays
 - data loading helpers
 
 ## Selections
 - jquery style
 - update, enter, exit
 - run demo
  - selecting an existing element (update)
    - nested array (mention grouping)
    - subclass of array
    - standard HTMLDomElements
  - selecting from an existing selection (update)
    - parentNode
      - useful for grouping
      - selecting nothing?
  - binding data
    - same selection, except the array is of length 5 (undefined)
    - has defined enter() and exit()
  - enter selection
    - these are the elements in the data, but not in the DOM
    - array is filled with objects
    - still no DOM elements
    - __data__ values have been assigned
      - key of data matched to key of element (currently index)
  - append
    - empty objects have been swapped out for domElements
    - the data is still there, in the domElements
      - it is bound!
    - after next continue, note the paragraphs have appeared
  - text
    - now manipulating the dom elements more traitionally
  - exit
    - only defined elements are those that are being removed
  - actually use the data
  - note the chaining
  
  - open up the references

## Html Bar Chart

- look at the code
  - note the css styling
- run the demo
  - voila!
- passing larger datasets
-  note the multiplication of the height. Trouble.
- **open next demo before slide next**

## Svg Bar Chart

- now we're cooking with fire!
- first run
  - predefine the width and height of svg
    - note resizing issue
  - its upside down!
    - go to slide, explain coords
- second run 
  - in this case we must do some math to find the appropriate x
  - D3 is at the mercy of svg spec, you must work around it
- third run
  - more data == wider chart
  - we can use the data in many places like css

## Scales

- **slide first**
- look at code
  - scale created at 1-1
  - define domain
  - define range
- demo run (will debug)
  - see the scaling!
- **back to code**
 - lets scale our bar chart
  - scale max
- final note: the SVG primer is by a member of the SVG Working Group

## Transitions
- **code**
- randomNumber generator
- domain based on dataset
- also created scale for colors
- appending button for some action
  - note the event listener
- first just update data
  - yScale must be redefined
  - colorscale must be redefined
  - an update selection is made with new data
    - new data is bound
    - relevant attributes must be modified
- then update data with transition
- transitions use keyframe animations
  - takes current setting and maps to given setting
  - you can take more fine-grained control of the animation process
  - note that animations will get interrupted if run in sequence
    - can be queued

## Axes
- more advanced random number generator
  - randomly chooses random distributions
- using d3.min because the data has an undefined domain
- padding is for bottom of svg
- we are making a scatterplot

- making the axis
  - pass in the scale
    - so the function knows the range of values
  - pass in the orientation (where will the ticks go)
  - pass in the ticks
    - how many ticks do you want on your axis
      - d3 will tune this decision for you
  - a function is generated

- creating the axis
  - 'g' is an svg group
  - look at the css briefly
  - "call" calls a function, passing in the selection
- test without transform
- then with transform


## Axes

- generates svg
