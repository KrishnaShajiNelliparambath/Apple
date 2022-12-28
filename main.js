sheight=0;
screenwidth=0;
apple="";
speak_data="";
to_number=0;
x = 0;
y = 0;

draw_apple = "";
function preload(){
  apple=loadImage("apple.png")
}
var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {
 console.log(event); 

 content = event.results[0][0].transcript;
 document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

to_number=Number(content);
if(Number.isInteger(to_number)){
  document.getElementById("status").innerHTML = "Started drawing apple " ;
  draw_apple="set"
}
else{
  document.getElementById("status").innerHTML = "The speach has not recognized as a number"; 
}
   
}

function setup() {
 screenwidth=window.innerWidth;
 sheight=window.innerHeight;

 canvas=createCanvas(screenwidth,sheight-150);
 canvas.position(0,150);
}

function draw() {
  if(draw_apple == "set")
  {
    for(var i=1;i<=to_number;i++){
     x=Math.floor(Math.random()*700)
     y=Math.floor(Math.random()*400)
     image(apple,x,y,50,50)
    }
   
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    speak()
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
