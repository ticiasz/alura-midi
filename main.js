//criando uma função
// function tocaSomPom (){
//     document.querySelector('#som_tecla_pom').play();
// }

//função com parâmetro
function tocaSom (idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

//document.querySelector('.tecla_pom').onclick = tocaSomPom;
//onclick é um atributo, portanto devemos atribuir um valor a ele utilizando o =
//a função está sem o () pois se não ela seria executada imediatamente, não guardada dentro do onclick

//criando uma lista ao selecionar vários seletores
const listaDeTeclas = document.querySelectorAll('.tecla')

//criando uma variável
let contador = 0;

//percorrendo uma lista
//enquanto o contador for menor que o tamanho da lista de teclas
while (contador < listaDeTeclas.length){

    //criando uma constante para um valor muito usado, "limpando" o código
    const tecla = listaDeTeclas[contador];

    //acessando uma das classes do botão
    const instrumento = tecla.classList[1];

    tecla.onclick = function (){
        tocaSom();
    }
    //criando uma função anônima, pois se colocasse direto a função com um parâmetro ele iria rodar o som sem o usuário ter feito nada

    //incrementando o contador
    contador = contador + 1;

    console.log(contador);
}