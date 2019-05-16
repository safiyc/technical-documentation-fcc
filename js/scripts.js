let toggleCollapse = document.getElementsByClassName("headlines");
let collapseClass = document.getElementsByClassName("collapse_class");

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

window.addEventListener('resize', isResized);
window.onload = isResized;

// remove leading whitespaces from code block
// let codeBlock = document.getElementsByClassName("code_block");
// for (let i = 0; i < codeBlock.length; i++) {
//   codeBlock[i].textContent = codeBlock[i].textContent.replace(/^\s+/mg, "");
// }