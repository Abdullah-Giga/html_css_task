const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .buttons a");

window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((a) => {
    a.classList.remove("active_link");
    if (a.classList.contains(current)) {
      a.classList.add("active_link");
    }
  });
};

navLi.onclick = () => {
    
} 








$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 300) {
      $(".navbar").addClass("active");
    } else {
      $(".navbar").removeClass("active");
    }
  });
});
