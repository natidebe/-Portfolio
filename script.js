/* =========================================================
   Projects: edit this list to add / change your work.
   Images live in assets/img/. The first image is the cover.
   ========================================================= */
const PROJECTS = [
  {
    title: "StoreFront.et",
    type: "SaaS · Telegram commerce + AI",
    year: "2026",
    tags: ["web", "mobile", "ai"],
    cover: "thumb-storefront.webp",
    images: ["thumb-storefront.webp", "storefront-landing.webp", "storefront-inventory.webp", "storefront-counter-sale.webp", "storefront-bilingual-dark.webp"],
    description:
      "An AI shop assistant that keeps small shops open 24 hours, right inside Telegram. Customers order straight from the shop's channel, the AI bot takes the order in Amharic or English, staff get it in their group, and stock updates itself. Owners and staff run the whole store from a Telegram Mini App, shown here with Habesha Threads, a clothing store.",
    points: [
      "AI sales bot grounded in live stock and prices, bilingual Amharic / English",
      "Mini App with live stock per color and size, plus low-stock alerts",
      "Counter sales with price guardrails: staff can't sell below the owner's floor",
      "Analytics for Telegram vs in-shop revenue and discounts per staff member",
      "Order confirmation with payment-screenshot review, roles & permissions, dark mode",
    ],
    stack: ["Telegram Mini App", "AI agent", "Landing page", "Bilingual UX", "RBAC"],
    repo: "https://github.com/natidebe/Cloth-store-Ai-platform-",
  },
  {
    title: "Clinic Management System",
    type: "Web app · Healthcare operations",
    year: "2026",
    tags: ["web", "dashboard"],
    cover: "thumb-clinic.webp",
    images: ["thumb-clinic.webp", "clinic-dashboard.webp", "clinic-new-patient.webp", "clinic-lab-orders.webp", "clinic-users-roles.webp"],
    description:
      "Run the whole clinic from one screen: patient records, a live queue, lab orders, billing in Birr and role-based staff access in one fast web app, from the front desk to the lab.",
    points: [
      "Patient registry with quick registration and phone numbers for visit and lab-result SMS",
      "Live patient queue with tokens, assigned doctor, status and wait times",
      "Lab orders and results with a test catalog, assignment to lab techs and payment status",
      "Billing in ETB with daily revenue and invoices at a glance",
      "Role-based access for Admin, Doctor, Lab Tech and Receptionist, plus a full audit trail",
    ],
    stack: ["Healthcare", "Dashboard", "Role-based", "Audit trail"],
    repo: "", // no public repo yet; add the URL here when there is one
  },
  {
    title: "Furniture ERP",
    type: "Web app · Inventory & sales",
    year: "2026",
    tags: ["web", "dashboard"],
    cover: "thumb-erp.webp",
    images: ["thumb-erp.webp", "erp-products.webp", "erp-login.webp", "erp-3.webp"],
    description:
      "Stock requests, transfers and sales across branches and warehouses for a furniture business, replacing paper books and phone calls between shops, with the Ethiopian calendar built in.",
    points: [
      "Branch-aware stock, transfers, goods receipts and stock adjustments",
      "Stock-request workflow: pending, acknowledged, partially released",
      "Phone orders, sales and payments tracked end to end",
      "Role-based access (storekeeper, sales, admin) and global search",
    ],
    stack: ["Multi-branch", "Role-based", "Dashboard", "Ethiopian calendar"],
    repo: "https://github.com/natidebe/Furniture-ERP",
  },
  {
    title: "Washing Station",
    type: "Product · Coffee operations",
    year: "2026",
    tags: ["dashboard", "web"],
    cover: "thumb-washing-station.webp",
    images: ["thumb-washing-station.webp", "coffee-overview.webp", "coffee-intake.webp", "coffee-lots.webp"],
    description:
      "Cherry intake, processing stages, drying beds and lots in one view for a coffee washing station, from delivery at the gate to parchment in the warehouse, with full lot traceability.",
    points: [
      "Live processing pipeline: receiving, pulping, fermentation, washing, drying",
      "Cherry intake per farmer with grading and daily intake charts",
      "Lot traceability, moisture tracking and warehouse capacity",
    ],
    stack: ["Dashboard", "Data viz", "Dark UI", "Traceability"],
    repo: "", // no public repo yet; add the URL here when there is one
  },
];

const IMG = (f) => `assets/img/${f}`;
const GITHUB_ICON = `<svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true"><path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57L9 21.07c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .31.2.69.82.57A12 12 0 0 0 12 .3z"/></svg>`;
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

/* ---------- Render project cards ---------- */
const grid = $("#projectGrid");
grid.innerHTML = PROJECTS.map(
  (p, i) => `
  <article class="card" data-card data-index="${i}" data-tags="${p.tags.join(" ")}" style="--i:${i}">
    <a class="card__link" href="#" aria-label="Open ${p.title} case study">
      <div class="card__media">
        <img src="${IMG(p.cover)}" alt="${p.title}, ${p.type}" loading="lazy" />
      </div>
      <div class="card__foot">
        <div>
          <h3 class="card__title">${p.title}</h3>
          <p class="card__meta">${p.type} · ${p.year}</p>
        </div>
        <span class="card__arrow" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg>
        </span>
      </div>
    </a>
    ${p.repo ? `<a class="card__repo" href="${p.repo}" target="_blank" rel="noopener">${GITHUB_ICON} View code</a>` : `<span class="card__repo card__repo--none">Private / client project</span>`}
  </article>`
).join("");

/* ---------- Filters ---------- */
$$(".filters .chip").forEach((chip) =>
  chip.addEventListener("click", () => {
    $$(".filters .chip").forEach((c) => {
      c.classList.toggle("is-active", c === chip);
      c.setAttribute("aria-selected", c === chip);
    });
    const f = chip.dataset.filter;
    $$(".card", grid).forEach((card) => {
      const show = f === "all" || card.dataset.tags.split(" ").includes(f);
      card.hidden = !show;
      card.classList.remove("is-filtered-in");
      if (show) { card.offsetHeight; card.classList.add("is-filtered-in"); }
    });
  })
);

/* ---------- Project modal ---------- */
const modal = $("#projectModal");
function openProject(p) {
  $("#mMeta").textContent = `${p.type} · ${p.year}`;
  $("#mTitle").textContent = p.title;
  $("#mDesc").textContent = p.description;
  $("#mPoints").innerHTML = p.points.map((x) => `<li>${x}</li>`).join("");
  $("#mTags").innerHTML = p.stack.map((x) => `<li>${x}</li>`).join("");
  $("#mActions").innerHTML = p.repo
    ? `<a class="btn btn--dark" href="${p.repo}" target="_blank" rel="noopener">${GITHUB_ICON} View code on GitHub</a>`
    : "";
  const main = $("#mImage");
  const setImg = (f) => { main.src = IMG(f); main.alt = `${p.title} screenshot`; };
  setImg(p.images[0]);
  const thumbs = $("#mThumbs");
  thumbs.innerHTML = p.images.length > 1
    ? p.images.map((f, i) => `<button class="${i === 0 ? "is-active" : ""}" data-f="${f}" aria-label="Screenshot ${i + 1}"><img src="${IMG(f)}" alt="" /></button>`).join("")
    : "";
  $$("button", thumbs).forEach((b) =>
    b.addEventListener("click", () => {
      $$("button", thumbs).forEach((x) => x.classList.toggle("is-active", x === b));
      setImg(b.dataset.f);
    })
  );
  modal.showModal();
  modal.scrollTop = 0;
}
grid.addEventListener("click", (e) => {
  const link = e.target.closest(".card__link");
  if (!link) return;
  const card = link.closest(".card");
  e.preventDefault();
  openProject(PROJECTS[card.dataset.index]);
});
$("#mClose").addEventListener("click", () => modal.close());
modal.addEventListener("click", (e) => { if (e.target === modal) modal.close(); });

/* ---------- Theme toggle ---------- */
$("#themeToggle").addEventListener("click", () => {
  const root = document.documentElement;
  const current = root.dataset.theme || "light"; // light is the default
  const next = current === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch (e) {}
});

/* ---------- Mobile menu ---------- */
const menuBtn = $("#menuToggle");
const menu = $("#mobileMenu");
menuBtn.addEventListener("click", () => {
  const open = menu.hidden;
  menu.hidden = !open;
  menuBtn.setAttribute("aria-expanded", open);
});
$$("a", menu).forEach((a) => a.addEventListener("click", () => { menu.hidden = true; menuBtn.setAttribute("aria-expanded", false); }));

/* ---------- Nav: border on scroll + current section ---------- */
const nav = $(".nav");
addEventListener("scroll", () => nav.classList.toggle("is-scrolled", scrollY > 8), { passive: true });
const navLinks = $$(".nav__links a");
const spy = new IntersectionObserver(
  (entries) => entries.forEach((en) => {
    if (en.isIntersecting) navLinks.forEach((a) => a.classList.toggle("is-current", a.hash === `#${en.target.id}`));
  }),
  { rootMargin: "-45% 0px -50% 0px" }
);
["work", "about", "services", "contact"].forEach((id) => spy.observe(document.getElementById(id)));

/* ---------- Services accordion ---------- */
$$(".acc").forEach((acc) =>
  $(".acc__head", acc).addEventListener("click", () => {
    const willOpen = !acc.classList.contains("is-open");
    $$(".acc").forEach((a) => { a.classList.remove("is-open"); $(".acc__head", a).setAttribute("aria-expanded", false); });
    if (willOpen) { acc.classList.add("is-open"); $(".acc__head", acc).setAttribute("aria-expanded", true); }
  })
);

/* ---------- Testimonials slider ---------- */
const slides = $$(".t");
let ti = 0;
function showSlide(n) {
  ti = (n + slides.length) % slides.length;
  slides.forEach((s, i) => s.classList.toggle("is-active", i === ti));
  $("#tCount").textContent = `${ti + 1} / ${slides.length}`;
}
$("#tPrev").addEventListener("click", () => showSlide(ti - 1));
$("#tNext").addEventListener("click", () => showSlide(ti + 1));
// Auto-advance every 7s; pause while the visitor is hovering or focused on it
const tBox = $(".testimonial");
let tTimer;
const tPlay = () => { clearInterval(tTimer); if (!matchMedia("(prefers-reduced-motion: reduce)").matches) tTimer = setInterval(() => showSlide(ti + 1), 7000); };
tBox.addEventListener("mouseenter", () => clearInterval(tTimer));
tBox.addEventListener("mouseleave", tPlay);
tBox.addEventListener("focusin", () => clearInterval(tTimer));
tBox.addEventListener("focusout", tPlay);
tPlay();

/* ---------- Contact form (Formspree) ----------
   1. Create a free form at https://formspree.io  (use natnaeldebebe463@gmail.com)
   2. Paste the form ID below: it's the part after /f/ in your endpoint,
      e.g. https://formspree.io/f/xyzabcd  →  "xyzabcd"
   Until an ID is set, the form falls back to opening the visitor's email app. */
const FORMSPREE_ID = "xrpeqnbq";
const CONTACT_EMAIL = "natnaeldebebe463@gmail.com";

const form = $("#contactForm");
const formMsg = $("#formError");
const submitBtn = $('button[type="submit"]', form);
const submitHTML = submitBtn.innerHTML;

function setStatus(text, ok = false) {
  formMsg.textContent = text;
  formMsg.classList.toggle("is-success", ok);
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (form.dataset.sending) return;
  const data = Object.fromEntries(new FormData(form));
  if (data._gotcha) return; // spam bot filled the hidden field
  if (!data.name.trim() || !data.details.trim()) return setStatus("Please add your name and a few project details.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return setStatus("Please enter a valid email address.");
  setStatus("");

  const subject = `New project: ${data.need} from ${data.name}`;

  if (!FORMSPREE_ID) {
    const body = `${data.details}\n\n${data.name}\n${data.email}`;
    location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    return;
  }

  form.dataset.sending = "1";
  submitBtn.disabled = true;
  submitBtn.textContent = "Sending…";
  try {
    const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: "POST",
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, _subject: subject, _replyto: data.email }),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    form.reset();
    setStatus("Thanks! Your message is on its way. I'll get back to you within 24 hours.", true);
  } catch (err) {
    setStatus(`Something went wrong sending your message. Please email me directly at ${CONTACT_EMAIL}.`);
  } finally {
    delete form.dataset.sending;
    submitBtn.disabled = false;
    submitBtn.innerHTML = submitHTML;
  }
});

/* ---------- Scroll animations ---------- */
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

// Split headlines into masked words (keeps inner elements like .accent)
$$("[data-split]").forEach((el) => {
  let i = 0;
  const wrap = (node) => {
    [...node.childNodes].forEach((child) => {
      if (child.nodeType === 3) {
        const frag = document.createDocumentFragment();
        child.textContent.split(/(\s+)/).forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) return frag.append(" ");
          const w = document.createElement("span");
          w.className = "word";
          w.innerHTML = `<span style="--i:${i++}"></span>`;
          w.firstChild.textContent = part;
          frag.append(w);
        });
        child.replaceWith(frag);
      } else if (child.nodeType === 1) wrap(child);
    });
  };
  el.setAttribute("aria-label", el.textContent.trim().replace(/\s+/g, " "));
  wrap(el);
});

// Index stagger children
$$("[data-stagger]").forEach((el) => [...el.children].forEach((c, i) => c.style.setProperty("--i", i)));

// Count-up numbers
function countUp(el) {
  const target = +el.dataset.count;
  if (reduceMotion) return (el.textContent = target);
  const start = performance.now(), dur = 1400;
  const tick = (now) => {
    const t = Math.min((now - start) / dur, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - t, 3)));
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

const io = new IntersectionObserver(
  (entries) => entries.forEach((en) => {
    if (!en.isIntersecting) return;
    en.target.classList.add("is-visible");
    $$("[data-count]", en.target).forEach(countUp);
    io.unobserve(en.target);
  }),
  { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
);
$$("[data-reveal], [data-split], [data-stagger], [data-card]").forEach((el) => io.observe(el));
// Safety net: never leave content hidden if the observer doesn't fire
setTimeout(() => $$("[data-reveal], [data-split], [data-stagger], [data-card]").forEach((el) => {
  const r = el.getBoundingClientRect();
  if (r.top < innerHeight && r.bottom > 0) el.classList.add("is-visible");
}), 1500);

// Scroll progress bar + gentle parallax on the portrait
const progress = $("#progress");
const parallax = $$("[data-parallax]");
let ticking = false;
function onScroll() {
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
  if (!reduceMotion) parallax.forEach((el) => {
    const r = el.parentElement.getBoundingClientRect();
    const offset = (r.top + r.height / 2 - innerHeight / 2) * +el.dataset.parallax;
    el.style.translate = `0 ${offset.toFixed(1)}px`;
  });
  ticking = false;
}
addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
onScroll();

/* ---------- Dynamic bits ---------- */
$("#year").textContent = new Date().getFullYear();

/* ---------- Back to top (the nav is sticky, so scroll the page itself) ---------- */
$$('a[href="#top"]').forEach((a) =>
  a.addEventListener("click", (e) => {
    e.preventDefault();
    scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    history.replaceState(null, "", location.pathname);
  })
);
