// navbar:
const toggle = document.querySelector(".toggle")
const navmenu = document.querySelector(".navmenu")

toggle.addEventListener("click", () => {
    navmenu.classList.toggle("visible");
});

// popup:
function toggle() {
  let blur = document.getElementById("blur");
  blur.classList.toggle("active");
  let popup = document.getElementById("popup");
  popup.classList.toggle("active");
}
