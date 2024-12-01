const auth = firebase.auth();

let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

function login(email, password) {
  auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
          console.log('Usuário logado:', userCredential.user);
      })
      .catch((error) => {
          console.error('Erro ao fazer login:', error.message);
      });
}