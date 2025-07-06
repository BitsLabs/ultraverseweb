const canvas = document.getElementById('ascii-art');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  if (window.innerWidth <= 600) {
    canvas.width = window.innerWidth;
    const textHeight = document.querySelector('.text-block').offsetHeight;
    canvas.height = window.innerHeight - textHeight;
  } else {
    canvas.width = window.innerWidth * 0.6;
    canvas.height = window.innerHeight;
  }
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const chars = ['.', ':', '-', '=', '+', '*', '#', '%', '@'];
let time = 0;

function drawWave() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#fff';
  ctx.font = '12px Courier New';

  const rows = Math.floor(canvas.height / 12);
  const cols = Math.floor(canvas.width / 8);

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const index = Math.floor((Math.sin(time + (x + y) / 4) + 1) / 2 * (chars.length - 1));
      const char = chars[index];
      const yPos = y * 12 + Math.sin(time + x / 3) * 6;
      ctx.fillText(char, x * 8, yPos);
    }
  }

  // Slow down the animation a bit for a smoother effect
  time += 0.05;
  requestAnimationFrame(drawWave);
}

requestAnimationFrame(drawWave);
