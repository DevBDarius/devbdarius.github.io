// EmailJS info:
// template_zjc3dh6
// service_6s7dn1m
// user_D6eyHn0LjmGYwhBEntOlB

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

let isModalOpen = false;
function toggleModal() {
  console.log('toggled Modal');
  if (!isModalOpen) {
    document.body.classList += " modal--open";
  } else {
    document.body.classList.remove("modal--open")
  }
  isModalOpen = !isModalOpen;
}