const canvas1 = document.getElementById("staticCanvas")
const cntx = canvas1.getContext('2d');

cntx.fillStyle = 'darkBlue';
cntx.fillRect(200, 150, 300, 300);
cntx.fillStyle = 'green';
cntx.beginPath();
cntx.moveTo(200, 75);  // X then Y coordinates!!!!
cntx.lineTo(350,200);
cntx.lineTo(150,150);
cntx.lineTo(150,100);
cntx.lineTo(200, 75);  // closing the path!!!!
cntx.fill()

cntx.beginPath();
cntx.fillStyle = 'orange';
cntx.arc(475, 400, 100, 0, Math.PI*2/3, true)
cntx.fill()
cntx.closePath();

cntx.strokeStyle = "yellow";
cntx.font = "25px Arial, Helvetica, sams-serif";
cntx.textAlign = "center";
cntx.strokeText("Text on Canvas!", 300, 300);