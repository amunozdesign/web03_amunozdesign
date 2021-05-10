const canvas2 = document.getElementById("myGame");
const ctx = canvas2.getContext('2d');


let cWidth = canvas2.width;
let cHeight = canvas2.height;

let cPosX = cWidth/2.5;
let cPosY = cHeight/5;

let cVelX = 3;
let cVelY = 2;
let cRadius = 75;
let colorPicker = "red";

let sc0re = 0;
let scoreBoard = "YOUR SCORE" + sc0re;



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

jscolor.presets.default = {
  palette: [
    '#000000', '#7d7d7d', '#870014', '#ec1c23', '#ff7e26', '#fef100', '#22b14b', '#00a1e7', '#3f47cc', '#a349a4',
    '#ffffff', '#c3c3c3', '#b87957', '#feaec9', '#ffc80d', '#eee3af', '#b5e61d', '#99d9ea', '#7092be', '#c8bfe7',
  ],
  //paletteCols: 12,
  //hideOnPaletteClick: true,
  //width: 271,
  //height: 151,
  //position: 'right',
  //previewPosition: 'right',
  //backgroundColor: 'rgba(51,51,51,1)', controlBorderColor: 'rgba(153,153,153,1)', buttonColor: 'rgba(240,240,240,1)',
}
