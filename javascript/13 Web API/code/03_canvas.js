const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

// Draw Rectangle
ctx.fillStyle = 'blue';
ctx.fillRect(10, 20, 30, 70);

// Draw Circle
ctx.fillStyle = 'green';
ctx.arc(300, 300, 100, 0, Math.PI * 2)
ctx.fillStyle();