const questions = [
    {
        question: "Qual linguagem de programação é conhecida como 'linguagem dos navegadores'?",
        options: ["Java", "Python", "C#", "JavaScript"],
        correctAnswer: 4
    },
    {
        question: "Qual dos seguintes não é um tipo de variável em JavaScript?",
        options: ["let", "const", "var", "int"],
        correctAnswer: 4
    },
    // Adicione mais perguntas conforme necessário
];
let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionContainer = document.getElementById("question");
    const option1 = document.getElementById("option1");
    const option2 = document.getElementById("option2");
    const option3 = document.getElementById("option3");
    const option4 = document.getElementById("option4");

    const current = questions[currentQuestion];

    questionContainer.textContent = current.question;
    option1.textContent = current.options[0];
    option2.textContent = current.options[1];
    option3.textContent = current.options[2];
    option4.textContent = current.options[3];
}

function checkAnswer(option) {
    const current = questions[currentQuestion];

    if (option === current.correctAnswer) {
        score++;
        document.getElementById("result").textContent = "Resposta correta!";
    } else {
        document.getElementById("result").textContent = "Resposta incorreta.";
    }

    document.getElementById("result-container").style.display = "block";
    document.getElementById("question-container").style.display = "none";
}

function nextQuestion() {
    document.getElementById("result-container").style.display = "none";
    document.getElementById("question-container").style.display = "block";

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        // Fim do jogo
        document.getElementById("question-container").innerHTML = `<h2>Fim do Jogo</h2><p>Sua pontuação: ${score}/${questions.length}</p>`;
    }
}

// Iniciar o jogo
loadQuestion();
