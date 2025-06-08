const canvas = document.getElementById("bg-icons");
const ctx = canvas.getContext("2d");

let width, height;
let icons = [];

const emojis = ["💡", "🌈", "🧠", "🎨", "💻", "🚀"];
const size = 24;

function resizeCanvas() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function createIcons(count) {
  icons = [];
  for (let i = 0; i < count; i++) {
    icons.push({
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      x: random(0, width),
      y: random(0, height),
      dx: random(-0.5, 0.5),
      dy: random(0.2, 1),
      fontSize: random(16, 32)
    });
  }
}

function animate() {
  ctx.clearRect(0, 0, width, height);
  icons.forEach(icon => {
    ctx.font = `${icon.fontSize}px serif`;
    ctx.fillText(icon.emoji, icon.x, icon.y);

    icon.x += icon.dx;
    icon.y += icon.dy;

    if (icon.y > height) {
      icon.y = -size;
      icon.x = random(0, width);
    }
  });
  requestAnimationFrame(animate);
}

window.addEventListener("resize", () => {
  resizeCanvas();
  createIcons(40);
});

resizeCanvas();
createIcons(40);
animate();
