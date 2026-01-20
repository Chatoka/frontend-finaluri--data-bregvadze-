// burger menu
const burger = document.getElementById("burger");
const navMenu = document.getElementById("navMenu");

if (burger && navMenu) {
  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // gamosvla burger menudan linkze dacherit
  const navLinks = document.querySelectorAll(".nav-menu a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      burger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });

  // gamosvla burger menudan garet dacherit
  document.addEventListener("click", (e) => {
    if (!burger.contains(e.target) && !navMenu.contains(e.target)) {
      burger.classList.remove("active");
      navMenu.classList.remove("active");
    }
  });
}

// scroll to top
const scrollTopBtn = document.getElementById("scrollTop");

if (scrollTopBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add("visible");
    } else {
      scrollTopBtn.classList.remove("visible");
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
    });
  });
}

// cookies notification
const cookieBanner = document.getElementById("cookieBanner");
const acceptBtn = document.getElementById("acceptCookies");

// localstorage cookies
const cookiesAccepted = localStorage.getItem("cookiesAccepted");

if (!cookiesAccepted && cookieBanner) {
  setTimeout(() => {
    cookieBanner.classList.add("show");
  }, 1000);
}

if (acceptBtn) {
  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookiesAccepted", "true");
    cookieBanner.classList.remove("show");

    // "fade out" animation
    cookieBanner.style.animation = "slideDown 0.5s ease forwards";
    setTimeout(() => {
      cookieBanner.style.display = "none";
    }, 500);
  });
}
