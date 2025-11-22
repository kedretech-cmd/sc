// portfolio.js - Enhanced with multi-information details
const portfolioItems = [
  {
    id: 1,
    title: "School Management System",
    cat: "web",
    thumb: "assets/project1.svg",
    desc: "A full school management system.",
    longDesc:
      "A comprehensive platform for managing student records, attendance, grades, and scheduling. Streamlines communication between teachers, students, and parents with a modern, responsive interface.",
    features: [
      "User Authentication & Roles",
      "Real-time Gradebook",
      "Attendance Tracking",
      "Automated Reporting",
      "Parent Portal",
    ],
    client: "EdTech Solutions",
    role: "Full Stack Developer",
    link: "#",
    tech: ["HTML", "Bootstrap", "JavaScript", "PHP", "MySQL"],
  },
  {
    id: 2,
    title: "Mobile Quiz App",
    cat: "apps",
    thumb: "assets/project2.svg",
    desc: "Quiz mobile app made with Kivy.",
    longDesc:
      "An engaging mobile quiz application built with Python and Kivy. Features multiple categories, timed challenges, and a global leaderboard system to compete with friends.",
    features: [
      "Cross-platform (Android/iOS)",
      "SQLite Database Integration",
      "Custom UI Widgets",
      "Sound Effects & Animations",
      "Offline Mode",
    ],
    client: "Personal Project",
    role: "Mobile Developer",
    link: "#",
    tech: ["Python", "Kivy", "SQLite"],
  },
  {
    id: 3,
    title: "Calendar App",
    cat: "apps",
    thumb: "assets/project3.svg",
    desc: "Calendar with reminders.",
    longDesc:
      "A sleek and intuitive calendar application designed for productivity. Includes smart reminders, event categorization, and seamless cloud synchronization across devices.",
    features: [
      "Google Calendar Sync",
      "Push Notifications",
      "Dark/Light Mode",
      "Drag & Drop Interface",
      "Voice Input",
    ],
    client: "Productivity Inc.",
    role: "Flutter Developer",
    link: "#",
    tech: ["Flutter", "Dart", "Firebase"],
  },
  {
    id: 4,
    title: "Design Toolkit",
    cat: "tools",
    thumb: "assets/project4.svg",
    desc: "Small design components.",
    longDesc:
      "A curated collection of UI components and design assets for rapid prototyping. Includes buttons, cards, inputs, and navigation bars designed with accessibility in mind.",
    features: [
      "Figma Auto-layout",
      "Responsive Components",
      "WCAG 2.1 Accessible",
      "Design System Documentation",
      "Exportable Assets",
    ],
    client: "Open Source",
    role: "UI/UX Designer",
    link: "#",
    tech: ["Figma", "CSS", "SVG"],
  },
];

function renderPortfolio(filter = "all") {
  const grid = document.getElementById("portfolioGrid");
  grid.innerHTML = "";
  const items =
    filter === "all"
      ? portfolioItems
      : portfolioItems.filter((i) => i.cat === filter);

  items.forEach((it) => {
    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-3"; // Adjusted for better grid layout
    col.innerHTML = `
      <div class="card glass-card p-2 h-100 portfolio-card" data-id="${
        it.id
      }" style="cursor: pointer; transition: transform 0.3s ease;">
        <div class="overflow-hidden rounded mb-2 position-relative">
          <img src="${it.thumb}" class="img-fluid w-100" alt="${
      it.title
    }" style="object-fit: cover; height: 200px;">
          <div class="overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style="background: rgba(0,0,0,0.5); opacity: 0; transition: opacity 0.3s;">
            <i class="bi bi-plus-circle fs-1 text-white"></i>
          </div>
        </div>
        <div class="card-body p-2">
          <h6 class="fw-bold mb-1">${it.title}</h6>
          <small class="text-muted d-block mb-2">${it.desc}</small>
          <div class="d-flex flex-wrap gap-1">
            ${it.tech
              .slice(0, 3)
              .map(
                (t) =>
                  `<span class="badge bg-dark border border-secondary text-light" style="font-size: 0.7em;">${t}</span>`
              )
              .join("")}
          </div>
        </div>
      </div>`;

    // Add hover effect via JS or rely on CSS. Let's add a simple listener for the modal.
    const card = col.querySelector(".card");
    card.addEventListener("click", () => openModal(it));
    card.addEventListener("mouseenter", () => {
      card.querySelector(".overlay").style.opacity = "1";
      card.style.transform = "translateY(-5px)";
    });
    card.addEventListener("mouseleave", () => {
      card.querySelector(".overlay").style.opacity = "0";
      card.style.transform = "translateY(0)";
    });

    grid.appendChild(col);
  });
}

function openModal(item) {
  const modal = new bootstrap.Modal(document.getElementById("detailModal"));
  const content = document.getElementById("modalContent");

  content.innerHTML = `
    <div class="row g-4">
      <div class="col-lg-6">
        <img src="${
          item.thumb
        }" class="img-fluid rounded shadow-lg w-100" alt="${item.title}">
        <div class="mt-4 d-grid gap-2">
          <a href="${
            item.link
          }" target="_blank" class="btn btn-primary"><i class="bi bi-box-arrow-up-right me-2"></i>View Live Project</a>
        </div>
      </div>
      <div class="col-lg-6">
        <h3 class="fw-bold mb-2">${item.title}</h3>
        <p class="text-info mb-3">${
          item.role
        } <span class="text-muted mx-2">•</span> ${item.client}</p>
        
        <p class="lead fs-6 mb-4">${item.longDesc}</p>
        
        <h5 class="fw-bold mb-3">Key Features</h5>
        <ul class="list-unstyled mb-4">
          ${item.features
            .map(
              (f) =>
                `<li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i>${f}</li>`
            )
            .join("")}
        </ul>
        
        <h5 class="fw-bold mb-3">Technologies</h5>
        <div class="d-flex flex-wrap gap-2">
          ${item.tech
            .map(
              (t) =>
                `<span class="badge bg-secondary bg-opacity-25 border border-secondary text-light px-3 py-2">${t}</span>`
            )
            .join("")}
        </div>
      </div>
    </div>
  `;

  modal.show();
}

document.addEventListener("DOMContentLoaded", () => {
  renderPortfolio("all");
  document.querySelectorAll(".filter-btn").forEach((b) =>
    b.addEventListener("click", (e) => {
      document
        .querySelectorAll(".filter-btn")
        .forEach((x) => x.classList.remove("active"));
      e.target.classList.add("active");
      renderPortfolio(e.target.dataset.filter);
    })
  );
});
