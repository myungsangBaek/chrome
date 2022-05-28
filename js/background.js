const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const backgroundImage = document.createElement("img");

backgroundImage.src = `img/${chosenImage}`;

console.log(backgroundImage);

document.body.appendChild(backgroundImage);
