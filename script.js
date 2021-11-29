// EmailJS info:
// template_zjc3dh6
// service_6s7dn1m
// user_D6eyHn0LjmGYwhBEntOlB
let isModalOpen = false;
let contrastModeOn = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; i++) {
    const isOdd = i%2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform =
      `translate(${x * boolInt}px, ${y * boolInt}px)`;

  }
}

function toggleContrast() {
  contrastModeOn = !contrastModeOn;
  contrastModeOn ?
    document.body.classList += " dark-theme" :
    document.body.classList.remove("dark-theme");
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector('.modal__overlay--loading');
  const success = document.querySelector('.modal__overlay--success');
  loading.classList += " modal__overlay--visible"

  emailjs.sendForm(
    'service_6s7dn1m',
    'template_zjc3dh6',
    event.target,
    'user_D6eyHn0LjmGYwhBEntOlB'
  ).then(() => {
    loading.classList.remove("modal__overlay--visible");
    success.classList += " modal__overlay--visible";
  }).catch(() => {
    loading.classList.remove("modal__overlay--visible");
    alert(
      "The email service is temporarily unavailable. Please email me directly at d.burinskis@gmail.com"
    )
  })

}

function toggleModal() {
  console.log('toggled Modal');
  if (!isModalOpen) {
    document.body.classList += " modal--open";
  } else {
    document.body.classList.remove("modal--open")
  }
  isModalOpen = !isModalOpen;
}