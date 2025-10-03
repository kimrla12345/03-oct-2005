
let huntGif;


function setup() {
  
  createCanvas(windowWidth, windowHeight);
  background(230); 
  
 
  textAlign(CENTER);
  textSize(20);
  fill(50);
  text("Click the screen", width / 2, height / 2);
}


function mousePressed() {
  
  if (!huntGif) {
  
    background(230); 
    
   
    huntGif = createImg('hunt.gif', 'hunting animation gif');
    
    let imgWidth = huntGif.width;
    let imgHeight = huntGif.height;
    huntGif.position(width / 4 - imgWidth / 4, height / 4 - imgHeight / 4);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}