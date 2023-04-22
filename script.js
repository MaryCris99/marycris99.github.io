const images = document.querySelectorAll(".slider img");
let currentImageIndex = 0;

function showNextImage() {
  images[currentImageIndex].classList.remove("active");
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].classList.add("active");
}

setInterval(showNextImage, 5000);


const tagSelect = document.getElementById("tag-select");
const tagInfo = document.getElementById("tag-info");

tagSelect.addEventListener("change", function() {
  const selectedTag = tagSelect.value;
  let info;

  switch (selectedTag) {
    case "h1":
      info = "<h1>Heading 1</h1>";
      break;
    case "p":
      info = "<p>Paragraph</p>";
      break;
    case "a":
      info = "<a href='#'>Link</a>";
      break;
    case "img":
      info = "<img src='image.jpg' alt='Image'>";
      break;
    case "div":
      info = "<div>Container</div>";
      break;
    default:
      info = "";
  }

  tagInfo.innerHTML = info;
});


/*Main page footer*/
/// Get the current year
const currentYear = new Date().getFullYear();

// Set the copyright footer text
const copyrightFooter = document.getElementById("copyright");
copyrightFooter.textContent = `© ${currentYear} My Website`;


