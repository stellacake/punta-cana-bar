/* burger section */

const burgerMenuElem = document.getElementsByClassName("burgerMenu-elem");
const checkbox = document.getElementById("checkbox");

//burgerMenuElem.map((e, i) => e.addEventListener("click", () => checkbox.checked = false))
for (let i = 0; i < burgerMenuElem.length; i++) {
  burgerMenuElem[i].addEventListener("click", function () {
    checkbox.checked = false;
  });
}
/* end burger section */


// floating contact button

$("body").append('<class="floating-contact-button" title="contact-button">');

if (window.matchMedia("(min-width: 768px)").matches) {
  $(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() > $(document).height() - 730) $(".floating-contact-button").fadeOut(600);
    else $(".floating-contact-button").fadeIn(600);
  });
} else {
  $(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() > $(document).height() - 850) $(".floating-contact-button").fadeOut(600);
    else $(".floating-contact-button").fadeIn(600);
  });
}

// end of floating contact button

// events section
let polaroids = document.querySelectorAll(".events-week-day");

polaroids.forEach((item) => {
  const randomRotation = Math.floor(Math.random() * (6 - -6 + 1) + -6);
  item.style.transform = `rotate(${randomRotation}deg)`;
});
// end of events section

// contact section

const selector = document.getElementById("purpose");
const date = document.getElementById("date");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("msg");
const form = document.getElementById("form");
const time = document.getElementById("time");
const people = document.getElementById("people");
const timed = document.getElementById("date-container");

selector.addEventListener("change", function() {
  if (selector.value === "reserve") {
    message.style.display = "block";
    timed.style.display = "flex";
    date.style.display = "block";
    people.style.display = "block";
    time.style.display = "block";
  }
  if (selector.value === "event") {
    message.style.display = "block";
    timed.style.display = "flex";
    date.style.display = "block";
    people.style.display = "none";
    time.style.display = "none";
  }
  if (selector.value === "question") {
    message.style.display = "block";
    date.style.display = "none";
    timed.style.display = "none";
  }
  if (selector.value === "apply") {
    message.style.display = "block";
    date.style.display = "none";
    timed.style.display = "none";
  }
  if (selector.value === "") {
    message.style.display = "none";
    timed.style.display = "none";
    date.style.display = "none";
    people.style.display = "none";
    time.style.display = "none";
  }
});

// form.onsubmit = function (event) {
//   event.preventDefault();
//   if (selector.value === "reserve") {
//     alert(
//       `Votre réservation du ${date.value} à ${time.value} pour ${people.value} personne(s) a bien été prise en compte. Nous vous envoyons un mail de confirmation à l'adresse ${email.value}. Merci de votre intérêt pour la Punta Cana, on se retrouve bientôt autour d'un mojito !`
//     )
//   } else if(selector.value === "event") {
//     alert(`Votre demande a bien été prise en compte. On vous re-contacte au plus vite à l'adresse ${email.value} ou par téléphone au ${phone.value}. Merci de votre intérêt pour la Punta Cana, on se retrouve bientôt autour d'un mojito !`
//     )
//   } else if(selector.value === "apply") {
//     alert(
//       `Votre candidature a bien été envoyée. On vous re-contacte au plus vite à l'adresse ${email.value} ou par téléphone au ${phone.value}. Merci de votre intérêt pour la Punta Cana, on se retrouve bientôt autour d'un mojito !`
//     )
//   } else {
//     alert(
//       "Votre message a bien été envoyé ! Merci de votre intérêt pour la Punta Cana, on se retrouve bientôt autour d'un mojito !"
//     )}
// };
// end of contact section


const formButton = document.getElementById('formButton');
const overlay = document.getElementById('overlay');
const btnClose = document.getElementById('btnClose');

const reserve = `Votre réservation du ${date.value} à ${time.value} pour ${people.value} personne(s) a bien été prise en compte. Nous vous envoyons un mail de confirmation à l'adresse ${email.value}. Merci de votre intérêt pour la Punta Cana, on se retrouve bientôt autour d'un mojito !`;
const events = `Votre demande a bien été prise en compte. On vous re-contacte au plus vite à l'adresse ${email.value} ou par téléphone au ${phone.value}. Merci de votre intérêt pour la Punta Cana, on se retrouve bientôt autour d'un mojito !`;
const apply = `Votre candidature a bien été envoyée. On vous re-contacte au plus vite à l'adresse ${email.value} ou par téléphone au ${phone.value}. Merci de votre intérêt pour la Punta Cana, on se retrouve bientôt autour d'un mojito !`;
const basic = "Votre message a bien été envoyé ! Merci de votre intérêt pour la Punta Cana, on se retrouve bientôt autour d'un mojito !";
const popupR = document.getElementById("popup-text_reserve");
const popupE = document.getElementById("popup-text_events");
const popupQ = document.getElementById("popup-text_question");
const popupA = document.getElementById("popup-text_apply");


document.getElementById("popup-text_reserve").textContent = reserve
document.getElementById("popup-text_events").textContent = events
document.getElementById("popup-text_question").textContent = basic
document.getElementById("popup-text_apply").textContent = apply





formButton.addEventListener("click", function openModal(event) {
  event.preventDefault();
  if(selector.value === "reserve") {
    popupE.style.display ='none';
    popupA.style.display ='none';
    popupQ.style.display='none';
    overlay.style.display='block'
  } else if(selector.value === "events") {
    popupR.style.display ='none';
    popupA.style.display ='none';
    popupQ.style.display='none';
    overlay.style.display='block'
  } else if(selector.value === "apply") {
    popupR.style.display ='none';
    popupE.style.display ='none';
    popupQ.style.display='none';
    overlay.style.display='block'
  } else {
    popupR.style.display ='none';
    popupE.style.display ='none';
    popupA.style.display='none';
    overlay.style.display='block'
  }
})

btnClose.addEventListener("click", function closeModal() {
  overlay.style.display='none';
})

