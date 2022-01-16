var sheesh_sound = new Audio('assets/sheesh.wav');
var hard_sound = new Audio('assets/hard.wav');

let img;
let assetsFolder = [];
let emojiFolder = [];
var pics = ['doge.png', 'amogus.jfif', 'chica.png', 'dream.png', 'fortnite.png', 'fred.png', 'mem.png', 'nike.png', 'obama.jpg', 'peter.png', 'sans.png', 'sonic.png', 'squid.jpg', 'thanos.png', 'tiktok.png', 'woody.png', 'Yankee-wit-no-brim.png']
var emojis = ['drippy.png', 'fiery.png', 'icy.png']
var picsChoices = [];
function preload() {
  pics.forEach((pic,i) => {
    img = loadImage('assets/SHEESH/' + pic);
    assetsFolder.push(img)
  })
  emojis.forEach((pic,i) => {
    img = loadImage('assets/SHEESH/emoji/' + pic);
    emojiFolder.push(img)
  })
  picsChoices = [assetsFolder, emojiFolder]
}

var sound, sound2;
sound = sheesh_sound;
sound.volume = 1
sound2 = hard_sound
sound2.volume = 0.07
function play_audio(){
  if (sound.paused){
    sound.play();
    sound2.play();

    activate()
  } 

}
function vanish_button(){
  if (!sound.paused){
    document.getElementById("button_div").style.display = "none";
  } else {
    document.getElementById("button_div").style.display = "block";
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  noStroke()
}

function draw(){
  img_draw()
  vanish_button()
}

let Images = function (position, angle, size_x) {
  let choice = picsChoices[Math.floor(Math.random()*(picsChoices.length))]
  this.position = position
  this.angle = angle
  this.angle_speed = random(0.02, 0.07)
  this.angle_direction = random([-1,1])
  this.image = choice[Math.floor(Math.random()*(choice.length))]
  this.size = createVector(size_x,this.image.height*size_x/this.image.width)
  this.position.y += this.size.y
  this.speed = createVector(0, 0)
  //console.log(this.size.x, this.size.y, this.image.width, this.image.height, (this.image.height/this.image.width)*size_y)
  this.draw = function () {
    this.position.y += this.speed.y
    if (this.position.y < 0 - (this.size.y / 2)) { //add item height / 2 to windowHeight
      if (sound.paused){
        this.speed.y = 0
      }
      this.position.y = windowHeight + this.size.y
    }
    push()
    translate(this.position.x, this.position.y)
    rotate(this.angle)
    imageMode(CENTER)
    image(this.image,0,0,this.size.x, this.size.y);
    this.angle += this.angle_speed * this.angle_direction
    pop()
  }
}


