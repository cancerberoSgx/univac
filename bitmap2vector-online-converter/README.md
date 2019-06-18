
[Playground](https://cancerberosgx.github.io/demos/svg-png-converter/playground//) (WIP)

## TODO :
- [ ] remove embedded example files and add them as static files.
- [ ] download current images and transformations as zip files. or store images in FS and put settings in url
- [ ] switch between output/input images so we can perform png=>svg=> png multiple times to see if degrades or improves. Also a mechanism to perform this N times.
- [ ] suggests users to use https://jakearchibald.github.io/svgomg/ after downloading since it really improves output size
 good results:
- [x] load images form external urls and remove most of the testing ones or request them

## Ideas

 * add Imagemagic to measure difference.

<!-- 


    "lazy-line-painter": "^1.9.6",


  function simulatePathDrawing(path) {
  // var path = document.querySelector('.squiggle-animated path');
  var length = path.getTotalLength();
  // Clear any previous transition
  path.style.transition = path.style.WebkitTransition =
  'none';
  // Set up the starting positions
  path.style.strokeDasharray = length + ' ' + length;
  path.style.strokeDashoffset = length;
  // Trigger a layout so styles are calculated & the browser
  // picks up the starting position before animating
  path.getBoundingClientRect();
  // Define our transition
  path.style.transition = path.style.WebkitTransition =
  'stroke-dashoffset 1.5s ease-in-out';
  // Go!
  path.style.strokeDashoffset = '0';
  path.style.strokeWidth = '3px';
  path.style.fill = 'rgba(255,255,0,.12)';
}

var chars = $('.squiggle-animated path').on('mouseover', function(e) {
  simulatePathDrawing(this)
})
 -->
