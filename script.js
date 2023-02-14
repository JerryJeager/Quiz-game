const startBtn = document.querySelector(".start-btn")
const rules = document.querySelector(".rules")
const exit = document.querySelector(".exit-btn")




startBtn.addEventListener('click', () => {
    startBtn.classList.add('hide-start-btn')
    rules.classList.add('rules-display')
})

exit.addEventListener('click', () => {
    rules.classList.remove('rules-display')
    startBtn.classList.remove('hide-start-btn')
})