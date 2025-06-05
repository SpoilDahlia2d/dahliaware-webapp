let imageList = [];
let hasStarted = false;

fetch('/get-images')
  .then(res => res.json())
  .then(data => {
    imageList = data;
  });

document.getElementById("click-button").addEventListener("click", () => {
  if (hasStarted || imageList.length === 0) return;
  hasStarted = true;

  // Nasconde testi
  document.getElementById("click-button").style.display = "none";
  document.getElementById("obsession-text").style.display = "none";
  document.getElementById("ip-text").style.display = "none";

  // Avvia audio
  const audio = new Audio("/static/audio/dahlia.mp3");
  audio.play();

  // Avvia raffica immagini
  let i = 0;
  function spawnImage() {
    const img = document.createElement("img");
    img.src = `/static/images/${imageList[i]}`;
    img.style.position = "absolute";
    img.style.left = Math.random() * window.innerWidth + "px";
    img.style.top = Math.random() * window.innerHeight + "px";
    img.style.width = "150px";
    img.style.zIndex = 100;
    document.body.appendChild(img);

    i = (i + 1) % imageList.length;
    if (i !== 0) {
      setTimeout(spawnImage, 150); // tempo tra immagini
    }
  }

  spawnImage();
});
