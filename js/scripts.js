let toggleCollapse = document.getElementsByClassName("headlines");

let collapseClass = document.getElementsByClassName("collapse_class");

// if (screen.width <= 768) {
//   console.log("small screen")
// }

window.addEventListener('resize', resize);

function resize() {
  if (window.innerWidth > 768) {
    for (let i = 0; i < toggleCollapse.length; i++) {
      toggleCollapse[i].removeAttribute("data-toggle");
      collapseClass[i].setAttribute("class", "show");
    }
  } else {
    for (let i = 0; i < toggleCollapse.length; i++) {
      toggleCollapse[i].setAttribute("data-toggle", "collapse");
      collapseClass[i].removeAttribute("class", "show");
    }
  }
}