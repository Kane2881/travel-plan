const navLists = document.querySelector(".nav-lists");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visibility = navLists.getAttribute("data-visible");

  if (visibility === "false") {
    navLists.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else if (visibility === "true") {
    navLists.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});
