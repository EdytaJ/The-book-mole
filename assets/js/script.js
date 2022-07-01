/* const headerScroll = () => {
    const headerElement = document.querySelector('.header');
    this.scrollY >= 50 ? headerElement.classList.add('active') : headerElement.classList.remove('active');
};
window.addEventListener('scroll', headerScroll);


/* Open and close manu on an icon click*/

/*const menuToggler = document.querySelector('#menu-toggler');
const navbarMenu = document.querySelector('.navbar__menu');
const toggleMenu = () => {
    navbarMenu.classList.toggle('active');
};
menuToggler.addEventListener('click', toggleMenu);

const linksToggleMenu = (e) => {
    if(e.target.classList.contains('.navbar__list-link')) navbarMenu.classList.remove('active');
};
window.addEventListener('click', linksToggleMenu);


const swiper = new Swiper('.myswiper', {
    effect: 'coverflow', 
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: '2',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,  
    },

    pagination: {
        el: '.swiper-pagination'
    }
}
);

function openForm() {
    document.getElementById("signupForm").style.display = "block";
  }
  function closeForm() {
    document.getElementById("signupForm").style.display = "none";
  }
  */

  /*Validation form*/
  /*function formConfirm() {
    var x;
    if (confirm("Press to confirm your booking!") ==true) {
      x = "THANKS FOR JOINING, SEE YOU ON THE MAT!!!";
    } else {
      x = "MAYBE NEXT TIME!";
    }
    document.getElementById("thank__you").innerHTML = x;
    } */
  
  
  /*Thank you FORM*/

 /*var nextStep = document.querySelector('#nextStep');

  nextStep.addEventListener('click', function (e) {
    e.preventDefault();

    document.getElementById('my_form').style.display = 'none';

    document.getElementById('thank_you').style.display = 'block';
  }); */


  // create needed constants
const rememberMe = document.querySelector(".remember");
const forgetMe = document.querySelector(".forget");
const form = document.querySelector("form");
const getName = document.querySelector("#entername");
const submitBtn = document.querySelector("#submitname");
const forgetBtn = document.querySelector("#forgetname");

const h4 = document.querySelector("h4");
const greeting = document.querySelector(".personal-greeting");

form.addEventListener("submit", function (e) {
  e.preventDefault();
});

submitBtn.addEventListener("click", function () {
  localStorage.setItem("name", getName.value);

  nameDisplayCheck();
});

forgetBtn.addEventListener("click", function () {
  localStorage.removeItem("name");

  nameDisplayCheck();
});

function nameDisplayCheck() {
  if (localStorage.getItem("name")) {
    let name = localStorage.getItem("name");
    h4.textContent = `Welcome ${name}!`;
    greeting.textContent = `Welcome to our webiste, ${name}! We hope you have fun while you are here.`;

    forgetMe.style.display = "block";
    rememberMe.style.display = "none";
  } else {
    h4.textContent = `Welcome to our website `;
    greeting.textContent = `Welcome to our website. We hope you have fun while you are here.`;

    forgetMe.style.display = "none";
    rememberMe.style.display = "block";
  }
}

document.body.onload = nameDisplayCheck;



  