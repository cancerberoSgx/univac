// require the library will define a primitive `global`
require('primitive')
declare const primitive: any
let image = 'test.jpg'
let cfg = primitive.DefaultConfig()
cfg.shapeTypes = [primitive.ShapeMap.Bezier, primitive.ShapeMap.Rectangle, primitive.ShapeMap.Triangle, primitive.ShapeMap.Ellipse, primitive.ShapeMap.Heart, primitive.ShapeMap.Line]
cfg.shapes = 500
primitive.Pure(image, cfg).then(function(ori: any) {
  let optimizer = new primitive.Optimizer(ori, cfg)
  let dst = primitive.Canvas.empty(cfg)
  // select element to append the canvas to
  document.querySelector("#result")!.innerHTML = ""
  document.querySelector("#result")!.appendChild(dst.node)
  // draw on dst.node canvas on each step
  optimizer.onStep = function(step: any) {
    console.log('onStep', step)
    dst.drawStep(step)
  }
  // drawing finished
  optimizer.onEnd = function(state: any) {
    console.log('onEnd', state)
  }
  optimizer.start()
})
