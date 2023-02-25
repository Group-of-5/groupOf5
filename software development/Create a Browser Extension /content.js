// content.js

// This function toggles the display style of all images between 'none' and 'block'
function toggleImages() {
  const images = document.getElementsByTagName("img");
  for (let i = 0; i < images.length; i++) {
    const displayStyle = images[i].style.display;
    images[i].style.display = displayStyle === "none" ? "block" : "none";
  }
}

// When the extension receives a message, toggle the images
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "hideImages" || request.action === "showImages") {
    toggleImages();
  }
});
