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

