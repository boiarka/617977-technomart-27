// Окно "Напишите нам"
const buttonWriteUs = document.querySelector('.map-company__button');
const modalWriteUs = document.querySelector('.write-us');

if (modalWriteUs) {
  const modalWriteUsClose = modalWriteUs.querySelector('.close-modal');
  const form = modalWriteUs.querySelector("form");
  const login = modalWriteUs.querySelector("[name=name]");
  const email = modalWriteUs.querySelector("[name=email]");
  const comment = modalWriteUs.querySelector("[name=comment]");

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
}

// Окно "Карта"
const buttonSmallMap = document.querySelector('.map-small');
const modalMap = document.querySelector('.map-modal');

if (modalMap) {
  const modalMapClose = modalMap.querySelector('.close-modal');

  buttonSmallMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalMap.classList.add("modal-show");
  });

  modalMapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalMap.classList.remove("modal-show");
  });

}

// Окно "Добавить в корзину"
const allBuyButtons = document.querySelectorAll('.buy-button');
const modalCardAdd = document.querySelector('.card-add');

if (modalCardAdd) {
  const modalCardAddClose = document.querySelector('.close-modal');

  allBuyButtons.forEach((item) => {
    item.addEventListener("click", function (evt) {
      evt.preventDefault();
      modalCardAdd.classList.add("modal-show");
    });
  });


  modalCardAddClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalCardAdd.classList.remove("modal-show");
  });
}

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalWriteUs && modalWriteUs.classList.contains("modal-show")) {
      modalWriteUs.classList.remove("modal-show");
      modalWriteUs.classList.remove("modal-error");
    }
    if (modalMap && modalMap.classList.contains("modal-show")) {
      modalMap.classList.remove("modal-show");
    }
    if (modalCardAdd && modalCardAdd.classList.contains("modal-show")) {
      modalCardAdd.classList.remove("modal-show");
    }
  }
});

// Слайдер "Сервисы"
const allServicesButtons = document.querySelectorAll('.services-menu button');
const allServicesBlocks = document.querySelectorAll('.services-main .services-block');



if (allServicesButtons && allServicesBlocks) {
  const removeServicesButtonsClass = function () {
    allServicesButtons.forEach((item) => {
      item.classList.remove('services-menu__active');
    });
  }

  const changeServicesBlocksClass = function (id) {
    allServicesBlocks.forEach((item) => {
      if (item.dataset.id === id) {
        item.classList.add('services-block__active');
      } else {
        item.classList.remove('services-block__active');
      }
    });
  }

  allServicesButtons.forEach((item) => {
    item.addEventListener("click", function (evt) {
      evt.preventDefault();
      removeServicesButtonsClass();
      changeServicesBlocksClass(item.id);
      item.classList.add('services-menu__active');
    });
  });
}

// Слайдер "Промо"
const promoSlider = document.querySelector('.promo-slider');
if (promoSlider) {
  const allPromoSliderSlides = promoSlider.querySelectorAll('.promo-slider__slide');
  const promoSliderButtonLeft = promoSlider.querySelector('.slider-button__left');
  const promoSliderButtonRight = promoSlider.querySelector('.slider-button__right');
  let currentSlide;
  let maxSlides = allPromoSliderSlides.length - 1;

  const checkActiveSlide = function () {
    for (let i = 0; i < allPromoSliderSlides.length; i++) {
      if (allPromoSliderSlides[i].classList.contains('promo-slider__active')) {
        currentSlide = i;
      }
    }
  }



  promoSliderButtonLeft.addEventListener("click", function (evt) {
    checkActiveSlide();
    allPromoSliderSlides[currentSlide].classList.remove('promo-slider__active');
    if (currentSlide === 0) {
      currentSlide = maxSlides;
    } else {
      currentSlide = currentSlide - 1;
    }
    if (currentSlide < 0) {
      currentSlide = allPromoSliderSlides.length - 1;
    }
    allPromoSliderSlides[currentSlide].classList.add('promo-slider__active');
  });

  promoSliderButtonRight.addEventListener("click", function (evt) {
    checkActiveSlide();
    allPromoSliderSlides[currentSlide].classList.remove('promo-slider__active');
    currentSlide = currentSlide + 1;
    if (currentSlide > (allPromoSliderSlides.length - 1)) {
      currentSlide = 0;
    }
    allPromoSliderSlides[currentSlide].classList.add('promo-slider__active');
  });
}
