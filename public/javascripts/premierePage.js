// Fonction pour dessiner l'image sur le canvas
function drawImageOnCanvas(canvas, image) {
    let ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    return ctx.getImageData(0, 0, canvas.width, canvas.height);
}
// Fonction pour modifier un pixel
function modifyPixel(imageData, x, y, r, g, b, a) {
    let index = (y * imageData.width + x) * 4;
    let data = imageData.data;
    data[index] = r;
    data[index + 1] = g;
    data[index + 2] = b;
    data[index + 3] = a;
}
// Attendre que l'image soit chargée
document.getElementById('myImage').onload = function() {
    var image = this;
    // Dessiner l'image originale
    var canvasOriginal = document.getElementById('myCanvasOriginal');
    var imageDataOriginal = drawImageOnCanvas(canvasOriginal, image);
    // Modifier un pixel
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    var imageData = drawImageOnCanvas(canvas, image);
    modifyPixel(imageData, 30, 30, 255, 0, 0, 255);
    ctx.putImageData(imageData, 0, 0);
    // Modifier une région de 20x20 pixels
    var canvas20pixel = document.getElementById('myCanvas20pixel');
    var ctx20pixel = canvas20pixel.getContext('2d');
    var imageData20pixel = drawImageOnCanvas(canvas20pixel, image);
    for (let x = 120; x <  120 + 20; x++) {
        for (let y = 120; y < 120 + 20; y++) {
            modifyPixel(imageData20pixel, x, y, 0, 255, 0, 255);
        }
    }
    ctx20pixel.putImageData(imageData20pixel, 0, 0);
};

// Charger l'image
document.getElementById('myImage').src = './images/img.png';