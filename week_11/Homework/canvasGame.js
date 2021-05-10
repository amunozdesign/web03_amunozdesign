const canvas2 = document.getElementById("myGame");
const ctx = canvas2.getContext('2d');


let cWidth = canvas2.width;
let cHeight = canvas2.height;

let cPosX = cWidth/2.5;
let cPosY = cHeight/5;

let cVelX = 3;
let cVelY = 2;
let cRadius = 75;
let colorPicker = "green";

let score = 0;
let scoreBoard = "YOUR SCORE"+ score;



function drawFrame(){
  ctx.clearRect(0, 0, cWidth, cHeight);
  ctx.fillStyle = colorPicker;
  ctx.strokeStyle = "darkorange";
  
  ctx.beginPath();
  ctx.arc(cPosX, cPosY, cRadius, 0, Math.PI*2);
  ctx.fill();
  ctx.stroke();
  ctx.strokeStyle = "darkBlue";
  ctx.font = "60px Arial, Helvetica, sams-serif";
  ctx.textAlign = "center";
  ctx.strokeText(scoreBoard, 920, 900);
  ctx.closePath();

  if(cPosX + cRadius >= cWidth || cPosX - cRadius <= 0) {
      cVelX = cVelX * -1; //reverse the horizontal directions

  }
  if(cPosY + cRadius >= cHeight  || cPosY - cRadius <= 0) {
    cVelY = cVelY * -1; //reverse the Vertical directions
  }

  cPosX = cPosX + cVelX;
  cPosY = cPosY + cVelY;

window.requestAnimationFrame(drawFrame);
}

drawFrame();

canvas2.addEventListener("click", function(event){
        //console.log(event);
        let mouseXp = event.pageX - event.target.offsetLeft;
        let mouseYp = event.pageY - event.target.offsetTop;

        //console.log("Mouse X: " + mouseXp + " Mouse Y: " + mouseYp);

        let distX = Math.abs(cPosX - mouseXp);
        let distY = Math.abs(cPosY - mouseYp);

        if(distX < cRadius & distY < cRadius) {
        

        cVelX = cVelX * 2;
        cVelY = cVelY * 2;
        }


})


