// Récupération des différents éléments
const screenshotBtn = document.querySelector(".screenshot__btn");
const captureElement = document.querySelector(".container__capture");

// Ecoute de l'événement click sur le bouton
screenshotBtn.addEventListener("click", () => {
  html2canvas(captureElement).then(function (c) {
    const url = c.toDataURL();
    // Création d'un élément HTML a
    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", url);
    linkElement.setAttribute("download", "capture.png");
    linkElement.click();
    linkElement.remove();
  });
});
