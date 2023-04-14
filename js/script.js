'use strict';

window.addEventListener('DOMContentLoaded', function() {

  let tab = document.querySelectorAll('.info-header-tab'),
    info = document.querySelector('.info-header'),
    tabContent = document.querySelectorAll('.info-tabcontent');

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }

  function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.add('show');
      tabContent[b].classList.remove('hide');
    }
  }

  hideTabContent(1);
  info.addEventListener('click', (event) => {
    let target = event.target;
    if (target && target.classList.contains('info-header-tab')) {
      for (let i = 0; i < tab.length; i++) {
        if (target === tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  })


  // TIMER
  let year = new Date().getFullYear();
  let month = `${new Date().getMonth() + 1}`.length === 1 ? `0${new Date().getMonth() + 1}` : `${new Date().getMonth() + 1}`;
  let date = `${new Date().getDate() + 1}`.length === 1 ? `0${new Date().getDate() + 1}` : `${new Date().getDate() + 1}`;

  let deadline = `${year}-${month}-${date}`;

  function getTimeRemaining(endTime) {
    let t = Date.parse(endTime) - Date.parse(new Date().toString());
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / 1000 / 60 / 60) % 24);

    return {
      'total': t,
      'hours': hours,
      'minute': minutes,
      'seconds': seconds
    }
  }

  function setClock(id, endTime) {
    let timer = document.getElementById(id),
      hours = timer.querySelector('.hours'),
      minutes = timer.querySelector('.minutes'),
      seconds = timer.querySelector('.seconds'),
      timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      let t = getTimeRemaining(endTime);
      hours.textContent = `${t.hours}`;
      minutes.textContent = `${t.minute}`;
      seconds.textContent = `${t.seconds}`;
      plusZero([hours, minutes, seconds]);

      function plusZero(units) {
        for (let i = 0; i < units.length; i++) {
          if (units[i].textContent.length < 2) {
            units[i].textContent = `0${units[i].textContent}`;
          }
        }
      }

      if (t.total <= 0) {
        clearInterval(timeInterval);
        let zeroTime = '00';
        hours.textContent = zeroTime;
        minutes.textContent = zeroTime;
        seconds.textContent = zeroTime;
      }
    }
  }

  setClock('timer', deadline);


  // MODAL
  const more = document.querySelector('.more');
  const overlay = document.querySelector('.overlay');
  const close = overlay.querySelector('.popup-close');
  const tabLearnMoreButtons = document.querySelectorAll('.description-btn');

  more.addEventListener('click', showModal);
  tabLearnMoreButtons.forEach(learnMoreButton => {
    learnMoreButton.addEventListener('click', showModal);
  })

  close.addEventListener('click', function() {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
  })

  function showModal() {
    overlay.style.display = 'block';
    more.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
  }

  // Form

  const modalForm = document.querySelector('.main-form');
  const contactForm = document.getElementById('form');

  contactForm.addEventListener('submit', (event) => formSubmission(contactForm, event));
  modalForm.addEventListener('submit', (event) => formSubmission(modalForm, event));
})


// отправка формы
function formSubmission(form, event) {

  event.preventDefault();

  const message = {
    start: 'Отправляем данные',
    loading: 'Получение ответа',
    success: 'Спасибо! Скоро мы с вами свяжемся!',
    failure: 'Что-то пошло не так...'
  };
  const statusMessage = document.createElement('div');
  const formInputs = form.querySelectorAll('input');
  const request = new XMLHttpRequest();
  const data = new FormData(form);

  statusMessage.classList.add('status');
  form.appendChild(statusMessage);


  let dataJSON = {};
  data.forEach(function(value, key) {
    dataJSON[key] = value;
  })
  const json = JSON.stringify(dataJSON);

  request.open('POST', '../server.php');
  // request.setRequestHeader('Content-Type', 'application/x-www-urlencoded');
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  statusMessage.innerHTML = message.start;


  const response = new Promise((resolve, reject) => {

    statusMessage.innerHTML = message.loading;

    setTimeout(function() {

      request.send(json);
      request.addEventListener('readystatechange', function() {

        if (request.readyState < 4) {
          statusMessage.innerHTML = message.loading;
        } else if (request.readyState === 4 && request.status === 200) {
            resolve(message.success);

          // let response = request.response;
          // console.log(response);

        } else {
          statusMessage.innerHTML = message.failure;
        }

      })
    }, 1000)

  })

  response
    .then(mes => {
      statusMessage.innerText = mes;
    })
    .then(() => {
      clearingFormInputs(formInputs);
    })

  function clearingFormInputs(inputs) {
    inputs.forEach(input => {
      input.value = null;
    })
  }
}

// slider
let slideIndex = 1;
const slides = document.querySelectorAll('.slider-item');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const dotsWrap = document.querySelector('.slider-dots');
const dots = document.querySelectorAll('.dot');

showSlides(slideIndex);
prev.addEventListener('click', () => plusSlides(-1));
next.addEventListener('click', () => plusSlides(1));
dotsWrap.addEventListener('click', (event) => {
  for (let i = 0; i  < dots.length + 1; i++) {
    if (event.target.classList.contains('dot') && event.target  === dots[i - 1]) {
      currentSlide(i);
    }
  }
});


function showSlides(n) {

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  slides.forEach((item) => item.style.display = 'none');
  dots.forEach((item) => item.classList.remove('dot-active'));
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].classList.add('dot-active');
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


// calculator
const persons = document.querySelectorAll('.counter-block-input')[0];
const restDays = document.querySelectorAll('.counter-block-input')[1];
const place = document.getElementById('select');
const totalValue = document.getElementById('total');

let personsSum = 0;
let daysSum = 0;
let total = 0;

totalValue.innerText = 0;

persons.addEventListener('input', firstPartCalc);
restDays.addEventListener('input', firstPartCalc);

function firstPartCalc() {
  daysSum = Number(restDays.value);
  personsSum = Number(persons.value);
  if (personsSum && daysSum) {

    total = (daysSum + personsSum) * 4000;
  } else {
    total = 0;
  }
  totalValue.innerText = total;
}


place.addEventListener('change', function () {
  if (restDays.value === '' || persons.value === '') {
    totalValue.innerText = 0;
  } else {
    let tempVariable = total;
    totalValue.innerText = tempVariable * this.options[this.selectedIndex].value;
  }
})




