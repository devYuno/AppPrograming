let title = document.getElementById('title').innerHTML
console.log(title)

const receberTexto = () => {
    let inputText = document.getElementById('TextBox').value;
    console.log(inputText);
}

const trocarCor = (divID) => {
    let quadrado = document.getElementById(divID);

    if (divID.classList.value('ok')) {
        quadrado.classList.remove('ok');
        quadrado.classList.add('bad');
    }

    if (divID.getElementsByClassName('bad')) {
        quadrado.classList.remove('bad');
        quadrado.classList.add('ok');
    }
    
}