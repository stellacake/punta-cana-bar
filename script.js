

// Section Event 
var polaroids = document.querySelectorAll('.events-week-day');

polaroids.forEach(item => {
  const randomRotation = Math.floor(Math.random() * (6 - -6 + 1) + -6);
  
  item.style.transform = `rotate(${randomRotation}deg)`
})

// Fin Section Event