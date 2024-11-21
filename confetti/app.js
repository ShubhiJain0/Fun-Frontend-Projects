const confettiContainer = document.getElementById("confetti-container");
const confettiColors = ["#FF0A0A", "#FFBF00", "#08C2A8", "#3F51B5", "#FF4081"];

// Function to generate confetti
function createConfetti() {
  const confetti = document.createElement("div");
  confetti.classList.add("confetti");
  confetti.style.left = `${Math.random() * 100}vw`;
  confetti.style.backgroundColor =
    confettiColors[Math.floor(Math.random() * confettiColors.length)];
  confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
  confetti.style.transform = `rotate(${Math.random() * 360}deg)`;

  confettiContainer.appendChild(confetti);

  // Remove confetti after animation completes
  setTimeout(() => {
    confetti.remove();
  }, 5000);
}

// Generate confetti at intervals
setInterval(createConfetti, 100);
