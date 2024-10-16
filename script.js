//Calculator Programm

const display = document.getElementById('display')

function appendToDisplay(input){
    display.value += input;
}

function clearDisplayScreen(){
    display.value = '';
}

function calculate(){
    const expression = display.value
    const newExpression = expression.replace('x','*')
    try {
        display.value = eval(newExpression)
    }catch(error){
        display.value = 'Error'
    }
    display.style.letterSpacing = 0;
    
}