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

## Html Bar Chart

- setting class and styles
- passing larger datasets

## Svg Bar Chart

- must work around svg quirks
- quick easy access to data points
- manual scaling is not fun

### Further Reading
[https://www.w3.org/Graphics/SVG/IG/resources/svgprimer.html](friendly SVG Primer by a member of the SVG Working Group)

## Transitions
- how do transitions work?


## Axes

- generates svg
