const buttonEl = document.getElementById('my-button');
const buttonEl2 = document.getElementById('my-button2');

const clickHandler = function() {
  let count = 0;

  return function() {
      count++;
      this.textContent = `Clicks: ${count}`;
  };
};

// adds same closure to every button

const buttons = document.getElementsByTagName('button');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', clickHandler());
}
// buttonEl.addEventListener('click', clickHandler());
