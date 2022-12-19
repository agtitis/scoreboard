let homeScore = 0
let guestScore = 0
let homeScoreEl = document.querySelector("#homescore-el")
let guestScoreEl = document.querySelector("#guestscore-el")

function homeAdd(n){
    homeScore += n
    homeScoreEl.innerText=homeScore
}

function guestAdd(n){
    guestScore += n
    guestScoreEl.innerText=guestScore
}