//On cible le canvas
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

// on crée un nouveau thread de calcul pour libérer le navigateur
const worker = new Worker("./worker.js");
worker.onmessage = (event) => {
  const colPixels = event.data;
  colPixels.forEach((pixel) => {
    const { row, col, color } = pixel;
    context.fillStyle = color;
    context.fillRect(col, row, 1, 1);
  });
};
//le nouveau thread n'ayant  pas accès au DOM, on utilise postMessage pour lui donner les informations requises.
worker.postMessage({ width: canvas.width, height: canvas.height });
