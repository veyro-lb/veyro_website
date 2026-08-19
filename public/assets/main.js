(() => {
  "use strict";

  const motionScript = document.createElement("script");
  motionScript.src = "assets/motion-section.js?v=e3186f4";
  document.head.appendChild(motionScript);

  const header = document.querySelector("[data-header]");
  const menuButton = document.querySelector("[data-menu-toggle]");
  const navigation = document.querySelector("[data-nav]");

  const setHeaderState = () => {
    header?.classList.toggle("scrolled", window.scrollY > 16);
  };

  const closeMenu = () => {
    if (!menuButton || !navigation) return;
    menuButton.setAttribute("aria-expanded", "false");
    navigation.classList.remove("open");
    document.body.classList.remove("menu-open");
  };

  menuButton?.addEventListener("click", () => {
    const willOpen = menuButton.getAttribute("aria-expanded") !== "true";
    menuButton.setAttribute("aria-expanded", String(willOpen));
    navigation?.classList.toggle("open", willOpen);
    document.body.classList.toggle("menu-open", willOpen);
  });

  navigation?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1050) closeMenu();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
  window.addEventListener("scroll", setHeaderState, { passive: true });
  setHeaderState();

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -45px" });
    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  document.querySelectorAll("[data-accordion] button").forEach((button) => {
    button.addEventListener("click", () => {
      const controls = button.getAttribute("aria-controls");
      const answer = controls ? document.getElementById(controls) : null;
      const expanded = button.getAttribute("aria-expanded") === "true";

      document.querySelectorAll("[data-accordion] button").forEach((otherButton) => {
        const otherId = otherButton.getAttribute("aria-controls");
        const otherAnswer = otherId ? document.getElementById(otherId) : null;
        otherButton.setAttribute("aria-expanded", "false");
        if (otherAnswer) otherAnswer.hidden = true;
      });

      if (!expanded && answer) {
        button.setAttribute("aria-expanded", "true");
        answer.hidden = false;
      }
    });
  });

  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });
})();
