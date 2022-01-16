const binCount = 69 // change to have more images drawn
let assets = new Array(binCount);

function positionAssets() {
  // takes array of particles
  // puts the 'tickle' in par-tickle
  for (let i = 0; i < assets.length; i++) {
    let size_x = random(100,200)
    let x = map(i, 0, binCount, 0, width * 2) // expands the particles to fit your screen using p5.map
    let y = random(windowHeight, windowHeight*2)
    let position = createVector(x, y)
    let angle = random(1,360)
    let partickle = new Images(position, angle, size_x) // make random image=ish
    assets[i] = partickle
  }
  
}
function img_draw(){
  if (!sound.paused){
    background(240,248,255); // change bg while playing (240,248,255)
  } else{
    background(255,255,255); // change bg while not playing
  }
  assets.forEach((bin, i) => {
    assets[i].draw()
  })
}
function activate(){
  positionAssets()
  assets.forEach((bin, i) => {
    assets[i].speed.y = -16 //change y speed (if speed is positive, you have to change a lot of things on positionAssets and .draw) -10
  })
}