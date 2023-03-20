let imgs = [];

function preload() {
  for (let i = 7; i <= 31; i++) {
    let img = loadImage(i + ".png");
    imgs.push(img);
  }
}

function setup() {
  let canvas = createCanvas(800, 800);
  canvas.center('horizontal');
  frameRate(0.5);
}

function draw() {
  background(0);
  
  // Choisissez une image aléatoire
  let img = random(imgs);
  
  // Parcourir chaque ligne
  for (let y_cover = 200; y_cover < height-50; y_cover+=10) {
    noFill();
    beginShape();
    
    noiseSeed(y_cover); 
    
    // Parcourir chaque pixel de la ligne
    for (var x = 0; x < width; x++) {
      var nx = map(x, 0, width, 0, 8);
      var z = map(x, 0, width, -2, 2);
      z = exp(-z*z);
      var y = -z*200 * noise(nx);
      
      // Récupérer la couleur du pixel correspondant sur l'image
      let c = img.get(x, y + y_cover);
      
      // Utiliser cette couleur pour dessiner le pixel de la ligne
      stroke(c);
      strokeWeight(2);
      point(x, y+y_cover);
    }
    endShape();
  }
}
