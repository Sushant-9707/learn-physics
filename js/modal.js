// modal elements
const modal = document.getElementById("modal");
const modalBody = modal.querySelector(".modal-body");
const closeBtn = modal.querySelector(".close-modal");

// open modal when subtopic clicked
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".subtopics button");
  if (!btn) return;

  const topicId = btn.dataset.topic;
  const content = document.getElementById(topicId);

  if (!content) return;

  modalBody.innerHTML = content.innerHTML;
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
});

// close modal
function closeModal() {
  modal.classList.add("hidden");
  modalBody.innerHTML = "";
  document.body.style.overflow = "";
}

// close button
closeBtn.addEventListener("click", closeModal);

// click outside modal content
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
