document.addEventListener("DOMContentLoaded", function () {
  var next = document.querySelector(".chapter-pagination .next");
  if (next && next.getAttribute("href") === "chapter-21.html") {
    next.setAttribute("href", "references.html");
    next.textContent = "Sources & References →";
  }
  document.querySelectorAll('a[href="chapter-21.html"],a[href="chapter-22.html"]').forEach(function (a) {
    a.remove();
  });
  document.querySelectorAll(".eyebrow").forEach(function (el) {
    el.textContent = el.textContent.replace("OF 22", "OF 20");
  });
});