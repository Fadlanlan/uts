/* ==========================================================
   Landing Page Sekolah - interaksi dasar
   ========================================================== */

// Ganti dengan nomor WhatsApp sekolah (format internasional, tanpa + atau spasi).
const WA_NUMBER = "6281234567890";

(() => {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.getElementById("menu");

  function setMenu(open) {
    menu.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
  }

  toggle.addEventListener("click", () => setMenu(!menu.classList.contains("open")));
  menu.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });

  // Tahun otomatis di footer
  const year = document.getElementById("tahun");
  if (year) year.textContent = new Date().getFullYear();

  // Tandai menu yang sedang dilihat
  const links = [...menu.querySelectorAll('a[href^="#"]')];
  const sections = links.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((a) => a.removeAttribute("aria-current"));
        const active = links.find((a) => a.getAttribute("href") === "#" + entry.target.id);
        if (active) active.setAttribute("aria-current", "true");
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    sections.forEach((s) => observer.observe(s));
  }

  // Formulir kontak -> WhatsApp
  const form = document.getElementById("form-kontak");
  const error = document.getElementById("form-error");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const nama = (data.get("nama") || "").toString().trim();
    const hp = (data.get("hp") || "").toString().trim();
    const pesan = (data.get("pesan") || "").toString().trim();

    if (!nama || !hp || !pesan) {
      error.hidden = false;
      return;
    }
    error.hidden = true;

    const teks = `Halo, saya ${nama} (${hp}).\n\n${pesan}`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(teks)}`, "_blank", "noopener");
  });
})();
