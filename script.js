const canvas = document.getElementById('ascii-art');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  if (window.innerWidth <= 600) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 0.5;
  } else {
    canvas.width = window.innerWidth * 0.6;
    canvas.height = window.innerHeight;
  }
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

let offset = 0;

function drawWave() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = 2;
  ctx.beginPath();
  const amplitude = canvas.height / 4;
  const frequency = 0.02;
  for (let x = 0; x <= canvas.width; x++) {
    const y = canvas.height / 2 + Math.sin(x * frequency + offset) * amplitude;
    ctx.lineTo(x, y);
  }
  ctx.stroke();
  offset += 0.05;
  requestAnimationFrame(drawWave);
}

requestAnimationFrame(drawWave);
