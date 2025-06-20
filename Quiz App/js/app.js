const questions = [
    {
        question: "Which is largest animal in the world",
        answers: [
            {text: "Shark", correct: false},      
            {text: "Blue Whale", correct: true},      
            {text: "Elephant", correct: false},      
            {text: "Girafee", correct: false},      
        ]
    },
    {
        question: "What is your Name?",
        answers: [
            {text: "Rakib", correct: false},      
            {text: "Salman", correct: false},      
            {text: "Naim", correct: true},      
            {text: "Sakib", correct: false},      
        ]
    },
    {
        question: "Which is the capital of our country?",
        answers: [
            {text: "Rajsahi", correct: false},      
            {text: "Dhaka", correct: true},      
            {text: "Syhlet", correct: false},      
            {text: "Barisal", correct: false},      
        ]
    }

]


// ALl Dom Selecting

const questionText = document.querySelector(".question-text")
const answerList = document.querySelector(".options-list")
const nextButton = document.querySelector(".next-btn")

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionText.innerHTML = questionNo + '. ' + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const Button = document.createElement("button");
        Button.innerHTML = answer.text;
        Button.classList.add("option");
        answerList.appendChild(Button);

        if(answer.correct) {
            Button.dataset.correct = answer.correct
        }
        Button.addEventListener("click", selectAnswer);
    })
}
function resetState() {
    nextButton.style.display = "none";
    while(answerList.firstChild) {
        answerList.removeChild(answerList.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true"
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerList.children).forEach(btn => {
        if(btn.dataset.correct === "true") {
            btn.classList.add("correct");
        }
        btn.disabled = true;
    });
    nextButton.style.display = "block"
}

function showScore() {
    resetState();
    questionText.innerHTML = `You scored ${score} out of ${questions.length}!`
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block"
}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", ()=> {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz()

// console.log(questions.length)