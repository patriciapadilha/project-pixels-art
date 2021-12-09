window.onload = function () { 
    
    //Cor inicial padrão black;
    let inicialColor = document.getElementById('colorBlack');
    inicialColor.className ='color selected';
    //Selecionar cor;

    function selectColor() {
        let paletteColors = document.querySelectorAll('.color');
        
        for (let index = 0; index < paletteColors.length; index += 1) {
            paletteColors[index].addEventListener('click', function (event) {
               for (let index = 0; index < paletteColors.length; index += 1) {
                  if ( event.target.className === 'color'  && event.target.className === 'selected'){
                    event.target.className = 'color';
                  } else {
                    event.target.className = 'color selected';
                  }
               }
            
              console.log(event.target.classList);
              console.log(event.target.className);
            });
        }
    }
    
    selectColor();
    
    
  function changeColor () {

      let selectPixel = document.querySelectorAll('#pixel-board>.pixel');
       for (let index = 0; index < selectPixel.length; index += 1) { 
          selectPixel[index].addEventListener('click', function (event) {
              
              let selectedColor = document.querySelector('.selected');
              let colorBackground = window
              .getComputedStyle(selectedColor, null)
              .getPropertyValue('background-color');
              
              event.target.style.backgroundColor = colorBackground;  
            })
              
        }
    }
        
    changeColor ()   
        
    function cleanBoard () {

        let clearButton = document.querySelector('#clear-board>button');
        // console.log(clearButton);
        clearButton.addEventListener('click' , function (){
            let selectPixel = document.querySelectorAll('#pixel-board>.pixel');
            for (let index = 0; index < selectPixel.length; index += 1) { 
               selectPixel[index].addEventListener('click', function (event) {
              
                event.target.style.backgroundColor = 'white';  
               })
              
            }
        })

    }

    cleanBoard ()
        
        
    
}
