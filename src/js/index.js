import '../scss/style.scss'
import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'
console.log('It works!')

document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('toggleBtn')
  const text = toggleBtn.querySelector('.text')

  const tabletSlides = document.querySelectorAll(
    '.swiper-slide.tablet, .swiper-slide.tablet-none'
  )
  const pcSlides = document.querySelectorAll(
    '.swiper-slide.pc, .swiper-slide.pc-none'
  )

  function setHidden(hidden) {
    if (hidden) {
      tabletSlides.forEach((el) => el.classList.add('tablet-none'))
      pcSlides.forEach((el) => el.classList.add('pc-none'))
      toggleBtn.classList.remove('active')
      text.textContent = 'Показать все'
    } else {
      tabletSlides.forEach((el) => el.classList.remove('tablet-none'))
      pcSlides.forEach((el) => el.classList.remove('pc-none'))
      toggleBtn.classList.add('active')
      text.textContent = 'Скрыть'
    }
  }

  let hidden = true
  setHidden(hidden)

  function checkWidth() {
    if (window.innerWidth >= 1120) {
      toggleBtn.classList.add('active')
    } else {
      toggleBtn.classList.remove('active')
    }

    if (window.innerWidth < 768) {
      hidden = false
      tabletSlides.forEach((el) => el.classList.remove('tablet-none'))
      pcSlides.forEach((el) => el.classList.remove('pc-none'))
      text.textContent = 'Показать все'
      toggleBtn.classList.remove('active')
    } else {
      setHidden(hidden)
    }
  }
  checkWidth()

  window.addEventListener('resize', checkWidth)

  toggleBtn.addEventListener('click', () => {
    hidden = !hidden
    setHidden(hidden)
  })
})

// document.addEventListener("DOMContentLoaded", function () {
//   let swiper = null;
//   function initSwiper() {
//     if (window.innerWidth < 768 && swiper === null) {
//       swiper = new Swiper(".mySwiper", {
//         modules: [Pagination],
//         slidesPerView: 1.2,
//         spaceBetween: 10,
//         pagination: {
//           el: ".swiper-pagination",
//           clickable: true,
//         },
//       });
//     }

//     if (window.innerWidth >= 768 && swiper !== null) {
//       swiper.destroy(true, true);
//       swiper = null;
//     }
//   }
//   initSwiper();
//   window.addEventListener("resize", initSwiper);
// });

document.addEventListener('DOMContentLoaded', function () {
  let swiper = null
  function initSwiper() {
    if (window.innerWidth < 768 && swiper === null) {
      swiper = new Swiper('.mySwiper', {
        modules: [Pagination],
        slidesPerView: 1.2,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      })
    }
    
    if (window.innerWidth >= 768 && swiper !== null) {
      swiper.destroy(true, true)
      swiper = null
    }
  }
  initSwiper()
  window.addEventListener('resize', initSwiper)
})

document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('toggleBtn')
  const text = toggleBtn.querySelector('.text')
  // берём элементы и с tablet, и с tablet-none, чтобы всё работало с текущей разметкой
  const tabletSlides = document.querySelectorAll(
    '.swiper-slide.tablet, .swiper-slide.tablet-none'
  )
  const pcSlides = document.querySelectorAll(
    '.swiper-slide.pc, .swiper-slide.pc-none'
  )

  function setHidden(hidden) {
    if (hidden) {
      tabletSlides.forEach((el) => el.classList.add('tablet-none'))
      pcSlides.forEach((el) => el.classList.add('pc-none'))
      toggleBtn.classList.remove('active')
      text.textContent = 'Показать все'
    } else {
      tabletSlides.forEach((el) => el.classList.remove('tablet-none'))
      pcSlides.forEach((el) => el.classList.remove('pc-none'))
      toggleBtn.classList.add('active')
      text.textContent = 'Скрыть'
    }
  }


  let hidden = true
  setHidden(hidden)

  function checkWidth() {
    if (window.innerWidth >= 1120) {
      toggleBtn.classList.add('active')
    } else {
      toggleBtn.classList.remove('active')
    }

    // на мобильных кнопка скрыта, поэтому сбрасываем -none,
    // чтобы при возврате на десктоп всё отображалось корректно
    if (window.innerWidth < 768) {
      hidden = false
      tabletSlides.forEach((el) => el.classList.remove('tablet-none'))
      pcSlides.forEach((el) => el.classList.remove('pc-none'))
      text.textContent = 'Показать все'
      toggleBtn.classList.remove('active')
    } else {
      // при >=768 возвращаем состояние, которое выбрал пользователь
      setHidden(hidden)
    }
  }
  checkWidth()

  window.addEventListener('resize', checkWidth)

  toggleBtn.addEventListener('click', () => {
    hidden = !hidden
    setHidden(hidden)
  })
})

const openBtn = document.querySelector('.burger-open')
const closeBtn = document.querySelector('.burger-toggle')
const modal = document.querySelector('.modal')

// открыть
openBtn.addEventListener('click', () => {
  modal.classList.add('active')
})

// закрыть
closeBtn.addEventListener('click', () => {
  modal.classList.remove('active')
});


let swiper2 = null;

function initSwiper2() {
    // Проверяем ширину экрана (как в твоем первом примере)
    if (window.innerWidth < 768 && swiper2 === null) {
        swiper2 = new Swiper('.mySwiper2', { // Класс из твоего HTML
            modules: [Pagination],
            slidesPerView: 'auto',
            spaceBetween: 10,
            pagination: {
                // Ищем пагинацию именно внутри mySwiper2, чтобы не было конфликтов
                el: '.mySwiper2 .swiper-pagination-2',
                clickable: true,
            },
        });
    } else if (window.innerWidth >= 768 && swiper2 !== null) {
        // Удаляем слайдер на больших экранах
        swiper2.destroy(true, true);
        swiper2 = null;
    }
}

// Запускаем при загрузке страницы
document.addEventListener('DOMContentLoaded', initSwiper2);

// И при изменении размера окна
window.addEventListener('resize', initSwiper2);


let swiper3 = null;

function initSwiper3() {
    // Проверяем ширину экрана (как в твоем первом примере)
    if (window.innerWidth < 768 && swiper3 === null) {
        swiper3 = new Swiper('.mySwiper3', { // Класс из твоего HTML
            modules: [Pagination],
            slidesPerView: 'auto',
            spaceBetween: 10,
            pagination: {
                // Ищем пагинацию именно внутри mySwiper2, чтобы не было конфликтов
                el: '.mySwiper3 .swiper-pagination-3',
                clickable: true,
            },
        });
    } else if (window.innerWidth >= 768 && swiper3 !== null) {
        // Удаляем слайдер на больших экранах
        swiper3.destroy(true, true);
        swiper3 = null;
    }
}



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
  const toggleBtn = document.querySelector(".show-all");
  const text = toggleBtn.querySelector(".text");
  const hiddenSlides = document.querySelectorAll(".tablet-none, .pc-none");

  let hidden = true;

  function setHidden() {
    hiddenSlides.forEach(el => {
      if (hidden) {
        el.style.display = "none";
      } else {
        el.style.display = "flex";
      }
    });

    text.textContent = hidden ? "Показать все" : "Скрыть";
  }

  setHidden();

  toggleBtn.addEventListener("click", () => {
    hidden = !hidden;
    setHidden();
  });
});

