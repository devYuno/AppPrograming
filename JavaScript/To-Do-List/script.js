var lista = [];

const print = () => {
    let folha = document.getElementById('folha');
    let texto = document.getElementById('text-box').value; // peguei o texto do text box
    var list = document.getElementById('list'); // div da lista de tarefas

    let div = document.createElement('div'); // criei a div da tarefa

    let checkbox = document.createElement('input'); // criando um checkbox
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox')

    let titulo = document.createElement('h3');
    titulo.textContent = texto;
   

    div.appendChild(checkbox);
    div.appendChild(titulo);

    div.classList.add('item');

    
    let alturaAtual = parseInt(window.getComputedStyle(folha).height, 10)
    folha.style.height = (alturaAtual + 55) + 'px';

    list.appendChild(div);
}