const steps = [
  { num: "01", title: "Units & Measurements" },
  { num: "02", title: "Scalars & Vectors" },
  { num: "03", title: "Motion in 1D" },
  { num: "04", title: "Motion in 2D & 3D" },
  { num: "05", title: "Newton’s Laws" },
  { num: "06", title: "Applications of Newton’s Laws" },
  { num: "07", title: "Work, Energy & Power" },
  { num: "08", title: "Conservation of Energy" },
  { num: "09", title: "Linear Momentum" },
  { num: "10", title: "Center of Mass" },
  { num: "11", title: "Rotational Kinematics" },
  { num: "12", title: "Rotational Dynamics" },
  { num: "13", title: "Gravitation" },
  { num: "14", title: "Oscillations" },
  { num: "15", title: "Mechanical Waves" },
  { num: "16", title: "Fluid Mechanics" },
  { num: "17", title: "Thermal Physics" },
  { num: "18", title: "Laws of Thermodynamics" },
  { num: "19", title: "Kinetic Theory of Gases" },
  { num: "20", title: "Electrostatics" },
  { num: "21", title: "Electric Potential" },
  { num: "22", title: "Current Electricity" },
  { num: "23", title: "Magnetic Fields" },
  { num: "24", title: "Electromagnetic Induction" },
  { num: "25", title: "Alternating Current" },
  { num: "26", title: "EM Waves" },
  { num: "27", title: "Geometrical Optics" },
  { num: "28", title: "Wave Optics" },
  { num: "29", title: "Modern Physics" },
  { num: "30", title: "Photoelectric Effect" },
  { num: "31", title: "Quantum Mechanics" },
  { num: "32", title: "Nuclear Physics" },
  { num: "33", title: "Relativity" },
  { num: "34", title: "Particle Physics" },
  { num: "35", title: "Astrophysics & Cosmology" }
];

const sidebar = document.getElementById("sidebar-list");

if (sidebar) {
  const currentPage = window.location.pathname.split("/").pop();

  steps.forEach(step => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.href = `step${step.num}.html`;
    a.textContent = `${step.num}. ${step.title}`;

    if (currentPage === `step${step.num}.html`) {
      li.classList.add("active");
    }

    li.appendChild(a);
    sidebar.appendChild(li);
  });
}

const toggleBtn = document.getElementById("toggle-sidebar");
const sidebarEl = document.querySelector(".sidebar");

if (toggleBtn && sidebarEl) {
  toggleBtn.addEventListener("click", () => {
    sidebarEl.classList.toggle("collapsed");
  });
}
