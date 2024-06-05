const btnMenu = document.getElementById('btn-menu');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMenu.addEventListener('click', toggleMenu);
btnMenu.addEventListener('touchstart', toggleMenu);

//----------------------------------------------------------------//
//Login e Senha

//VALIDAÇÃO DE LOGIN

function validar(){
    // Declarando as variáveis
    let usuario = document.getElementById("usuario").value.toLowerCase(); // Obtém o valor do campo de usuário em letras minúsculas
    let senha = document.getElementById("senha").value; // Obtém o valor do campo de senha

    // Verifica se o usuário é "admin" e a senha é "12345"
    if(usuario === "admin" && senha === "12345"){
        window.open("quiz.html"); // Abre a página "quiz.html"
    } else {
        alert("Usuário ou senha inválidos"); // Exibe um alerta se o usuário ou a senha forem inválidos
    }
}

//-------------------------------------------------------------------//
//DOUBLE CLICK PARA CORES

let colors = ['#white', '#9ea9ff', '#64a7c6'];
let colorIndex = 0;

document.body.style.backgroundColor = colors[colorIndex]; // Define a cor inicial

document.body.addEventListener('dblclick', function() {
    colorIndex++;
    if (colorIndex >= colors.length) {
        colorIndex = 0;
    }
    document.body.style.backgroundColor = colors[colorIndex];
});