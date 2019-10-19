<canvas id='c'></canvas>

<script>

var c = document.getElementById('c').getContext('2d')   
var x = 300        // initial pipe position  
var my=96          // mario y   
var speed=0        // accelaration   
var t=200          // initial box position   
var a=0            // black outline of the floor  
var k=0            // begining of floor  
var g=400          // gap   
var speed = 0;     // acceleration   
var z=90            // cloud position   
var go = false;    // game over
var score=0        // counting the score  
window.onclick=jump 
   
function jump()
   { if(my>=96) speed = -3.5
       
if(window.onclick) 
      {score=score + 1;}
   }
   
draw()
   
function draw(){

c.fillStyle = 'Skyblue'
   
c.fillRect(0,0,300,150)      
c.fillStyle = 'Deeppink'   
c.fillRect(x,100,30,50)   
c.fillRect(x-10,80,50,20)
    
    
x = x - 1                       // move pipe left
    
if (x == -50)   x = 300         // if off screen left move to right side
    
   
for (var a=0+k; a<350+k; a+=25) { 
        
c.fillStyle = 'brown'; 
        
c.fillRect(a,125,25,25); 
        
c.strokeRect(a,125,25,25);  }           
    
k = k - 1; 
     
if (k == -25) k = 0; 
     
     
//gap
     
c.fillStyle = 'Skyblue'; 
     
c.fillRect(g,124,25,26); 
     
g = g - 1; 
     
if (g == -25) g = 350; 
    
//box
     
c.fillStyle = 'gold'; 
     
c.fillRect(t,55,25,26); 
     
t = t - 1; 
     
if (t == -50) t = 300;
   
   
//mario
   
var mario=new Image()
   
mario.src = "http://i66.tinypic.com/2e3tvsj.gif"
c.drawImage(mario,50,my)
    
if (my < 95 || speed < 0)  
 {
        my = my + speed;
        
speed = speed + 0.1;    }
   
    
// fall
    
// 50 mx - 8 (16(mario width / 2) = 42  right hand side
    
// 50 mx + (25 gap - (16(mario width / 2) = 67 left hand side
    
if (g > 42 && g < 67 && my >= 95 && my < 122)    my += 1.25;
    
   
console.log(my);
   
   
if(x==64 && my>=96 || my > 122)
  {   go = true;
        
c.fillStyle = 'Crimson';
        
c.font="30px Arial";
        
alert ("Scorul tau este de " + score + " puncte")
        
c.fillText("Te-ai fraierit!",75,75);
    }
     
//cloud
    var image = new Image()
    
image.src = "http://pixelartmaker.com/art/f8b25473724bd5a.png"
    
//c.clearRect(0,0,300,150)
    
c.drawImage(image,z,15,65,65)
    
z=z-1;
    
if(z== -50) z=300;
    
if (go == false)    requestAnimationFrame(draw);
   }

</script>