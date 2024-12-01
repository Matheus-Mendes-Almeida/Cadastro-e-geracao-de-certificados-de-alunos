let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

function entrar(){
  let usuario = document.querySelector('#usuario')
  let userLabel = document.querySelector('#userLabel')

  let email = document.querySelector('#email')
  let emailLabel = document.querySelector('#emailLabel')
  
  let senha = document.querySelector('#senha')
  let senhaLabel = document.querySelector('#senhaLabel')
  
  let msgError = document.querySelector('#msgError')
  let listaUser = []
  
  let userValid = {
    nome: null,
    user: null,
    email: null,
    senha: null
  }
  
  listaUser = JSON.parse(localStorage.getItem('listaUser'))
  
  listaUser?.forEach((item) => {
    if(usuario.value == item.userCad && email.value == item.emailCad && senha.value == item.senhaCad){
       
      userValid = {
         nome: item.nomeCad,
         user: item.userCad,
         email: item.emailCad,
         senha: item.senhaCad
       }
      
    }
  })
   
  if(usuario.value == userValid.user && senha.value == userValid.senha && email.value == userValid.email){
    window.location.href = '../../index.html'
    
    let mathRandom = Math.random().toString(16).substr(2)
    let token = mathRandom + mathRandom
    
    localStorage.setItem('token', token)
    localStorage.setItem('userLogado', JSON.stringify(userValid))
  } else {
    userLabel.setAttribute('style', 'color: red')
    usuario.setAttribute('style', 'border-color: red')
    emailLabel.setAttribute('Style','color: res')
    email.setAttribute('style', 'border-color: red')
    senhaLabel.setAttribute('style', 'color: red')
    senha.setAttribute('style', 'border-color: red')
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = 'Usuário ou senha incorretos'
    usuario.focus()
  } 
}
