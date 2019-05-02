let toggleCollapse = document.getElementsByClassName("headlines");

let collapseClass = document.getElementsByClassName("collapse_class");

window.addEventListener('resize', isResized);

function isResized() {

  if (window.innerWidth > 768) {
    for (let i = 0; i < toggleCollapse.length; i++) {
      toggleCollapse[i].removeAttribute("data-toggle");
      collapseClass[i].classList.add("show");
    }
  } else {
    for (let i = 0; i < toggleCollapse.length; i++) {
      toggleCollapse[i].setAttribute("data-toggle", "collapse");
      collapseClass[i].classList.remove("show");
    }
  }
}

window.onload = isResized;