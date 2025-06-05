// Matrix Effect
const canvas = document.getElementById("matrix-canvas");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "DAHLIA0123456789";
const fontSize = 16;
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
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}
setInterval(drawMatrix, 33);

// POPUP IMAGES
let i = 0;

function popImage() {
  const img = document.createElement("img");
  img.src = `/static/images/${imageList[i]}`;
  img.style.top = Math.random() * (window.innerHeight - 100) + "px";
  img.style.left = Math.random() * (window.innerWidth - 100) + "px";
  document.body.appendChild(img);

  i = (i + 1) % imageList.length;
  setTimeout(popImage, 2500); // 2.5 secondi
}

// CLICK LOGIC
document.getElementById("click-button").addEventListener("click", () => {
  document.getElementById("click-button").style.display = "none";
  document.getElementById("sub-text").style.display = "none";
  document.getElementById("ip-text").style.display = "none";
  document.getElementById("audio").play();
  popImage();
});

