var sky = document.getElementsByClassName('myCanv');
var ctx = sky[0].getContext('2d');

var skyGrd = ctx.createLinearGradient(0, 0, 0, 350);
skyGrd.addColorStop(0, 'blue');
skyGrd.addColorStop(1, 'white');

ctx.fillStyle = skyGrd;
ctx.fillRect(0, 0, 500, 350);

var grassGrd = ctx.createLinearGradient(0, 0, 0, 650);
grassGrd.addColorStop(0, 'green');
grassGrd.addColorStop(1, 'white');

ctx.fillStyle = grassGrd;
ctx.fillRect(0, 350, 500, 350);

ctx.beginPath();
ctx.moveTo(75,40);
ctx.bezierCurveTo(75,37,70,25,50,25);
ctx.bezierCurveTo(20,25,20,62.5,20,62.5);
ctx.bezierCurveTo(20,80,40,102,75,120);
ctx.bezierCurveTo(110,102,130,80,130,62.5);
ctx.bezierCurveTo(130,62.5,130,25,100,25);
ctx.bezierCurveTo(85,25,75,37,75,40);
ctx.fillStyle = "red";
ctx.fill();

ctx.beginPath();
ctx.arc(400,60, 45, 0.25*Math.PI, 1.25*Math.PI,false);
ctx.fillStyle = 'yellow';
ctx.fill();

ctx.beginPath();
ctx.arc(400,60, 45, 0.75*Math.PI, 1.75*Math.PI,false);
ctx.fillStyle = 'yellow';
ctx.fill();

ctx.beginPath();
ctx.rect(135, 190, 230, 160);
ctx.fillStyle= 'gray';
ctx.fill();

ctx.beginPath();
ctx.moveTo(250,100);
ctx.lineTo(400,200);
ctx.lineTo(100,200);
ctx.fillStyle ='rgb(77, 77, 77)';
ctx.fill();

ctx.beginPath();
ctx.rect(165, 230, 70, 80);
ctx.fillStyle= 'white';
ctx.fill();

ctx.beginPath();
ctx.strokeRect(160, 225, 80, 90);
ctx.fillStyle = 'black';
ctx.fill();


