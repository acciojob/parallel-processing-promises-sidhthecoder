//your JS code here. If required.
const images = [
  { url: 'https://picsum.photos/200/300' },
  { url: 'https://picsum.photos/seed/picsum/200/300' },
  { url: 'https://picsum.photos/200/300?grayscale' },
  { url: 'https://picsum.photos/200/300/?blur' },
  { url: 'https://picsum.photos/200/300?random=1' }
];
// Function to download the images and show them on the webpage
function downloadAndShowImages() {
  const promises = images.map(image => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        resolve(img);
      };
      img.onerror = () => {
        reject(new Error(`Failed to load image's URL: ${image.url}`));
      };
      img.src = image.url;
    });
  });

  Promise.all(promises)
    .then(images => {
      const outputDiv = document.getElementById('output');
      images.forEach(img => {
        outputDiv.appendChild(img);
      });
    })
    .catch(error => {
      console.error(error);
    });
}

// Attach the downloadAndShowImages() function to the button click event
const downloadButton = document.getElementById('download-images-button');
downloadButton.addEventListener('click', downloadAndShowImages);
