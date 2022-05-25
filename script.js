window.onload = function () { 

    changeColor ();
    selectColor(); 
    clearBoard ();
    
}

//Cor inicial padrão black;
let inicialColor = document.getElementById('colorBlack');
inicialColor.className ='color selected';

//Selecionar cor;
function selectColor() {
    let paletteColors = document.querySelectorAll('.color');
    
    for (let index = 0; index < paletteColors.length; index += 1) {
        paletteColors[index].addEventListener('click', function (event) {
            console.log('eventoSelectColor');
            document.querySelector('.selected').classList.remove('selected');
            event.target.classList.add('selected');
            
           // console.log(event.target.classList);
           // console.log(event.target.className);
        });
    }
}
              
          
function changeColor () {
                
    let selectPixel = document.querySelectorAll('#pixel-board>.pixel');
    for (let index = 0; index < selectPixel.length; index += 1) { 
        selectPixel[index].addEventListener('click', function (event) {
            console.log('eventoChangeColor');
            let selectedColor = document.querySelector('.selected');
            let colorBackground = window
            .getComputedStyle(selectedColor, null)
            .getPropertyValue('background-color');
            
            event.target.style.backgroundColor = colorBackground;  
        })              
    }
}
            
 //Limpar pixel por pixel, mas adiciona dois eventos ao mesmo elemento. Obs. Pesquisar como resolver.          
// function clearBoard () {
                
//     let clearButton = document.querySelector('#clear-board>button');
//     // console.log(clearButton);
//     clearButton.addEventListener('click' , function (){
//         let selectPixel = document.querySelectorAll('#pixel-board>.pixel');
//         for (let index = 0; index < selectPixel.length; index += 1) { 
//             selectPixel[index].addEventListener('click', function (event) {
//                 console.log('eventoClean');
//                 event.target.style.backgroundColor = 'white';          
//                 // event.target.removeEventListener('click' , changeColor);
//             })              
//         }
//     })   
// }

//limpa todo o Board
function clearBoard () {
    let clear = document.getElementById("clear-board");
    clear.addEventListener('click', function () {
        console.log('eventoClear');
        let pixel = document.getElementsByClassName('pixel');
        for (let index = 0; index < pixel.length; index += 1){
            pixel[index].style.backgroundColor = 'white';
        }
    });
}



