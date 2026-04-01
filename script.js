const roles = [
  "Cloud enginner",
  "Cloud Architect",
  "Cloud Developer",
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const textElement = document.getElementById("changing-text");

function typeEffect() {
  const currentRole = roles[roleIndex];
  
  if (!isDeleting) {
    // Typing
    textElement.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentRole.length) {
      setTimeout(() => isDeleting = true, 1000); // Pause before deleting
    }
  } else {
    // Deleting
    textElement.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();


//jvadhih//
/* ===== PROGRESS BAR ANIMATION FIX ===== */

const progressSection = document.querySelector(".skill-progress-section");
const progressBars = document.querySelectorAll(".progress-fill");

let progressAnimated = false;

function animateProgress() {
  const rect = progressSection.getBoundingClientRect();

  if(rect.top < window.innerHeight - 100 && !progressAnimated){

    progressAnimated = true;
  }
}

window.addEventListener("scroll", animateProgress);

const btn = document.getElementById("viewMoreBtn");
const more = document.getElementById("moreCertificates");

if(btn && more){
  btn.addEventListener("click", () => {
    if (more.style.display === "grid") {
  more.style.display = "none";
  btn.innerText = "View More";
} else {
  more.style.display = "grid"; // 🔥 FIXED
  btn.innerText = "View Less";
}
  });
}
