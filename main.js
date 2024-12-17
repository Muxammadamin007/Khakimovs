let clickButton = document.getElementById('click');
let bar = document.getElementById('main');
let isRotating = false;
let clear = document.getElementById('clear')

clickButton.addEventListener('click', () => {
  if (!isRotating) {
    isRotating = true;
    continuousRandomRotation();
    
    // Set a random stop time between 1 second and 2 seconds
    const stopTime = Math.random() * 1000 + 1000; // Random number between 1000ms (1 sec) and 2000ms (2 sec)
    setTimeout(() => {
      isRotating = false; // Stop the rotation
    }, stopTime);
  }
});

let currentDegree = 0;

// Function to handle continuous random rotation
function continuousRandomRotation() {
  if (!isRotating) return; // Exit the function if `isRotating` is false

  const randomRotation = Math.floor(Math.random() * 360); // Random rotation increment
  const duration = Math.random() * 3 + 1; // Random duration (between 1 to 4 seconds)

  currentDegree += randomRotation; // Increment the current degree

  bar.style.transition = `transform 2s linear`;
  bar.style.transform = `rotate(${currentDegree}deg)`;

  // Wait for the current rotation to finish, then apply the next one
  setTimeout(() => {
    if (isRotating) continuousRandomRotation();
  }, duration * 1000);
}
function clicked() {
  let target = target.div
}



function delet(event){
  let clickedButton = event.target;
    clickedButton.parentNode.remove();
    
}

let qq = document.getElementById('qq');
let qqq = document.getElementById('qqq');
qqq.style.display = 'none';
qq.addEventListener('click',() => {
  if (qqq.style.display=='none') {
    qqq.style.display = 'flex';

  } else {
    qqq.style.display = 'none';

  }
})