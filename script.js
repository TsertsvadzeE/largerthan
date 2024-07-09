document.getElementById("navbar-toggle").addEventListener("click", function () {
  document.getElementById("navbar-list").style.display = "flex";
  document.getElementById("navbar-toggle").style.display = "none";
  document.getElementById("navbar").style.flexDirection = "column";
});

window.addEventListener("resize", function () {
  if (window.matchMedia("(min-width: 801px)").matches) {
    document.getElementById("navbar").style.flexDirection = "row";
  }
});
