//your JS code here. If required.
const images = [
   { url: "https://via.placeholder.com/150", alt: "Placeholder Image 1" },
   { url: "https://via.placeholder.com/200", alt: "Placeholder Image 2" },
   { url: "https://via.placeholder.com/250", alt: "Placeholder Image 3" },
   { url: "https://via.placeholder.com/300", alt: "Placeholder Image 4" },
   { url: "https://via.placeholder.com/350", alt: "Placeholder Image 5" },
];

const downloadImages = () => {
   const promises = [];

   images.forEach((image) => {
      const promise = new Promise((resolve, reject) => {
         const img = new Image();
         img.onload = () => resolve(img);
         img.onerror = () => reject(new Error(`Failed to load image's URL: ${image.url}`));
         img.src = image.url;
      });
      promises.push(promise);
   });

   Promise.all(promises)
      .then((images) => {
         const output = document.getElementById("output");
         images.forEach((img) => output.appendChild(img));
      })
      .catch((error) => console.log(error));
};

const downloadImagesButton = document.getElementById("download-images-button");
downloadImagesButton.addEventListener("click", downloadImages);
