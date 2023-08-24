// Var with array and object for quiz questions
var questions = [
    {
        question: "How do you add a comment to a CSS or JS file?",
        answers: [
            { text: "*Comment*", correct: false },
            { text: "//Comment", correct: true },
            { text: "/*Comment", correct: false },
            { text: "--Comment--", correct: false },
        ]
    },
    {
        question: "What is the first index of an array?",
        answers: [
            { text: "0", correct: true },
            { text: "1", correct: false },
            { text: "First", correct: false },
            { text: "Idk", correct: false },
        ]
    },
    {
        question: "Which CSS property gives something rounded corners?",
        answers: [
            { text: "corner-round", correct: false },
            { text: "rounding", correct: false },
            { text: "border-radius", correct: true },
            { text: "border", correct: false },
        ]
    },
    {
        question: "What is a short section of code written to complete a task called?",
        answers: [
            { text: "Variable", correct: false },
            { text: "Array", correct: false },
            { text: "Loop", correct: false },
            { text: "Function", correct: true },
        ]
    },
    {
        question: "String values must be enclosed with ___",
        answers: [
            { text: "paranthesis", correct: false },
            { text: "quotes", correct: true },
            { text: "commas", correct: false },
            { text: "curly brackets", correct: false },
        ]
    },
];

var startBtn = document.querySelector("#begin");
var timer = document.querySelector("#timer");
var questionIndex = 0;
var score = 0;
var secondsLeft = 60;
var interval = 0;
var penalty = 10;
var submitBtn = document.querySelector("#save-score");
var goBack = document.querySelector("#goBack");

// Triggers the timer to start
startBtn.addEventListener("click", function () {
    if (interval === 0) {
        interval = setInterval(function () {
            secondsLeft--;
            timer.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(interval);
                allDone();
                timer.textContent = "Out of Time!";
            }
        }, 1000);
    }
    showQuestion();
});

var questionElement = document.getElementById("question");
var answerButtons = document.getElementById("answer-buttons");

function showQuestion() {
    resetState();
    var currentQuestion = questions[questionIndex];
    questionElement.innerHTML = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        var button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(event) {
    var selectedBtn = event.target;
    var isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        score++;
        selectedBtn.classList.add("correct");
    } else {
        secondsLeft = secondsLeft - penalty;
        selectedBtn.classList.add("incorrect");
    }
    
        setTimeout(continueQuiz, 500);
   
}

// Determine whether to continue quiz or end quiz
function continueQuiz(event) {
    questionIndex++;
    if (questionIndex < questions.length) {
        showQuestion(questionIndex);
    } else {
        allDone();
    }
}

function allDone() {
    var pDiv = document.querySelector(".quizQuestions")
    pDiv.innerHTML = "";
    timer.innerHTML = "";

    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "All done!"
    pDiv.appendChild(createH1);


    var createNewP = document.createElement("p");

    if (secondsLeft >= 0) {
        createNewP.textContent = "Your final score is: " + secondsLeft;
    } else {
        createNewP.textContent = "Time's up! Your final score is" + secondsLeft;
    }
    
    clearInterval(interval);
    pDiv.appendChild(createNewP);
    
}

submitBtn.onclick = () => {
    let initials = initials.value;
    //Store Initials and Score in Local Storage
    localStorage.setItem((localStorage.length+1), JSON.stringify(results));
    initials.value = ""
    location.reload();
}

// Event listener to go back to index page
goBack.onclick = () => {
    window.location.replace("./index.html");
};

