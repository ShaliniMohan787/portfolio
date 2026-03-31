// =========================
// SMOOTH SCROLL (ONLY INTERNAL LINKS)
// =========================
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    const href = this.getAttribute('href');

    // Only scroll if it's an internal section link
    if (href.startsWith("#")) {
      e.preventDefault();

      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    }
  });
});


// =========================
// ACTIVE NAVBAR LINK
// =========================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    const href = link.getAttribute("href");
    if (href === "#" + current) {
      link.classList.add("active");
    }
  });
});


// =========================
// NAVBAR BACKGROUND ON SCROLL
// =========================
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(15, 23, 42, 0.95)";
  } else {
    navbar.style.background = "rgba(15, 23, 42, 0.7)";
  }
});


// =========================
// REVEAL ANIMATION ON SCROLL
// =========================
const revealElements = document.querySelectorAll(".glass-card, .skill-box");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < triggerBottom) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);


// =========================
// TYPING EFFECT (HERO)
// =========================
const text = "Full Stack Developer & Cybersecurity Enthusiast";
let index = 0;

function typeEffect() {
  const element = document.querySelector(".lead");

  if (!element) return;

  if (index < text.length) {
    element.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 40);
  }
}


// =========================
// CURSOR GLOW EFFECT (OPTIONAL 🔥)
// =========================
document.addEventListener("mousemove", e => {
  const glow = document.createElement("div");
  glow.className = "cursor-glow";

  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";

  document.body.appendChild(glow);

  setTimeout(() => glow.remove(), 300);
});


// =========================
// INITIAL LOAD
// =========================
window.addEventListener("load", () => {
  const element = document.querySelector(".lead");

  if (element) {
    element.textContent = "";
    typeEffect();
  }

  // Trigger reveal once on load
  revealOnScroll();
});
