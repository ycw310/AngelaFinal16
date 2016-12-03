/*
Interactive story. <<Feel courage by knowing vulnerable.>>
//idea for Connection: Vulnerary
At a coffee shop because A forgots house keys. A wanted to ask a the neighbor coffee shop for help but is afraid of rejection.
A can choose three actions "act like regular customer" "ask for phone to connect to roomate B" "event3" //need to think of events for interaction
Seeing: Miro, abstract unpredictable, vulnerable. //draw the painting but the painting is unpredicatable. after completion, she gets the key for door
/monk/ :how scary are you,  what will you do if you are not afriad? (text/pic/color)/or interactive, draw and the pic appears on the other side. 
// realizing the pattern and ask the question. finish the drawing, then she can ask the question. 
//before figuring out the pattern cant not ask the question. 
*/  

var img;
var imgU;
 
function preload()
{
  img= loadImage('assets/background.JPG');
  imgU=loadImage('assets/you.png');
  imgm1=loadImage('assets/1.png');
  imgm2=loadImage('assets/3.png');
}

function setup() 
{
  createCanvas(windowWidth, windowHeight);
  
  //test code below
   //textAlign(CENTER);
  sel = createSelect();
  sel.position(400, 600);
  sel.option('can I borrow your phone?');
  sel.option('small hot americano, please');
  sel.option('I forget my wallet');
  sel.changed(mySelectEvent);
}//end of setup

function draw()
{
  background(img);
  image(imgU,100,300,300,600);//x,y,w,h
  image(imgm1,-200,-50,800,800);
  image(imgm2,100,80,300,500);
  
  // if(mouseIsPressed)
  //   camera.zoom = .5;
  // else
  //   camera.zoom = 1;
  // console.log(1);
}//end of draw

//test code below, event selections 
var sel;
function mySelectEvent() {
  var item = sel.value();
  text("it's a "+item+"!", 400, 200);
}