const hamburger = document.querySelector(".hamburger");
const navbarMenu = document.querySelector(".nav-menu");

if (hamburger && navbarMenu) {
  hamburger.addEventListener("click", () => {
    const isOpen = navbarMenu.classList.toggle("active");

    if (isOpen) {
      hamburger.style.display = "none"; // hide hamburger when menu opens
    } else {
      hamburger.style.display = "block"; // show again if toggled closed
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const aboutSection = document.querySelector("#about");
  const testimonialsSection = document.querySelector("#testimonials");

  if (!navbar || !aboutSection || !testimonialsSection) return;

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.4,
  };

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.target.id === "about") {
        if (entry.isIntersecting) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      }

      if (entry.target.id === "testimonials") {
        if (entry.isIntersecting) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      }
    });
  };

  const observer = new IntersectionObserver(
    handleIntersection,
    observerOptions
  );
  observer.observe(aboutSection);
  observer.observe(testimonialsSection);
});

const mainSection = document.querySelector(".main");
if (mainSection && window.location.pathname.includes("services.html")) {
  mainSection.style.backgroundImage = "none";
  mainSection.style.backgroundColor = "#fffff";
}

const manSection = document.querySelector(".main");
if (mainSection && window.location.pathname.includes("menu.html")) {
  mainSection.style.backgroundImage = "none";
  mainSection.style.backgroundColor = "#d0e3c4";
}

if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".reveal-up-left").forEach((item, index) => {
    gsap.from(item, {
      x: -50,
      opacity: 0,
      duration: 0.4, // faster animation
      delay: index * 0.1, // less delay between items
      ease: "power3.out",
      scrollTrigger: {
        trigger: item,
        start: "top 95%", // triggers earlier (almost as soon as it enters viewport)
        toggleActions: "play none none reverse",
      },
    });
  });

  gsap.utils.toArray(".reveal-up-right").forEach((item, index) => {
    gsap.from(item, {
      x: 50,
      opacity: 0,
      duration: 0.4,
      delay: index * 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: item,
        start: "top 95%",
        toggleActions: "play none none reverse",
      },
    });
  });
}

document.querySelectorAll(".count").forEach((countEl) => {
  let triggered = false;
  ScrollTrigger.create({
    trigger: countEl,
    start: "top 90%",
    once: true,
    onEnter: () => {
      if (triggered) return;
      triggered = true;
      gsap.fromTo(
        countEl,
        { innerText: 0 },
        {
          innerText: countEl.getAttribute("data-target"),
          duration: 2,
          ease: "power1.out",
          snap: { innerText: 1 },
          onUpdate: function () {
            countEl.innerText = Math.floor(countEl.innerText);
          },
        }
      );
    },
  });
});
gsap.registerPlugin(ScrollTrigger);

gsap.from(".crew-card", {
  scrollTrigger: {
    trigger: ".team-section",
    start: "top 80%",
  },
  opacity: 0,
  y: 60,
  rotation: 2,
  duration: 1,
  stagger: 0.2,
  ease: "power3.out",
});
gsap.from(".hero-text", {
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 0.2,
  ease: "power2.out",
});

gsap.from(".hero-image img", {
  scale: 0.9,
  opacity: 0,
  duration: 1.2,
  delay: 0.4,
  ease: "power2.out",
});
// ...existing code...
