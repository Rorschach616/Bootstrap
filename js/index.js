let email = document.querySelector('#email')
let nome = document.querySelector('#nome')
let comentario = document.querySelector('#comentario')

function validaNome(){
    let txt = document.querySelector('#txtNome')
    if (nome.value.length < 3){
        txt.innerHTML = 'Nome inválido'
        txt.style.color = 'red'
    }if (nome.value.length >=    3){

        txt.innerHTML = 'Nome válido'
        txt.style.color = 'green'
    } 

}