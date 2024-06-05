const btnMenu = document.getElementById('btn-menu');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMenu.addEventListener('click', toggleMenu);
btnMenu.addEventListener('touchstart', toggleMenu);

// QUIZ - FUNCIONAMENTO 
// Perguntas e respostas

const questions = [
    {
        question: "Qual é a principal causa do branqueamento dos corais?",
        answers: [
        { text: "Poluição do ar", correct: false },
        { text: "Aquecimento dos oceanos", correct: true },
        { text: "Predadores naturais", correct: false },
        { text: "Turismo excessivo", correct: false },
        ],
    },
    {
        question: "Qual porcentagem das espécies marinhas vivem em recifes de corais?",
        answers: [
        { text: "10%", correct: false },
        { text: "25%", correct: true },
        { text: "50%", correct: false },
        { text: "75%", correct: false },
        ],
    },
    {
        question: "O que são os pólipos de coral?",
        answers: [
        { text: "Pequenos peixes que vivem nos corais", correct: false },
        { text: "Microalgas que ajudam na fotossíntese", correct: false },
        { text: "Organismos que formam a estrutura do coral", correct: true },
        { text: "Pedras que protegem os corais", correct: false },
        ],
    },
    {
        question: "Qual é uma das técnicas usadas para restaurar recifes de corais?",
        answers: [
        { text: "Pesca seletiva", correct: false },
        { text: "Cultivo de corais em viveiros", correct: true },
        { text: "Uso de produtos químicos", correct: false },
        { text: "Despejo de areia", correct: false },
        ],
    },
    {
        question: "Qual é a maior ameaça local aos recifes de corais?",
        answers: [
        { text: "Navegação", correct: false },
        { text: "Pesca predatória", correct: true },
        { text: "Surf", correct: false },
        { text: "Construção de resorts", correct: false },
        ],
    },
    {
        question: "Qual é o tipo de poluição mais comum nos oceanos?",
        answers: [
        { text: "Poluição sonora", correct: false },
        { text: "Poluição de plástico", correct: true },
        { text: "Poluição de óleo", correct: false },
        { text: "Poluição térmica", correct: false },
        ],
    },
    {
        question: "Quantos milhões de toneladas de plástico entram nos oceanos a cada ano?",
        answers: [
        { text: "1 milhão", correct: false },
        { text: "2 milhões", correct: false },
        { text: "8 milhões", correct: true },
        { text: "20 milhões", correct: false },
        ],
    },
    {
        question: "O que são microplásticos?",
        answers: [
        { text: "Pequenos peixes que se alimentam de plástico", correct: false },
        { text: "Partículas de plástico menores que 5mm", correct: true },
        { text: "Organismos que decompõem plástico", correct: false },
        { text: "Fibras naturais encontradas no oceano", correct: false },
        ],
    },
    {
        question: "Qual é uma maneira eficaz de reduzir a poluição plástica nos oceanos?",
        answers: [
        { text: "Usar mais embalagens plásticas", correct: false },
        { text: "Reciclar corretamente e reduzir o uso de plásticos", correct: true },
        { text: "Jogar plástico no lixo comum", correct: false },
        { text: "Queimar plásticos na praia", correct: false },
        ],
    },
    {
        question: "O que é a Grande Mancha de Lixo do Pacífico?",
        answers: [
        { text: "Uma área de corais mortos", correct: false },
        { text: "Uma ilha natural feita de lixo", correct: false },
        { text: "Uma grande área no Pacífico coberta por resíduos plásticos", correct: true },
        { text: "Uma zona de pesca proibida", correct: false },
        ],
    },
    {
        question: "Qual é o papel dos manguezais no ecossistema marinho?",
        answers: [
        { text: "Proteger a costa da erosão", correct: true },
        { text: "Fornecer água potável", correct: false },
        { text: "Poluir a água", correct: false },
        { text: "Aumentar a temperatura do oceano", correct: false },
        ],
    },
    {
        question: "O que são zonas mortas nos oceanos?",
        answers: [
        { text: "Áreas com excesso de vida marinha", correct: false },
        { text: "Áreas onde a pesca é proibida", correct: false },
        { text: "Áreas com baixos níveis de oxigênio onde a vida marinha não pode sobreviver", correct: true },
        { text: "Áreas protegidas por leis ambientais", correct: false },
        ],
    },
    {
        question: "Qual é o principal benefício das áreas marinhas protegidas?",
        answers: [
        { text: "Promover o turismo", correct: false },
        { text: "Aumentar a pesca", correct: false },
        { text: "Preservar a biodiversidade marinha", correct: true },
        { text: "Desenvolver infraestrutura costeira", correct: false },
        ],
    },
    {
        question: "O que é o fenômeno da acidificação dos oceanos?",
        answers: [
        { text: "Aumento do pH da água do mar", correct: false },
        { text: "Diminuição do pH da água do mar devido à absorção de CO2", correct: true },
        { text: "Elevação da temperatura da água", correct: false },
        { text: "Redução dos níveis de oxigênio na água", correct: false },
        ],
    },
    {
        question: "Por que os tubarões são importantes para o ecossistema marinho?",
        answers: [
        { text: "Eles são herbívoros", correct: false },
        { text: "Eles ajudam a controlar a população de outras espécies marinhas", correct: true },
        { text: "Eles poluem a água", correct: false },
        { text: "Eles são os principais produtores de oxigênio nos oceanos", correct: false },
        ],
    },
];

// Embaralhar as opções de resposta
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Selecionar aleatoriamente 10 perguntas
const selectedQuestions = [];
while (selectedQuestions.length < 10) {
    const randomIndex = Math.floor(Math.random() * questions.length);
    if (!selectedQuestions.includes(randomIndex)) {
        selectedQuestions.push(randomIndex);
    }
}

// Usar apenas as 10 perguntas selecionadas
const finalQuestions = selectedQuestions.map(index => questions[index]);

// Embaralhar as opções de resposta para cada pergunta selecionada
finalQuestions.forEach(question => {
    shuffle(question.answers);
});

// Função para verificar a resposta selecionada
function selectAnswer(event) {
    const answerClicked = event.target;

    if (answerClicked.dataset.correct) {
        answerClicked.classList.add("correct");
        totalCorrect++;
    } else {
        answerClicked.classList.add("incorrect");
    }

    // Desabilitar todos os botões de resposta
    document.querySelectorAll(".answer").forEach(button => {
        button.disabled = true;
    });

    // Exibir o botão "Próxima pergunta"
    $nextQuestionButton.classList.remove("hide");

    // Atualizar o contador de perguntas respondidas
    currentQuestionIndex++;

    // Verificar se todas as perguntas foram respondidas
    if (currentQuestionIndex === 10) {
        finishGame();
    } else {
        // Exibir a próxima pergunta após um breve intervalo
        setTimeout(displayNextQuestion, 1000);
    }
}

// Exibir mensagem final e opção para refazer o teste
function finishGame() {
    const totalQuestions = 10; // Apenas 10 das 15 perguntas são exibidas
    const performance = Math.floor(totalCorrect * 100 / totalQuestions);

    let message = "";

    switch (true) {
        case (performance >= 90):
            message = "Excelente :)";
            break;
        case (performance >= 70):
            message = "Muito bom :)";
            break;
        case (performance >= 50):
            message = "Bom";
            break;
        default:
            message = "Pode melhorar :(";
    }

    $questionsContainer.innerHTML =
        `
        <p class="final-message">
            Você acertou ${totalCorrect} de ${totalQuestions} questões!
            <span>Resultado: ${message}</span>
        </p>
        <button 
            onclick=window.location.reload() 
            class="button"
        >
            Refazer teste
        </button>
        `;
}

const $startGameButton = document.querySelector(".start-quiz");
const $nextQuestionButton = document.querySelector(".next-question");
const $questionsContainer = document.querySelector(".questions-container");
const $questionText = document.querySelector(".question");
const $answersContainer = document.querySelector(".answers-container");

let currentQuestionIndex = 0;
let totalCorrect = 0;

$startGameButton.addEventListener("click", startGame);
$nextQuestionButton.addEventListener("click", displayNextQuestion);

function startGame() {
    $startGameButton.classList.add("hide");
    $questionsContainer.classList.remove("hide");
    displayNextQuestion();
}

function displayNextQuestion() {
    resetState();

    if (currentQuestionIndex === 10) {
        return finishGame();
    }

    const question = finalQuestions[currentQuestionIndex];
    $questionText.textContent = question.question;

    shuffle(question.answers); // Embaralhar as opções de resposta

    question.answers.forEach(answer => {
        const newAnswer = document.createElement("button");
        newAnswer.classList.add("button", "answer");
        newAnswer.textContent = answer.text;
        if (answer.correct) {
            newAnswer.dataset.correct = answer.correct;
        }
        $answersContainer.appendChild(newAnswer);

        newAnswer.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    while ($answersContainer.firstChild) {
        $answersContainer.removeChild($answersContainer.firstChild);
    }
    $nextQuestionButton.classList.add("hide");
}

function selectAnswer(event) {
    const answerClicked = event.target;

    if (answerClicked.dataset.correct) {
        answerClicked.classList.add("correct");
        totalCorrect++;
    } else {
        answerClicked.classList.add("incorrect");
    }

    document.querySelectorAll(".answer").forEach(button => {
        button.disabled = true;
    });

    $nextQuestionButton.classList.remove("hide");
    currentQuestionIndex++;
}

function finishGame() {
    const totalQuestions = 10;
    const performance = Math.floor((totalCorrect * 100) / totalQuestions);

    let message = "";

    switch (true) {
        case performance >= 90:
            message = "Excelente :)";
            break;
        case performance >= 70:
            message = "Muito bom :)";
            break;
        case performance >= 50:
            message = "Bom";
            break;
        default:
            message = "Pode melhorar :(";
    }

    $questionsContainer.innerHTML = `
        <p class="final-message">
            Você acertou ${totalCorrect} de ${totalQuestions} questões!
            <span>Resultado: ${message}</span>
        </p>
        <button onclick="window.location.reload()" class="button">Refazer teste</button>
    `;
}

// ----------------------------------------------------------------------------------------------//
// DOUBLE CLICK PARA CORES
let colors = ['#00395a', 'white'];
let colorIndex = 0;

document.body.style.backgroundColor = colors[colorIndex]; // Define a cor inicial
document.body.classList.add('background-dark'); // Define a classe inicial

document.body.addEventListener('dblclick', function() {
    colorIndex++;
    if (colorIndex >= colors.length) {
        colorIndex = 0;
    }
    document.body.style.backgroundColor = colors[colorIndex];

    if (colors[colorIndex] === 'white') {
        document.body.classList.remove('background-dark');
        document.body.classList.add('background-white');
    } else {
        document.body.classList.remove('background-white');
        document.body.classList.add('background-dark');
    }
});
