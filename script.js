const panels = Array.from(document.querySelectorAll(".panel"));

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    panel.classList.add("open");
    panel.classList.add("open-active");
  });
});
