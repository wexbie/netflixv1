document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.language').addEventListener('change', function() {
    var selectedLanguage = this.value;
    if (selectedLanguage === 'İngilizce') {
      window.location.href = 'ingilizce.html';
    } else if (selectedLanguage === 'Turkish') {
      window.location.href = 'index.html';
    }
  });
});
const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const target = this.getAttribute("data-target");
    const targetSelector = `li[data-target="${target}"]`;
    const spanSelector = `span[data-target="${target}"]`;
    const li = document.querySelector(targetSelector);
    li.classList.toggle("hide");
    const span = document.querySelector(spanSelector);
    span.style.transition = 'transform 0.3s'
    if (span.style.transform == "rotate(45deg)") {
      span.style.transform = "rotate(0deg)"
    } else {
      span.style.transform = "rotate(45deg)"
    }
    const otherLis = document.querySelectorAll(
      `li[data-target]:not(${targetSelector})`
    );
    otherLis.forEach((otherLi) => {
      otherLi.classList.add("hide");
    });
    const otherSpans = document.querySelectorAll(
      `span[data-target]:not(${spanSelector})`
    );
    otherSpans.forEach((otherSpan) => {
      otherSpan.style.transform = "rotate(0deg)";
    });
  });
});
