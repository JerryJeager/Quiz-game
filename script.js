import {quiz} from './quiz.js'
const startBtn = document.querySelector(".start-btn")
const rules = document.querySelector(".rules")
const exit = document.querySelector(".exit-btn")
const continueBtn = document.querySelector('.continue-btn')
const quizQuestions = document.querySelector('.quiz-questions')



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
})

console.log(quiz.length)
// console.log(quiz[1].question)
// console.log(quiz[quiz.length - 1].answers[0].ans)
// console.log(quiz[0].answers[2].correct)