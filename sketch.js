/*Statement:

An optional interactive narrative, leave the choice to the audience 
whether they want to develp something or not. It is aim to be an entry
level of non liner interactive narrative. Where user can choose between
play, jump, and exit.

The story will develp depending on audiences' consious interaction. 

I am hoping through the interactions audiences will feel the transformation 
of courage gained from uncertainty as they will find interesting events happening as opposed to 
doing noting or exit. 

In a greater scale encourage leaving the interaction feeling empowered.  

*/

 var vid1,vid2,vid3,vid4;
 var i=0;
 var video=[];
 var videoplay;

 // var p;
 // var q;
 var complete;//playbar
 var playing = false;//playbar
 var capture;//video
 var flag1 = -1;
 var flag = [];
 var flag2=0;
 var k = 0;//element# of flag
 flag[k] = true;
 var c;// 
 
 var f = 0;//image saving
 var h = 0;
 
 function preload(){
  // vid1=createVideo('video/night1.mp4');
  // vid2=createVideo('video/night2.mp4');
  // vid3=createVideo('video/night3.mp4');
  // vid4=createVideo('video/night4.mp4');
  myFont = loadFont('font/Yugoslavia_script-demo-ffp.ttf');
   
 }
 
 
 
function setup() {
  c = createCanvas(windowWidth,windowHeight);
  vid1=createVideo('video/night1.mp4');
  vid2=createVideo('video/night2.mp4');
  vid3=createVideo('video/night3.mp4');
  vid4=createVideo('video/night4.mp4');
  vid1.loop();
  vid1.hide(); 
  capture = createCapture(VIDEO);
  capture.size(1000, 1000);
  capture.hide();
}

// var Video =function(vid,pos,size){
//   this.vid=vid;
//   this.pos=pos;
//   this.size=size;
// };

// Video.prototype.play = function(){
//   this.vid.size(this.size, this.size);
//   this.vid.position(this.pos.x,this.pos.y);
//   this.vid.play();
  
// };

// Video.prototype.pause = function(){
//   this.vid.pause();
// };

// Video.prototype.hide = function(){
//   this.vid.hide();
// };

// Video.prototype.show = function(){
//   this.vid.show();
// };


function draw() {
  
  background(255);
  // textFont('Helvetica');
    textFont('myFont');
  textSize(32);
  text('ToStayOrToGo?',830,600);
  // complete =vid1.time() / vid1.duration();
  // ellipse(complete*width, 20, 20, 20);
  blendMode(HARD_LIGHT);
  image(capture, 831, 100, 800, 600);//webcam
  filter('INVERT');
  image(capture, 0, 100, 800, 600)
  
  
  if(h===0)
  {
    vid4.pause();
    vid4.hide();
    vid1.play();
    vid1.show();
  image(vid1,0,100,800,600);
  }
  else if(h==1)
  {
    vid1.pause();
    vid1.hide();
    vid2.play();
    vid2.show(); 
  image(vid2,0,100,800,600);

  }
  else if(h==2)
  {
    vid2.pause();
    vid2.hide();
    vid3.play();
    vid3.show(); 
  image(vid3,0,100,800,600);

  }
    else 
  {
    vid3.pause();
    vid3.hide();
    vid4.play();
    vid4.show(); 
  image(vid4,0,100,800,600);
  }
}

function mousePressed()
{
  if (flag[k]===true)
  { saveCanvas(c, 'stayOgoUchoose'+f, 'jpeg');
  flag[k] = false;
  f++;
}
  h++;
  if(h>3)
  {
    h=0;
  }
}

  
function mouseReleased()
{
  k ++;
  flag[k] = true;
}







// var vid1;
// var vid2;
// var vid3;
// var vid4;
// var i=0;
// var video=[];
// var p;
// var q;
// var complete;//playbar
// var playing = false;//playbar
// var capture;//video
// var flag1 = -1;
// var flag = [];
// var k = 0;//element# of flag
// flag[k] = true;
// var c;// 
 
// var f = 0;//image saving
 
 
// function setup() {
//   c = createCanvas(600,600);
//   vid1=createVideo('video/night1.mp4');
//   // vid2=createVideo('video/night2.mp4');
//   // vid3=createVideo('video/night3.mp4');
//   // vid4=createVideo('video/night4.mp4');
//   capture = createCapture(VIDEO);
//   capture.size(320, 240);
//   capture.hide();
     
// /* vid2.size(600,600);
//   vid2.position(0);
//   vid1.size(600,600);
//   vid1.position(0);*/
  
// }

// var Video =function(vid,pos,size){
//   this.vid=vid;
//   this.pos=pos;
//   this.size=size;
// };

// Video.prototype.play = function(){
//   this.vid.size(this.size, this.size);
//   this.vid.position(this.pos.x,this.pos.y);
//   this.vid.play();
  
// };

// Video.prototype.pause = function(){
//   this.vid.pause();
// };

// Video.prototype.hide = function(){
//   this.vid.hide();
// };

// Video.prototype.show = function(){
//   this.vid.show();
// };


// function draw() {
  
//   background(255);
//   blendMode(HARD_LIGHT);
//   image(vid1,0,100);
//   // complete =vid1.time() / vid1.duration();
//   // ellipse(complete*width, 20, 20, 20);
//   image(capture, 0, 100, 600, 600);
//   filter('INVERT');
//   // loadpixel
// //   capture.loadPixels();
  
// // // video[flag1].loadPixels();
// //   for( var y=0 ; y < capture.height ;y++){
// //   for(var x=0; x < capture.width;x++){
// //     var wpxl =y * width + x;
// // //        var vpxl =y * width + x;
// //     // var darkness =255 - capture.pixels[i*4];
// //     // fill(darkness);
// //     // ellipse(x,y,10,10);
    
// //   }
// // }

// //   for( var y1=0 ; y1 < video[flag1].height;y1+=10){
// //   for(var x1=0; x1 < video[flag1].width;x1+=10){
// //     var vpxl =y1 * width + x1;
// //     // var darkness =255 - capture.pixels[i*4];
// //     // fill(darkness);
// //     // ellipse(x,y,10,10);
// //   }
// // }

//   }


// function mousePressed(){
  
//   if (flag[k]==true)
//   { saveCanvas(c, 'myCanvas'+f, 'jpg');
//   flag[k] = false;
//   f++;
// }

  
//   if(i===0){
//     video.push(new Video(vid1,createVector(0,0),600));
//     //video.push(new Video(vid1,createImage(50,50));
//     flag1++;
//     p=video[i];
//     p.play();
     
//   }
//   else if(i%3===0){
//     q=video[i-1];
//     video.push(new Video(vid2,createVector(0,0),600));
//     flag1++;
//     p=video[i];
//     q.pause();
//     q.hide();
//     p.play();
//     p.show();
//   }
//   else if(i%3===1){
//     q=video[i-1];
//     video.push(new Video(vid3,createVector(0,0),600));
//     flag1++;
//     p=video[i];
//     q.pause();
//     q.hide();
//     p.play();
//     p.show();
//   }
//   else{
//     q=video[i-1];
//     video.push(new Video(vid4,createVector(0,0),600));
//     flag1++;
//     p=video[i];
//     q.pause();
//     q.hide();
//     p.play();
//     p.show();
//   }

//   i++;
// }

// function mouseReleased()
// {
//   k ++;
//   flag[k] = true;
// }


// function mouse2() {
//   if (!playing) {
//     vid.play();
//     vid.time((mouseX/width) * vid.duration());
//     playing = true;
//   }
//   else {
//     vid.pause();
//     playing = false;
//   }
  
// }



// /* var video1;
// // var video2;
// // var video3;
// // var playing1 = false;
// // var playing2 = false;
// // var complete;
// // var cnv; 
// // var loadvideo1;

// // function setup() {
  
//   //createCanvas
  
//   // createCanvas(600,700);
//   // video1=createVideo('video/butterfly.MOV');
//   // video2=createVideo('video/dance.MOV');
//   // video3=createVideo('video/fog2.MOV')
//   // video2.size(600,600);
//   // video2.position(0);
//   // video1.size(600,600);
//   // video1.position(0);
  
//   // video1.play();
//   //video.loop();
//   //video.showControls();
//   //video.position(0,0);
  
//   // rect(0,,,0);
//   // fill(255,255,0);
//   // cnv.mouseClicked(changeVideo); 
//   // attach listener for // activity on canvas only 
// // }//end of setup

// // function draw() {
// //   background(0);
// //   complete =video2.time() / video2.duration();
// //   ellipse(complete*width, 20, 20, 20);
  
// // }//end of draw

// // function mousePressed()
// // {
// //     if(!playing1){
// //       video1.pause();
// //   video2.play();
// //   video2.time((mouseX/width) * video2.duration());
// //   playing1= true;
// // }
// // else{
// //   video2.pause();
// //   playing1 = false;
// //   video2.hide();
// //   video3.time((mouseX/width) * video3.duration());
// //   playing2= true;
// //   video3.play();
// // }

// // // function mousePressed() 
// // // {
// // //   if(!playing){
// // //   video1.play();
// // //   video1.time((mouseX/width) * video.duration());
// // //   playing= true;
// // // }
// // // else{
// // //   video1.pause();
// // //   playing = false;
// // //   video1.hide();
// // // video2.play();video2.time((mouseX/width) * video.duration());
  
// // // }

// // // }//end of mousePressed

// // // var video2;

// // // function changeVideo()
// // // {

// // // }

// // // function keyPressed()
// // // {
// // //   if(key==='A')
// // //   {
// // //     video1.show();
// // //     video1.play();
// // //     // video2.hide();
// // //     // video2.pause();
// // //   }

// // //   else if(key==='B')
// // //   {
// // //   video1.pause();
// // //   video1.hide();
// // //   video2.show();
// // //   video2.play();
// // //   } 
// // }//end of keyPressed
// */