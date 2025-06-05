const btn = document.getElementById("clickBtn");
const textBox = document.getElementById("main-text");
const audio = document.getElementById("audio");
const container = document.getElementById("image-container");

btn.addEventListener("click", () => {
  textBox.style.display = "none";
  audio.play();

  const extensions = ['.jpg', '.jpeg', '.png', '.gif'];
  const count = 30;

  let i = 0;
  const spawnImage = () => {
    const img = document.createElement("img");
    const ext = extensions[i % extensions.length];
    img.src = `/static/images/${i}${ext}`;
    img.style.left = Math.random() * window.innerWidth + "px";
    container.appendChild(img);
    i = (i + 1) % count;
    if (i < count) setTimeout(spawnImage, 100);
  };

  spawnImage();
});

// Matrix effect
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "01D4HLI".split("");
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "fuchsia";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975)
      drops[i] = 0;

    drops[i]++;
  }
}
setInterval(drawMatrix, 33);
