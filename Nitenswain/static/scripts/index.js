// Navbar Sticky on Scroll
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    const offset = 60; // Adjust this value as needed

    window.scrollTo({
      top: targetSection.offsetTop - offset,
      behavior: "smooth",
    });
  });
});

// Function to show project demo (Placeholder)
function showProjectDemo(projectId) {
  alert("Showing Project " + projectId + " Demo!");
}
