// Var with array and object for quiz questions
var questions = [
    {
        question: "How do you add a comment to a CSS or JS file?",
        answers: [
            { text: "*Comment*", correct: false},
            { text: "//Comment", correct: true},
            { text: "/*Comment", correct: false},
            { text: "--Comment--", correct: false},
        ]
    },
    {
        question: "What is the first index of an array?",
        answers: [
            { text: "0", correct: true},
            { text: "1", correct: false},
            { text: "First", correct: false},
            { text: "Idk", correct: false},
        ]
    },
    {
        question: "Which CSS property gives something rounded corners?",
        answers: [
            { text: "corner-round", correct: false},
            { text: "rounding", correct: false},
            { text: "border-radius", correct: true},
            { text: "border", correct: false},
        ]
    },
    {
        question: "What is a short section of code written to complete a task called?",
        answers: [
            { text: "Variable", correct: false},
            { text: "Array", correct: false},
            { text: "Loop", correct: false},
            { text: "Function", correct: true},
        ]
    },
    {
        question: "String values must be enclosed with ___",
        answers: [
            { text: "paranthesis", correct: false},
            { text: "quotes", correct: true},
            { text: "commas", correct: false},
            { text: "curly brackets", correct: false},
        ]
    },
];