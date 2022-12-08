function setup() {
  // put setup code here
  var width = 800;
  var height = 850;
  createCanvas(windowWidth, windowHeight);
  background('skyblue');
}



function draw() {
  // put drawing code here

  if(mouseIsPressed === true){
    fill('yellow');
    stroke('orange');
    
    
    triangle(mouseX, mouseY,91, 73, 75, 95, 59, 73);
    
  }
  else{
    fill('orange');
    stroke('yellow');
    
    triangle(mouseX, mouseY,91, 73, 75, 95, 59, 73);
    
  }

}
