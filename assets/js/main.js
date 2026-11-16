(() => {
  "use strict";

  const toggle = document.querySelector(".nav-toggle");
  const navigation = document.querySelector(".site-nav");

  if (!toggle || !navigation) {
    return;
  }

  const desktopQuery = window.matchMedia("(min-width: 801px)");

  const setMenuState = (isOpen, { returnFocus = false } = {}) => {
    toggle.setAttribute("aria-expanded", String(isOpen));
    navigation.classList.toggle("is-open", isOpen);
    document.body.classList.toggle("menu-open", isOpen);

    if (returnFocus) {
      toggle.focus();
    }
  };

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    setMenuState(!isOpen);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      setMenuState(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setMenuState(false, { returnFocus: true });
    }
  });

  const resetForDesktop = (event) => {
    if (event.matches) {
      setMenuState(false);
    }
  };

  if (typeof desktopQuery.addEventListener === "function") {
    desktopQuery.addEventListener("change", resetForDesktop);
  } else {
    desktopQuery.addListener(resetForDesktop);
  }
})();
