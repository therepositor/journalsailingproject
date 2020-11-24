const quizData = [
    {
        question : "what year will i hit 40?",
        a: "2020",
        b: "2030",
        c:  "2035",
        d:  "2029",
        correct: "b" 
    },
    {
        question: "What do i spend my free time doing?",
        a:  "Surfing",
        b:  "Movies",
        c:  "Playing COD",
        d:  "sleeping",
        correct:    "b"
    },
    {
        question:  "What's the brand of my laptop?",
        a:  "MAC, In Jesus name",
        b:  "HP",
        c:  "DELL",
        d:  "Asus",
        correct:    "b"
    },
    {
        question:  "Which social media app do i use most frequently?",
        a:  "Twitter",
        b:  "Instagram",
        c:  "Facebook",
        d:  "Tumblr",
        correct:    "a"
    },
    {
        question:  "Who is the oldest president-elect of USA as of 2020?",
        a:  "Donald J Trump",
        b:  "Barrack Obama",
        c:  "Muhammadu Buhari aka Sinzu",
        d:  "Joe Biden",
        correct:    "d"
    },
    {
        question:  "How many Local government are in Lagos state?",
        a:  "24",
        b:  "23",
        c:  "20",
        d:  "22",
        correct:    "c"
    }
]
// get all elements

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a-text");
const b_text = document.getElementById("b-text");
const c_text = document.getElementById("c-text");
const d_text = document.getElementById("d-text");
const submitBtn = document.getElementById("submit");
const answersEl = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");

// declare variables
let currentQuiz = 0;
let score = 0;


// load quiz
loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    
}

// move to the next question using submit button
submitBtn.addEventListener("click", () => {
    
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
         loadQuiz();
        } else  {
        quiz.innerHTML = `<h2>You answered correctly ${score}/${quizData.length} questions.<br>
        #EndSars!</h2>
        <button onclick = "location.reload()">Reload</button>`;
        }
    }
});

// save answer for current quiz

function getSelected() {
    let answer = undefined;
    answersEl.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

// uncheck boxes when browser load current quiz
function deselectAnswers() {
    answersEl.forEach((answerEl) => {
        answerEl.checked = false;
    });
}