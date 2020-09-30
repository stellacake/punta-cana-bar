

// floating contact button

// end of floating contact button

// events section
var polaroids = document.querySelectorAll('.events-week-day');

polaroids.forEach(item => {
  const randomRotation = Math.floor(Math.random() * (6 - -6 + 1) + -6);
  item.style.transform = `rotate(${randomRotation}deg)`
})
// end of events section

// contact section
button = document.getElementById("button");
button.addEventListener("click", () => alert("Votre message a bien été envoyé ! Merci de votre intérêt pour la Punta Cana, on se retrouve bientôt autour d'un mojito !"))
// end of contact section