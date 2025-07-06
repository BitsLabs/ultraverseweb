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

const chars = ['.', ':', '-', '=', '+', '*', '#', '%', '@'];
function randomChar() {
  return chars[Math.floor(Math.random() * chars.length)];
}

function drawASCII() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#fff';
  ctx.font = '12px Courier New';

  const rows = Math.floor(canvas.height / 12);
  const cols = Math.floor(canvas.width / 8);
  const pattern = [];

  for (let y = 0; y < rows; y++) {
    let line = '';
    for (let x = 0; x < cols; x++) {
      const char = randomChar();
      line += char;
      ctx.fillText(char, x * 8, y * 12);
    }
    pattern.push(line);
  }
}

setInterval(drawASCII, 100);
