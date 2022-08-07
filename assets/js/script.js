const infoWindow = document.querySelector('.popup');
const overlay = document.querySelector('.overlay');
const btnClosePopup = document.querySelector('.close_popup');
const btnsOpenPopup = document.querySelectorAll('.show_popup');

const openPopup = function () {
  infoWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closePopup = function () {
  infoWindow.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenPopup.length; i++)
  btnsOpenPopup[i].addEventListener('click', openPopup);

btnClosePopup.addEventListener('click', closePopup);
overlay.addEventListener('click', closePopup);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !popup.classList.contains('hidden')) {
    closePopup();
  }
});
