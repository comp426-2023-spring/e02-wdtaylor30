// base url is constant
const BASE_URL = 'http://localhost:5000/app/';

// dom elements
const game = document.getElementsByName('game');
const opponent = document.getElementsByName('opponent');
const playerSelect = document.getElementById('player');
const playBtn = document.getElementById('play');
const resetBtn = document.getElementById('reset');

// event listeners
playBtn.addEventListener('click', playGame);
resetBtn.addEventListener('click', resetGame);

// functions
async function playGame() {
    const gameType = getSelectedValue(game);
    const opponentType = getSelectedValue(opponent)
    const isComputer = opponentType == 'computer';
    let play;

    if (!isComputer) {
        play = getSelectedValue(playerSelect.children);
    }

    // make API call to play the game
    const result = await fetch(`${BASE_URL}${gameType}?opponent=${isComputer}&play=${play}`);
    const data = await result.json();

    // update result text
    resultText.innerHTML = data.result;
  }
  
  function resetGame() {
    // reset radio buttons
    const radioButtons = document.querySelectorAll('input[type=radio]');
    radioButtons.forEach(button => button.checked = false);

    // reset form
    // document.getElementById('game-form').reset();
    // resultText.innerHTML = '';
  }
  
  function getSelectedValue(elements) {
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].checked) {
        return elements[i].value;
      }
    }
  }
  
  function isCheckboxChecked(elements, value) {
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].checked && elements[i].value === value) {
        return true;
      }
    }
  
    return false;
  }
  
