//criando uma função
function tocaSomPom (){
    document.querySelector('#som_tecla_pom').play();
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
    listaDeTeclas[contador].onclick = tocaSomPom;

    //incrementando o contador
    contador = contador + 1;

    console.log(contador);
}