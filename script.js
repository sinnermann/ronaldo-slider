const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeAciveClasses();
    panel.classList.add("active");
  });
});

function removeAciveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
