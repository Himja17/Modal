const selectDialog = document.querySelectorAll(".show-modal");
const hidden = document.querySelector(".hidden");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-modal");
const contentOne = document.querySelector(".contentOne");
const contentTwo = document.querySelector(".contentTwo");
const contentThree = document.querySelector(".contentThree");
const hide = document.querySelector(".hide");

const closeDialog = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < selectDialog.length; i++) {
  selectDialog[i].addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");

    // Hide all content initially
    contentOne.classList.add("hide");
    contentTwo.classList.add("hide");
    contentThree.classList.add("hide");

    if (i === 0) {
      contentOne.classList.remove("hide");
    } else if (i === 1) {
      contentTwo.classList.remove("hide");
    } else if (i === 2) {
      contentThree.classList.remove("hide");
    }
  });

  closeModal.addEventListener("click", closeDialog);
  overlay.addEventListener("click", closeDialog);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      if (!modal.classList.contains("hidden")) {
        closeDialog();
      }
    }
  });
}
