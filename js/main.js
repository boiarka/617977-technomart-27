const buttonWriteUs = document.querySelector('.map-company__button');
const modalWriteUs = document.querySelector('.write-us');
const modalWriteUsClose = modalWriteUs.querySelector('.close-modal');

const form = modalWriteUs.querySelector("form");
const login = modalWriteUs.querySelector("[name=name]");
const email = modalWriteUs.querySelector("[name=email]");
const comment = modalWriteUs.querySelector("[name=comment]");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

const buttonSmallMap = document.querySelector('.map-small');
const modalMap = document.querySelector('.map-modal');
const modalMapClose = modalMap.querySelector('.close-modal');


buttonWriteUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalWriteUs.classList.add("modal-show");
  console.log(storage);

  if (storage) {
    login.value = storage;
    email.focus();
  } else {
    login.focus();
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalWriteUs.classList.contains("modal-show")) {
      modalWriteUs.classList.remove("modal-show");
      modalWriteUs.classList.remove("modal-error");
    }
    if (modalMap.classList.contains("modal-show")) {
      modalMap.classList.remove("modal-show");
    }
  }
});

modalWriteUsClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalWriteUs.classList.remove("modal-show");
  modalWriteUs.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!login.value || !email.value || !comment.value) {
    evt.preventDefault();
    modalWriteUs.classList.remove("modal-error");
    modalWriteUs.offsetWidth = modalWriteUs.offsetWidth;
    modalWriteUs.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }
});


buttonSmallMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.add("modal-show");
});

modalMapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.remove("modal-show");
});
