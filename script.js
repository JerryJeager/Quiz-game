import { quiz } from './quiz.js'
const startBtn = document.querySelector(".start-btn")
const rules = document.querySelector(".rules")
const exit = document.querySelector(".exit-btn")
const continueBtn = document.querySelector('.continue-btn')
const quizQuestions = document.querySelector('.quiz-questions')
const newQuestion = document.querySelector('.javascript-questions').querySelector('h2')
const questionAnswers = document.querySelector('.question-answers')
const nextQuestion = document.querySelector('.next-question-btn')
const questionsRemaining = document.querySelector('.num-of-questions-left')



startBtn.addEventListener('click', () => {
    startBtn.classList.add('hide-start-btn')
    rules.classList.add('rules-display')
})

exit.addEventListener('click', () => {
    rules.classList.remove('rules-display')
    startBtn.classList.remove('hide-start-btn')
})

continueBtn.addEventListener('click', () => {
    rules.classList.remove('rules-display')
    quizQuestions.classList.add('display-quiz-questions')
    generateQuestion()
})

nextQuestion.addEventListener('click', () => {
    questionAnswers.textContent = ''
    generateQuestion()
})

let i = -1

function generateQuestion() {
    i++
    console.log(quiz[i].question)
    console.log(newQuestion)
    newQuestion.textContent = `${i + 1}. ${quiz[i].question}`
    for (let j = 0; j < quiz[i].answers.length; j++) {
        if (quiz[i].answers[j].correct == false){
            questionAnswers.innerHTML += `<div class="answer">
        <p>${quiz[i].answers[j].ans}</p>
        <div class="answer-status"><i class="fa-regular fa-circle-xmark"></i></div>
        </div>`
        } else if (quiz[i].answers[j].correct == true){
            questionAnswers.innerHTML += `<div class="answer">
        <p>${quiz[i].answers[j].ans}</p>
        <div class="answer-status"><i class="fa-regular fa-circle-check"></i></div>
        </div>`
        }
        console.log(quiz[i].answers[j].correct)
    }
    questionsRemaining.innerHTML = `<p><span>${i + 1}</span> of <span>30</span> Questions</p>`
    if (i >= 30) {
        return
    }
}


console.log(quiz.length)
// console.log(quiz[1].question)
// console.log(quiz[quiz.length - 1].answers[0].ans)
// console.log(quiz[0].answers[2].correct)