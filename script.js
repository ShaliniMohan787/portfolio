// 🔥 Smooth Scroll
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});


// 🔥 Active Navbar Highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});


// 🔥 Navbar background change on scroll
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(15, 23, 42, 0.95)";
  } else {
    navbar.style.background = "rgba(15, 23, 42, 0.8)";
  }
});


// 🔥 Reveal Animation on Scroll
const revealElements = document.querySelectorAll(".glass-card, .skill-box");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);


// 🔥 Typing Effect (Hero Section)
const text = "Full Stack Developer & Cybersecurity Enthusiast";
let index = 0;

function typeEffect() {
  const element = document.querySelector(".lead");
  if (index < text.length) {
    element.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 40);
  }
}

window.onload = () => {
  document.querySelector(".lead").textContent = "";
  typeEffect();
};