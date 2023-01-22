document.querySelector('#copyright-year').innerText = new Date().getFullYear();

let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('ani-on');
      entry.target.classList.add('ani-on-testi');
    } else {
      entry.target.classList.remove('ani-on');
      entry.target.classList.remove('ani-on-testi');
    }
  });
});

const hiddenElements = document.querySelectorAll('.ani-off');
hiddenElements.forEach((el) => observer.observe(el));

const hiddenElements2 = document.querySelectorAll('.ani-off-testi');
hiddenElements2.forEach((el) => observer.observe(el));