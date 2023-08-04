function tocaSomPom (){
    document.querySelector('#som_tecla_pom').play();
}

//document.querySelector('.tecla_pom').onclick = tocaSomPom;
// onclick é um atributo, portanto devemos atribuir um valor a ele utilizando o =
//a função está sem o () pois se não ela seria executada imediatamente, não guardada dentro do onclick

const listaDeTeclas = document.querySelectorAll('.tecla')

listaDeTeclas[0].onclick = tocaSomPom;