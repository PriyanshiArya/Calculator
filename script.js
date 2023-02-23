let screen = document.getElementById('screen');
var buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        if(buttonText == '*'){
            screenValue += buttonText;
            screen.value +=buttonText;
        }
        else if(buttonText == '='){
            screen.value = eval(screenValue)

        }
        else if(buttonText == 'C'){
            screenValue = ''
            screen.value = screenValue;
            
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}