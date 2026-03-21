import '../scss/style.scss'

console.log('It works!')

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggleBtn");
  const text = toggleBtn.querySelector(".text");
 
  const tabletSlides = document.querySelectorAll(
    ".swiper-slide.tablet, .swiper-slide.tablet-none",
  );
  const pcSlides = document.querySelectorAll(
    ".swiper-slide.pc, .swiper-slide.pc-none",
  );

  function setHidden(hidden) {
    if (hidden) {
      tabletSlides.forEach((el) => el.classList.add("tablet-none"));
      pcSlides.forEach((el) => el.classList.add("pc-none"));
      toggleBtn.classList.remove("active");
      text.textContent = "Показать все";
    } else {
      tabletSlides.forEach((el) => el.classList.remove("tablet-none"));
      pcSlides.forEach((el) => el.classList.remove("pc-none"));
      toggleBtn.classList.add("active");
      text.textContent = "Скрыть";
    }
  }

 
  let hidden = true;
  setHidden(hidden);

  function checkWidth() {
    if (window.innerWidth >= 1120) {
      toggleBtn.classList.add("active");
    } else {
      toggleBtn.classList.remove("active");
    }

   
    if (window.innerWidth < 768) {
      hidden = false;
      tabletSlides.forEach((el) => el.classList.remove("tablet-none"));
      pcSlides.forEach((el) => el.classList.remove("pc-none"));
      text.textContent = "Показать все";
      toggleBtn.classList.remove("active");
    } else {
      
      setHidden(hidden);
    }
  }
  checkWidth();

  window.addEventListener("resize", checkWidth);

  toggleBtn.addEventListener("click", () => {
    hidden = !hidden;
    setHidden(hidden);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let swiper = null;
  function initSwiper() {
    if (window.innerWidth < 768 && swiper === null) {
      swiper = new Swiper(".mySwiper", {
        slidesPerView: 1.2,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }

    if (window.innerWidth >= 768 && swiper !== null) {
      swiper.destroy(true, true);
      swiper = null;
    }
  }
  initSwiper();
  window.addEventListener("resize", initSwiper);
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggleBtn");
  const text = toggleBtn.querySelector(".text");
  // берём элементы и с tablet, и с tablet-none, чтобы всё работало с текущей разметкой
  const tabletSlides = document.querySelectorAll(
    ".swiper-slide.tablet, .swiper-slide.tablet-none",
  );
  const pcSlides = document.querySelectorAll(
    ".swiper-slide.pc, .swiper-slide.pc-none",
  );

  function setHidden(hidden) {
    if (hidden) {
      tabletSlides.forEach((el) => el.classList.add("tablet-none"));
      pcSlides.forEach((el) => el.classList.add("pc-none"));
      toggleBtn.classList.remove("active");
      text.textContent = "Показать все";
    } else {
      tabletSlides.forEach((el) => el.classList.remove("tablet-none"));
      pcSlides.forEach((el) => el.classList.remove("pc-none"));
      toggleBtn.classList.add("active");
      text.textContent = "Скрыть";
    }
  }

  // toggleBtn.addEventListener("click", () => {
  //   if (text.textContent === "Показать все") {
  //     tabletSlides.forEach((el) => el.classList.remove("tablet-none"));
  //     pcSlides.forEach((el) => el.classList.remove("pc-none"));
  //   } else {
  //     tabletSlides.forEach((el) => el.classList.add("tablet-none"));
  //     pcSlides.forEach((el) => el.classList.add("pc-none"));
  //   }
  // })

  // стартовое состояние: "Показать все" (то есть скрыто)
  let hidden = true;
  setHidden(hidden);

  function checkWidth() {
    if (window.innerWidth >= 1120) {
      toggleBtn.classList.add("active");
    } else {
      toggleBtn.classList.remove("active");
    }

    // на мобильных кнопка скрыта, поэтому сбрасываем -none,
    // чтобы при возврате на десктоп всё отображалось корректно
    if (window.innerWidth < 768) {
      hidden = false;
      tabletSlides.forEach((el) => el.classList.remove("tablet-none"));
      pcSlides.forEach((el) => el.classList.remove("pc-none"));
      text.textContent = "Показать все";
      toggleBtn.classList.remove("active");
    } else {
      // при >=768 возвращаем состояние, которое выбрал пользователь
      setHidden(hidden);
    }
  }
  checkWidth();

  window.addEventListener("resize", checkWidth);

  toggleBtn.addEventListener("click", () => {
    hidden = !hidden;
    setHidden(hidden);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let swiper = null;
  function initSwiper() {
    if (window.innerWidth < 768 && swiper === null) {
      swiper = new Swiper(".mySwiper", {
        slidesPerView: 1.2,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }

    if (window.innerWidth >= 768 && swiper !== null) {
      swiper.destroy(true, true);
      swiper = null;
    }
  }
  initSwiper();
  window.addEventListener("resize", initSwiper);
});





const openBtn = document.querySelector('.burger-open');
const closeBtn = document.querySelector('.burger-toggle');
const modal = document.querySelector('.modal');

// открыть
openBtn.addEventListener('click', () => {
  modal.classList.add('active');
});

// закрыть
closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});


  var swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
      },
    });

