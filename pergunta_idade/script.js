document.getElementById('CalcularBtn').onclick = function (){
    let idade = prompt('digite a sua idade:');
    //criar variavel ano atual
    let anoAtual = 2026;
    //cálculo
    let anoNascimento = anoAtual - idade;

    alert(`você nasceu em: ${anoNascimento}`);
};
//DOM: Document Object Model

/*COMANDOS DOM PRINCIPAIS
document.getElementById('id'); - pega o elemento pelo id
document.querySelector('.class'); - pega primeiro com classe
document.querySelectorAll('tag'); - pega todos os elementos
element.innerHTML = 'texto'; - mudança de conteudo HTML
element.onclick = function(){}; - adiciona clique
*/