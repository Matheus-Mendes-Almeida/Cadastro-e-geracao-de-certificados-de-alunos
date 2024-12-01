if(localStorage.getItem("token") == null){
    alert("Você precisa estar logado para acessar esta página");
    window.location.href = "./assets/html/signin.html";
}

let userLogado = JSON.parse(localStorage.getItem("UserLogado"));

let logado = document.querySelector("#logado");


function sair(){
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
    window.location.href = "./assets/html/signin.html";
}