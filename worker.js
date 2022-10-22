//on récupère les informations du scrpit de la page html et on les réécrit pour le worker
onmessage = (event) => {
  //on précise que les infos recus dans le message sont width et height
  const { width, height } = event.data;
};
function preparedisplay(event) {
  for (let col = 0; col < event.width; col++) {
    for (let row = 0; row < event.height; row++) {
      const color = getRandomColor();
      //on envoie au script un message avec row, col et color
      postMessage({ row, col, color });
    }
  }
}
function getRandomColor() {
  const r = Math.floor(Math.random() * 128);
  const g = 0;
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}
