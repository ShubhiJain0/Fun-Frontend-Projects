const colors = ["#f95959", "#f70776", "#00bbf0", "#fdb44b", "#005792"];
let container = document.querySelector(".container");
const createConfetti=function(){
  let confettiElement = document.createElement("div");

  confettiElement.classList.add("confetti");
  confettiElement.style.left=`${Math.random()*100}vw`;

  confettiElement.style.backgroundColor=colors[Math.floor(Math.random()*colors.length)];
  confettiElement.style.animationDuration=`${Math.random()*5 +2}s`;
  confettiElement.style.transform =`rotate(${Math.random()*360}deg)`;
  container.appendChild(confettiElement);
  setTimeout(()=>{
    confettiElement.remove();
  },5000)
}

setInterval(createConfetti, 50)

const happy = document.createElement("div");

happy.innerHTML = "Happy Birthday!";

happy.classList.add("center");

container.appendChild(happy);

