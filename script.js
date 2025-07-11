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

const frames = [
  ['.'],
  ['.', '|'],
  ['.', '|', '|'],
  ['.', '|', '|', '|'],
  ['.', '|', '\\|/', '|'],
  ['\\|/', '--O--', '/|\\', ' |', '/ \\']
];

let frameIndex = 0;
let lastUpdate = 0;
const lineHeight = 12;

function draw(timestamp) {
  if (timestamp - lastUpdate > 500) {
    lastUpdate = timestamp;
    frameIndex = (frameIndex + 1) % frames.length;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#fff';
  ctx.font = `${lineHeight}px Courier New`;

  const lines = frames[frameIndex];
  const totalHeight = lines.length * lineHeight;
  const startY = (canvas.height - totalHeight) / 2;

  lines.forEach((line, i) => {
    const textWidth = ctx.measureText(line).width;
    const x = (canvas.width - textWidth) / 2;
    const y = startY + i * lineHeight;
    ctx.fillText(line, x, y);
  });

  requestAnimationFrame(draw);
}
requestAnimationFrame(draw);
