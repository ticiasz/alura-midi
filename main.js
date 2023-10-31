//criando uma função
// function tocaSomPom (){
//     document.querySelector('#som_tecla_pom').play();
// }

//função com parâmetro
// function tocaSom (idElementoAudio){
//     document.querySelector(idElementoAudio).play();
// }

function tocaSom (seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if (elemento === null){
        alert("Elemento não encontrado!");
    }

    if (elemento != null){
        if (elemento.localName === 'audio'){
            elemento.play();
        }
    }
}

//document.querySelector('.tecla_pom').onclick = tocaSomPom;
//onclick é um atributo, portanto devemos atribuir um valor a ele utilizando o =
//a função está sem o () pois se não ela seria executada imediatamente, não guardada dentro do onclick

//criando uma lista ao selecionar vários seletores
const listaDeTeclas = document.querySelectorAll('.tecla')

//criando uma variável
//let contador = 0;

//percorrendo uma lista
//enquanto o contador for menor que o tamanho da lista de teclas
/*while (contador < listaDeTeclas.length){

    //criando uma constante para um valor muito usado, "limpando" o código
    const tecla = listaDeTeclas[contador];

    //acessando a segunda classe do botão
    const instrumento = tecla.classList[1];

    //template string - "abrindo" espaço de código dentro de uma string
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function (){
        tocaSom(idAudio);
    }
    //criando uma função anônima, pois se colocasse direto a função com um parâmetro ele iria rodar o som sem o usuário ter feito nada

    //incrementando o contador
    contador = contador + 1;

    //imprimindo o valor do contador
    console.log(contador);
}*/

//para
//faz a mesma coisa que o while, mas de uma forma mais enxuta
for (let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function (){
        tocaSom(idAudio);
    }

    //chama a função quando uma tecla é pressionada
    tecla.onkeydown = function (evento){
        //o evento vai receber o conjunto de informações atreladas ao que chamou aquela função, no caso, a tecla que pressionamos

        console.log(evento);

        //se o código da tecla for "space", adiciona o "ativa"
        if (evento.code == "Space" || evento.code == "Enter"){
            //adiciono a classe "ativa" na tecla
            tecla.classList.add("ativa");
        }
    }

    tecla.onkeyup = function (){
        //retira a classe "ativa" quando a tecla não é mais pressionada
        tecla.classList.remove("ativa");
    }
}
//é uma boa prática deixar uma linha vazia no final do código
