const featuresLink = document.querySelector("#features");
const featuresContainer = document.querySelector(".features-container");
const nav = document.querySelector(".nav");

featuresLink.addEventListener("click", () => {
  toggleFeaturesContainer();
});

const toggleFeaturesContainer = () => {
  if (featuresContainer.style.visibility == "visible") {
    featuresContainer.style.visibility = "hidden";
    nav.style.height = "100px";
  } else {
    featuresContainer.style.visibility = "visible";
    nav.style.height = "auto";
  }
};
