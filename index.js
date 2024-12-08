document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const zoomableImage = document.getElementById("zoomableImage");
    const closeBtn = document.querySelector(".close");
  
    // Add event listener to the image
    zoomableImage.addEventListener("click", function () {
      modal.style.display = "block";
      modalImage.src = this.src; // Set modal image source to the clicked image
    });
  
    // Close the modal when the user clicks the close button
    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });
  
    // Close the modal when clicking outside of the image
    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  