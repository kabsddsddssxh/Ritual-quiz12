const quizData = [
    {
        question: "Ritual ka symbol kya hai?",
        options: ["🔥 Fire", "🌙 Moon", "⚡ Lightning", "🌊 Water"],
        answer: "🔥 Fire"
    },
    {
        question: "Ritual ka main goal kya hai?",
        options: ["Fun", "Learning", "Mystery", "Connection"],
        answer: "Connection"
    },
    {
        question: "Ritual ka color theme kya hai?",
        options: ["Red", "Blue", "Black", "Green"],
        answer: "Black"
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");

function loadQuestion() {
    const currentQuiz = quizData[currentQuestion];
    questionEl.innerText = currentQuiz.question;
    optionsEl.innerHTML = "";
    currentQuiz.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("option-btn");
        button.addEventListener("click", () => selectOption(option));
        optionsEl.appendChild(button);
    });
}

function selectOption(selected) {
    const correct = quizData[currentQuestion].answer;
    if(selected === correct) score++;
    currentQuestion++;
    if(currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    questionEl.innerText = "Quiz Complete!";
    optionsEl.innerHTML = "";
    scoreEl.innerText = `Your Score: ${score} / ${quizData.length}`;
}

nextBtn.addEventListener("click", () => {
    if(currentQuestion < quizData.length) loadQuestion();
});

loadQuestion();
