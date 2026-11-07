const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

const nav = $("#nav");
const burger = $("#burger");
const menu = $("#menu");
const progress = $("#progress");
const toTop = $("#toTop");
const hero = $(".hero");
const timeline = $(".timeline");

// Preloader
window.addEventListener("load", () => {
  setTimeout(() => $("#preloader").classList.add("hide"), 900);
});

// Scroll: navbar, progress bar, back-to-top, hero parallax, timeline fill
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", scrollY > 40);

  const h = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = (scrollY / h) * 100 + "%";
  toTop.classList.toggle("show", scrollY > 600);

  if (scrollY < innerHeight) {
    hero.style.backgroundPositionY = `calc(50% + ${scrollY * 0.25}px)`;
  }

  const r = timeline.getBoundingClientRect();
  const p = Math.min(1, Math.max(0, (innerHeight * 0.6 - r.top) / r.height));
  timeline.style.setProperty("--fill", p * 100 + "%");
});
toTop.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));

// Mobile menu
burger.addEventListener("click", () => menu.classList.toggle("open"));
menu.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => menu.classList.remove("open"))
);

// Scroll reveal
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("show");
        revealObserver.unobserve(e.target);
      }
    });
  },
  { threshold: 0.15 }
);
$$(".reveal").forEach((el) => revealObserver.observe(el));

// Counters
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = +el.dataset.count;
      let n = 0;
      const step = Math.max(1, Math.ceil(target / 50));
      const t = setInterval(() => {
        n += step;
        if (n >= target) { n = target; clearInterval(t); }
        el.textContent = n + "+";
      }, 35);
      counterObserver.unobserve(el);
    });
  },
  { threshold: 0.5 }
);
$$("[data-count]").forEach((el) => counterObserver.observe(el));

// Cursor glow (smooth follow)
const glow = $("#glow");
let gx = 0, gy = 0, mx = 0, my = 0;
addEventListener("mousemove", (e) => { mx = e.clientX; my = e.clientY; });
(function follow() {
  gx += (mx - gx) * 0.12;
  gy += (my - gy) * 0.12;
  glow.style.left = gx + "px";
  glow.style.top = gy + "px";
  requestAnimationFrame(follow);
})();

// Typing roles in hero (edit the words here)
const roles = ["Entrepreneur", "Content Creator", "Chairman, ST Group", "Mentor", "Fitness Enthusiast"];
const typed = $("#typed");
let ri = 0, ci = 0, deleting = false;
(function type() {
  const word = roles[ri];
  typed.textContent = word.slice(0, ci);
  if (!deleting && ci === word.length) { deleting = true; return setTimeout(type, 1400); }
  if (deleting && ci === 0) { deleting = false; ri = (ri + 1) % roles.length; }
  ci += deleting ? -1 : 1;
  setTimeout(type, deleting ? 40 : 90);
})();

// Company tabs
$$(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    $$(".tab, .panel").forEach((el) => el.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

// 3D tilt on cards and awards
$$(".card, .award").forEach((el) => {
  el.addEventListener("mousemove", (e) => {
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(700px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-6px)`;
  });
  el.addEventListener("mouseleave", () => (el.style.transform = ""));
});

// Magnetic buttons
$$(".btn, .btn-small").forEach((b) => {
  b.addEventListener("mousemove", (e) => {
    const r = b.getBoundingClientRect();
    b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px, ${(e.clientY - r.top - r.height / 2) * 0.25}px)`;
  });
  b.addEventListener("mouseleave", () => (b.style.transform = ""));
});

// Lightbox (click any award or photo to zoom)
const lb = $("#lightbox");
const lbImg = lb.querySelector("img");
$$(".award img, .award-photos img, .card-img").forEach((img) => {
  img.addEventListener("click", () => { lbImg.src = img.src; lb.classList.add("open"); });
});
lb.addEventListener("click", () => lb.classList.remove("open"));
addEventListener("keydown", (e) => { if (e.key === "Escape") lb.classList.remove("open"); });

// Contact form -> WhatsApp
$("#contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = new FormData(e.target);
  const text =
    `Hello Swapniil,\n\n` +
    `Name: ${f.get("name")}\n` +
    `Email: ${f.get("email")}\n` +
    `Phone: ${f.get("phone") || "-"}\n\n` +
    `${f.get("message")}`;
  window.open("https://wa.me/919967253567?text=" + encodeURIComponent(text), "_blank");
  e.target.reset();
});

// Footer year
$("#year").textContent = new Date().getFullYear();