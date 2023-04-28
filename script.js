//your JS code here. If required.
const images = [
  { url: 'https://picsum.photos/200/300' },
  { url: 'https://picsum.photos/seed/picsum/200/300' },
  { url: 'https://picsum.photos/200/300?grayscale' },
  { url: 'https://picsum.photos/200/300/?blur' },
  { url: 'https://picsum.photos/200/300?random=1' }
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
