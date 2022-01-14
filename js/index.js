let email = document.querySelector('#email')
let nome = document.querySelector('#nome')
let comentario = document.querySelector('#comentario')

let emailOk = false
let nomeOk = false
let comentarioOk = false

function validaEmail(){

    let txt = document.querySelector('#txtEmail')

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txt.innerHTML = 'Email inválido'
        txt.style.color = 'red'
        emailOk = false
    }else{
        txt.innerHTML = 'Email válido'
        txt.style.color = 'green'
        emailOk = true
    }
}

function validaNome(){
    let txt = document.querySelector('#txtNome')
    if (nome.value.length < 3){
        txt.innerHTML = 'Nome inválido'
        txt.style.color = 'red'
        nomeOk = false
    }if (nome.value.length >=    3){

        txt.innerHTML = 'Nome válido'
        txt.style.color = 'green'
        nomeOk = true
    } 
}

function validaComentario(){
    let txt = document.querySelector('#txtCom')
    if(comentario.value.length < 5){
        txt.innerHTML = "Comentário inválido"
        txt.style.color = 'red'
        txt.style.display = 'block'
        comentarioOk = false
    }else if(comentario.value.length > 100){
        txt.innerHTML = "Comentário muito grande, digite no máximo 100 caracteres"
        txt.style.color = 'red'
        txt.style.display = 'block'
        comentarioOk = false
    }else{
        txt.style.display = 'none'
        comentarioOk = true
    }
}

function enviar(){
    let txt1 = document.querySelector('#txtEmail')
    let txt2 = document.querySelector('#txtNome')
    let txt3 = document.querySelector('#txtComentario')

    if (emailOk == true && nomeOk == true && comentarioOk == true){
        alert('Formulário enviado com sucesso!')
        email.value = ""
        nome.value = ""
        comentario.value = ""

        txt1.innerHTML=""
        txt2.innerHTML=""
        txt3.innerHTML=""
    }else{  
        alert('Preencha o formulário corretamente.')
    }
}