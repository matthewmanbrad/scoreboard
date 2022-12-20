let currentHomeScore = 0;
let currentGuestScore = 0;
let homeScore = document.getElementById("homeScore");
let guestScore = document.getElementById("guestScore");

function addOneHome() {
    let totalScore = currentHomeScore + 1
    homeScore.textContent = totalScore
    currentHomeScore = totalScore
}

function addTwoHome() {
    let totalScore = currentHomeScore + 2
    homeScore.textContent = totalScore
    currentHomeScore = totalScore
}

function addThreeHome() {
    let totalScore = currentHomeScore + 3
    homeScore.textContent = totalScore
    currentHomeScore = totalScore
}

function addOneGuest() {
    let totalScore = currentGuestScore + 1
    guestScore.textContent = totalScore
    currentGuestScore = totalScore
}

function addTwoGuest() {
    let totalScore = currentGuestScore + 1
    guestScore.textContent = totalScore
    currentGuestScore = totalScore
}

function addThreeGuest() {
    let totalScore = currentGuestScore + 1
    guestScore.textContent = totalScore
    currentGuestScore = totalScore
}

function resetScores() {
    currentGuestScore = 0
    currentHomeScore = 0
    guestScore.textContent = 0
    homeScore.textContent = 0
}