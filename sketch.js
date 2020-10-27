// You could have multiple flags like: start, launch to indicate the state of the game.
//var START;
//var LAUNCH;

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/

var engine, world
var canvas
var ground
var tankerbody1, tankerbody2, cannonmouth


function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
  var canvas = createCanvas(1200, 600)
  engine = Engine.create()
  world = engine.world

  ground = new Ground(600,height,1200,20)
  tankbody1 = new Tanker(110, 500, 145, 35)
  tankbody2 = new Tanker(110, 533, 145, 35)

  cannonmouth = new Cannon(115, 480, 60, 160, PI/2)
}

function draw() {
// Remember to update the Matter Engine and set the background.
  background(255)
  Engine.update(engine)
  

  fill ("black")
  circle(76, 570, 40)

  fill ("black")
  circle(150, 570, 40)

  
  ground.display();
  tankbody1.display()
  tankbody2.display()
  cannonmouth.display()

  
  

  

  

  //drawSprites()
}

