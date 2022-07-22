const labelSeconds = document.querySelector('.time-seconds')
const labelMinutes = document.querySelector('.time-minutes')
const labelHours = document.querySelector('.time-hours')
const labelDays = document.querySelector('.time-days')

//Código responsável por calcular o próximo ano
const nextYear = new Date().getFullYear() + 1
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`)

const updateCountdown = () => {
    const currentTime = new Date()
    const difference = newYearTime - currentTime
    const days = Math.floor(difference / 1000 / 60 / 60 / 24)
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24
    const minutes = Math.floor(difference / 1000 / 60) % 60
    const seconds = Math.floor(difference / 1000) % 60

    labelSeconds.textContent = seconds < 10 ? '0' + seconds : seconds
    labelMinutes.textContent = minutes < 10 ? '0' + minutes : minutes
    labelHours.textContent = hours < 10 ? '0' + hours : hours
    labelDays.textContent = days < 10 ? '0' + days : days
}

setInterval(() => {
    updateCountdown()
}, 1000);