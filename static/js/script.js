document.getElementById("clickButton").addEventListener("click", () => {
  const audio = document.getElementById("audio");
  audio.play();

  // Richiesta per ottenere l'elenco immagini
  fetch("/images")
    .then(res => res.json())
    .then(imageList => {
      imageList.forEach((imgSrc, index) => {
        setTimeout(() => {
          const img = document.createElement("img");
          img.src = imgSrc;
          img.style.top = Math.random() * window.innerHeight + "px";
          img.style.left = Math.random() * window.innerWidth + "px";
          img.style.zIndex = 100;
          document.getElementById("imageContainer").appendChild(img);
        }, index * 300); // ritardo tra immagini
      });
    });
});
