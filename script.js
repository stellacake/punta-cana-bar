/* burger section */

const burgerMenuElem = document.getElementsByClassName("burgerMenu-elem");
const checkbox = document.getElementById("checkbox");

//burgerMenuElem.map((e, i) => e.addEventListener("click", () => checkbox.checked = false))
for (let i = 0; i < burgerMenuElem.length; i++) {
  burgerMenuElem[i].addEventListener("click", function() {
    checkbox.checked = false;
  });
}
/* end burger section */


// floating contact button

let contactButton = document.getElementById("contact-button");

const scrollPosition = window.scrollY;
console.log(contactButton.style.top, scrollPosition);


// document.addEventListener(scrollY, fade() {
//   if (scrollY >= 400) {
//     contactButton.classList.add("floating-contact-button-fade-out");
//   } else {
//     contactButton.classList.remove("floating-contact-button-fade-out");
//   }
// });

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

form.onsubmit = function (event) {
  event.preventDefault();
  if (selector.value === "reserve") {
    alert(
      `Votre réservation du ${date.value} à ${time.value} pour ${people.value} personne(s) a bien été prise en compte. Nous vous envoyons un mail de confirmation à l'adresse ${email.value}. Merci de votre intérêt pour la Punta Cana, on se retrouve bientôt autour d'un mojito !`
    )
  } else if(selector.value === "event") {
    alert(`Votre demande a bien été prise en compte. On vous re-contacte au plus vite à l'adresse ${email.value} ou par téléphone au ${phone.value}. Merci de votre intérêt pour la Punta Cana, on se retrouve bientôt autour d'un mojito !`
    )
  } else if(selector.value === "apply") {
    alert(
      `Votre candidature a bien été envoyée. On vous re-contacte au plus vite à l'adresse ${email.value} ou par téléphone au ${phone.value}. Merci de votre intérêt pour la Punta Cana, on se retrouve bientôt autour d'un mojito !`
    )
  } else {
    alert(
      "Votre message a bien été envoyé ! Merci de votre intérêt pour la Punta Cana, on se retrouve bientôt autour d'un mojito !"
    )}
};
// end of contact section

//carousel
const track = document.querySelector(".carousel_track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel_button--right");
const prevButton = document.querySelector(".carousel_button--left");
const dotsNav = document.querySelector(".carousel_nav");
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

//arrange the slides next to one another
slides[0].style.left = slideWidth * 0 + "px";
slides[1].style.left = slideWidth * 1 + "px";
slides[2].style.left = slideWidth * 2 + "px";

// const setSlidePosition = (slide, index) => {
//   slide.style.left = slideWidth * index + "px";
// };
// slide.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("current-slide");
  targetDot.classList.add("current-slide");
};

// const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
//     if (targetIndex === 0) {
//       prevButton.classList.add("is-hidden");
//       nextButton.classList.remove("is-hidden");
//     } else if (targetIndex === slides.length - 1) {
//       prevButton.classList.remove("is-hidden");
//       nextButton.classList.add("is-hidden");
//     } else {
//       prevButton.classList.remove("is-hidden");
//       nextButton.classList.add("is-hidden");
//   }

// when I click left move slides to the left
prevButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotsNav.querySelector(".current-slide");
  const prevDot = currentDot.previousElementSibling;
  //   const prevIndex = slides.findIndex((slides) => slide === prevSlide);
  updateDots(currentDot, prevDot);
  moveToSlide(track, currentSlide, prevSlide);
  //   hideShowArrows(slides, prevButton, nextButton, targetIndex);
});
// when I click right move slides to the right
nextButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsNav.querySelector(".current-slide");
  const nextDot = currentDot.nextElementSibling;
  //   const nextIndex = slides.findIndex((slides) => slide === nextSlide);
  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
  //   hideShowArrows(slides, prevButton, nextButton, targetIndex);
});

//when I click the nav indicator, more to that slide

dotsNav.addEventListener("click", (e) => {
  //what indicator was clicked on?
  const targetDot = e.target.closest("button");

  if (!targetDot) return;

  const currentSlide = track.querySelector(".current-slide");
  const currentDot = dotsNav.querySelector(".current-slide");
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
  // hideShowArrows(slides, prevButton, nextButton, targetIndex)

  //   if (targetIndex === 0) {
  //     prevButton.classList.add("is-hidden");
  //     nextButton.classList.remove("is-hidden");
  //   } else if (targetIndex === slides.length - 1) {
  //     prevButton.classList.remove("is-hidden");
  //     nextButton.classList.add("is-hidden");
  //   } else {
  //     prevButton.classList.remove("is-hidden");
  //     nextButton.classList.add("is-hidden");
  //   }
});