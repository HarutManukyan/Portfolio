// JavaScript for smooth scroll behavior
document.querySelectorAll("#about-link").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.getElementById("about");

    target.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// JavaScript for smooth scroll behavior
document.querySelectorAll("#skills-link").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.getElementById("skills");

    target.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// JavaScript for smooth scroll behavior
document.querySelectorAll("#projects-link").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.getElementById("projects");

    target.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// JavaScript for smooth scroll behavior
document.querySelectorAll("#contact-link").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.getElementById("contact");

    target.scrollIntoView({
      behavior: "smooth",
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.getElementById("burger-menu");
  const burgerList = document.getElementById("burger-list");

  if (burgerMenu && burgerList) {
    burgerMenu.addEventListener("click", function () {
      burgerList.classList.toggle("show");
    });
  } else {
    console.error(
      'One or both of the elements with ID "burger-menu" and "header-list" not found.'
    );
  }
});
