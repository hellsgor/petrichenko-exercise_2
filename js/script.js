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
})
