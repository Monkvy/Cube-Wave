var cnv
let angle = 0;
let w = 24;
let constAngle;
let maxD;

function setup()
{
  cnv = createCanvas(500, 500, WEBGL);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  maxD = dist(0, 0, 200, 200);
}

function draw()
{
  background(0);
  ortho(-400, 400, -400, 400, 0, 700);
  //translate(0, 0, -400);
  
  rotateX(-PI/6);
  rotateY(0.75);
  
  for (let z = 0; z < height; z += w) {
    for (let x = 0; x < width; x += w) {
      push();
      let d = dist(x, z, width/2, height/2);
      let offset = map(d, 0, maxD, -PI, PI);
      let a = angle + offset;
      let h = map(sin(a), -1, 1, 100, 300);
      
      translate(x - width/2, 0, z - height/2);
      normalMaterial();
      box(w-2, h, w-2);

      pop();
    }
  }
  
  angle -= 0.1;
}