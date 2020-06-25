export default class EnglishPuzzleButtonsBlock {
  getButtonsBlock() {
    const buttonsBlock = document.createElement('template');
    const targetNode = document.querySelector('.english-puzzle-main');
    buttonsBlock.innerHTML = `
      <div class="english-puzzle-main__btn-block">
        <button class="english-puzzle-main__btn-block__check blocked">Проверить</button>
        <button class="english-puzzle-main__btn-block__dnt-know">Не знаю :(</button>
        <button class="english-puzzle-main__btn-block__continued blocked">Продолжить</button>           
      </div>
    `.trim();
    targetNode.append(buttonsBlock.content);
    return buttonsBlock.content;
  }

  checkBtnHandler() {
    let count = 0;
    const resultCells = document.querySelectorAll('.english-puzzle-main__active-phrase__wrapper__element');
    const continuedBtn = document.querySelector('.english-puzzle-main__btn-block__continued');
    const dntKnowBtn = document.querySelector('.english-puzzle-main__btn-block__dnt-know');
    resultCells.forEach((el, index) => {
      if (Number(el.getAttribute('index')) === index) {
        el.style.backgroundColor = 'green';
        count += 1;
      } else {
        el.style.backgroundColor = 'red';
      }
    });
    if (count === resultCells.length) {
      continuedBtn.classList.remove('blocked');
      dntKnowBtn.classList.add('blocked');
    }
  }

  dntKnowBtnHandler() {
    const cellsResultBlock = document.querySelectorAll('.english-puzzle-main__result-block__element');
    const words = document.querySelectorAll('.english-puzzle-main__active-phrase__wrapper__element');
    const checkBtn = document.querySelector('.english-puzzle-main__btn-block__check');
    words.forEach(el => {
      el.parentNode.removeChild(el);
    });
    words.forEach(el => {
      const index = el.getAttribute('index');
      cellsResultBlock[index].append(el);
    });
    checkBtn.classList.remove('blocked');
  }
}
