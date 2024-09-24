//! #1
function handleButtonClick(buttonId, message) {
  const button = document.querySelector(`#${buttonId}`);
  button.addEventListener('click', () => {
    console.log(message);
  });
}
handleButtonClick('myButton', 'Button clicked!');

//! #2
function trackMousePosition() {
  document.addEventListener('mousemove', (event) => {
    console.log(`Позиція миші: X = ${event.clientX}, Y = ${event.clientY}`);
  });
}

trackMousePosition();


//! #3 in index.html