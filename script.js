const pixelBoard = document.getElementById('pixel-board');

const btnCreateBoard = document.getElementById('generate-board');

const boardSize = document.getElementById('board-size');

const colorPalette = document.getElementById('color-palette');

const btnClear = document.getElementById('clear-board');

const colorsQuantity = 50;

const colors = ['#000000', '#ffff'];

// Gerar cores aleatórias para a paleta
function randomColor() {
    return '#' + parseInt((Math.random() * 0xFFFFFF))
    .toString(16)
    .padStart(6, '0');
}

while (colors.length < colorsQuantity) {
    const newColor = randomColor();
    if(!colors.includes(newColor)) colors.push(newColor);
}

//Criando paleta com as cores aleatóras
function createElementColor(backgroundColor) {
    const element = document.createElement('div');
    element.className = 'color';
    element.style = `background-color: ${backgroundColor}`;
    return element;
}

// percorrendo o array de cores
for (let i = 0; i < colors.length; i += 1) {
    const element = createElementColor(colors[i]);
  
    if (i === 0) element.classList.add('selected');
  
    colorPalette.appendChild(element);
}

function createElementBoardRow() {
    const element = document.createElement('div');
    element.className = 'board-row';
    return element;
}

function createElementPixel() {
    const element = document.createElement('div');
    element.className = 'pixel';
    return element;
}
  
function generateBoard(n) {
for (let i = 0; i < n; i += 1) {
    const boardRow = createElementBoardRow();
    for (let j = 0; j < n; j += 1) {
    const pixel = createElementPixel();
    boardRow.appendChild(pixel);
    }
    pixelBoard.appendChild(boardRow);
}
}
  
generateBoard(5);

//Selecionar cor;
function selectColor() {
    let paletteColors = document.querySelectorAll('.color');
    
    for (let index = 0; index < paletteColors.length; index += 1) {
        paletteColors[index].addEventListener('click', function (event) {
            console.log(paletteColors[index]);
            document.querySelector('.selected').classList.remove('selected');
            event.target.classList.add('selected');
        });
    }
};

selectColor();
              
let colorSelected = document.getElementsByClassName('selected');

function changeColor(event){
    let currentColor = colorSelected[0].style.backgroundColor
    if (event.target.classList.contains('pixel')) {
        event.target.style.backgroundColor = currentColor
    }
}

pixelBoard.addEventListener('click', changeColor);
            
function clearBoard () {
    console.log('eventoClear');
    let pixel = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixel.length; index += 1){
        pixel[index].style.backgroundColor = 'white';
    }
};

btnClear.addEventListener('click', clearBoard);

function deleteBoardContent() {
    while (pixelBoard.firstChild) {
      pixelBoard.firstChild.remove();
    }
}

function generateNewBoard() {
    const boardSize = document.getElementById('board-size');
    console.log(boardSize.value);
    if (boardSize.value >= 5 && boardSize.value <= 50) {
        deleteBoardContent();
      generateBoard(boardSize.value);
    } else {
      alert('Board inválido, Selecione de 5 a 50!');
    }
  }
  
  btnCreateBoard.addEventListener('click', generateNewBoard);

