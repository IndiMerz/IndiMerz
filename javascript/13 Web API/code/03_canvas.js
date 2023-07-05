const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

// Draw Rectangle
ctx.fillStyle = 'blue';
ctx.fillRect(10, 20, 130, 70);

// Draw Circle
ctx.fillStyle = 'green';
ctx.arc(300, 300, 50, 0, Math.PI * 2)
ctx.fill();

// Draw lines
ctx.beginPath();
ctx.strokeStyle = 'black';
ctx.moveTo(10, 20);
ctx.lineTo(300, 300);
ctx.lineWidth = 4;
ctx.stroke();


// Draw Text
ctx.font = '25px Times New Roman';
ctx.fillStyle = 'red';
ctx.fillText('Text on Canvas', 400, 150, 100);

// Draw Stroke Text
ctx.font = '40px Cursive';
ctx.lineWidth = 2;
ctx.strokeStyle = 'pink'
ctx.strokeText('Stroke Text', 200, 400, 100);


// Draw Image
const image = document.getElementById('football');
image.style.display = 'none';

image.addEventListener('load', () => ctx.drawImage(image, 200, 250, 100, 100));
