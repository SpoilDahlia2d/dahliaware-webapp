// Matrix effect
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let fuchsia = "#ff00ff";
let chars = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
chars = chars.split("");

let fontSize = 14;
let columns = canvas.width / fontSize;
let drops = Array.from({ length: columns }, () => 1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = fuchsia;
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    let text = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975)
      drops[i] = 0;
    drops[i]++;
  }
}

setInterval(drawMatrix, 33);

// Click logic
let imageList = [];
let clicked = false;

fetch('/get-images')
  .then(res => res.json())
  .then(data => imageList = data);

document.getElementById("click-button").addEventListener("click", () => {
  if (clicked) return;
  clicked = true;

  // Nascondi testi
  document.getElementById("click-button").style.display = "none";
  document.getElementById("obsession-text").style.display = "none";
  document.getElementById("ip-text").style.display = "none";

  // Avvia audio
  const audio = new Audio("/static/audio/audio.mp3");
  audio.play();

  // Raffica immagini
  let i = 0;
  function popImage() {
    const img = document.createElement("img");
    img.src = `/static/images/${imageList[i]}`;
    img.style.top = Math.random() * window.innerHeight + "px";
    img.style.left = Math.random() * window.innerWidth + "px";
    document.body.appendChild(img);

    i = (i + 1) % imageList.length;
    if (i !== 0) setTimeout(popImage, 150);
  }

  popImage();
});
