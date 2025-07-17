// Quiz Data
const quizData = [
  {
    question: "What does DOM stand for?",
    options: ["Document Object Model", "Data Object Manager", "Digital Ordinance Map", "Desktop Oriented Mode"],
    answer: "Document Object Model"
  },
  {
    question: "Which keyword is used to declare a variable in JS?",
    options: ["var", "int", "string", "define"],
    answer: "var"
  },
  {
    question: "Which of these is a JavaScript framework?",
    options: ["Laravel", "Django", "React", "Flask"],
    answer: "React"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('nextBtn');
const scoreEl = document.getElementById('score');

// Load question
function loadQuestion() {
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = '';

  q.options.forEach(option => {
    const btn = document.createElement('button');
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(selected) {
  if (selected === quizData[currentQuestion].answer) {
    score++;
  }
  nextBtn.style.display = "inline-block";
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
    nextBtn.style.display = "none";
  } else {
    questionEl.textContent = "Quiz Completed!";
    optionsEl.innerHTML = "";
    nextBtn.style.display = "none";
    scoreEl.textContent = `Your Score: ${score} / ${quizData.length}`;
  }
};

loadQuestion();

// Joke API Fetch
document.getElementById('jokeBtn').addEventListener('click', async () => {
  const res = await fetch('https://official-joke-api.appspot.com/random_joke');
  const data = await res.json();
  document.getElementById('jokeDisplay').textContent = `${data.setup} - ${data.punchline}`;
});
