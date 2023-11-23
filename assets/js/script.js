const featuresLink = document.querySelector(".features");
const featuresContainer = document.querySelector(".features-container");

featuresLink.addEventListener("hover", () => {
  featuresContainer.style.visibility = "visible";
});
