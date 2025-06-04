
// Matrix effect
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const chars = '01';
const fontSize = 18;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#0f0';
  ctx.font = `${fontSize}px monospace`;

  drops.forEach((y, i) => {
    const text = chars[Math.floor(Math.random() * chars.length)];
    const x = i * fontSize;
    ctx.fillText(text, x, y * fontSize);

    drops[i] = y * fontSize > canvas.height && Math.random() > 0.975 ? 0 : y + 1;
  });
}

setInterval(drawMatrix, 50);

// Click logic
const button = document.getElementById("click-button");
const counter = document.getElementById("counter");
const imageContainer = document.getElementById("imageContainer");
const audio = document.getElementById("dahliaAudio");

let clickCount = 0;
let images = [];

fetch('/images')
  .then(res => res.json())
  .then(data => {
    images = data.images;
  });

button.addEventListener("click", () => {
  audio.play();

  const img = document.createElement("img");
  const src = images[Math.floor(Math.random() * images.length)];
  img.src = src;
  img.style.top = Math.random() * (window.innerHeight - 250) + "px";
  img.style.left = Math.random() * (window.innerWidth - 250) + "px";
  imageContainer.appendChild(img);

  clickCount++;
  counter.textContent = clickCount;
});
