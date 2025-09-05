(function(){
  'use strict';
  console.log('READING JS');

  // --- Run only on index.html (when project tiles exist)
  if (document.querySelector('#project0')) {
    const go = (id, url) => {
      const el = document.querySelector(id);
      if (el) el.addEventListener('click', () => window.location.href = url);
    };

    go('#project0', 'postpage4.html');
    go('#project1', 'postpage3.html');
    go('#project2', 'postpage9.html');
    go('#project6', 'postpage5.html');
    go('#project7', 'postpage2.html');
    go('#project8', 'postpage1.html');
    go('#post11', 'post11.html');
    go('#post10', 'post10.html');
    go('#about-navbar', 'about.html');
    go('#contact-navbar', 'contact.html');


  }

  // --- Run only on post pages (when .top links exist)
  if (document.querySelector('.top')) {
    document.addEventListener("DOMContentLoaded", () => {
      if (!(window.gsap && window.ScrollTrigger)) {
        console.error("GSAP not loaded");
        return;
      }

      gsap.registerPlugin(ScrollTrigger);

      gsap.utils.toArray(".top").forEach(topLink => {
        const section = topLink.closest("section");

        gsap.fromTo(topLink,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "bottom 80%",   // when bottom of section is near bottom of viewport
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    });
  }

// Highlight active nav link on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#postnav ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});


  // --- Index page animations
if (document.querySelector('#about')) {
  document.addEventListener("DOMContentLoaded", () => {
    if (!window.gsap) {
      console.error("GSAP not loaded on index.html");
      return;
    }

    // animate header elements
    gsap.from("header img", {
      y: -40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    });

    gsap.from("header h1", {
      y: -20,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.2
    });

    gsap.from(".contact-button", {
      y: -20,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.4
    });

    // animate about section (image + text)
    gsap.from("#container", {
      x: -60,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#about",
        start: "top 80%"
      }
    });

    gsap.from("#aboutTitle h2", {
      x: 60,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#aboutTitle h2",
        start: "top 85%"
      }
    });

    // Animate fill across the entire about section
gsap.to(".about-fill", {
  scaleX: 1,
  duration: 1.3,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#about",
    start: "top 80%"  // begins when about section scrolls into view
  }
});

    gsap.from("#aboutTitle p", {
      x: 60,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.1,
      scrollTrigger: {
        trigger: "#aboutTitle p",
        start: "top 85%"
      }
    });

    // animate project cards with stagger
    gsap.from(".project", {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".projects",
        start: "top 85%"
      }
    });
  });
}

// Animate #postnav on load
if (document.querySelector("#postnav") && window.gsap) {
  document.addEventListener("DOMContentLoaded", () => {
    const navTl = gsap.timeline({ defaults: { ease: "power3.out" } });

    navTl.from("#postnav", { 
      y: -50, 
      opacity: 0, 
      duration: 1 
    })
    .from("#postnav ul li", { 
      y: -20, 
      opacity: 0, 
      stagger: 0.15, 
      duration: 0.5 
    }, "-=0.6");
  });
}


}());
