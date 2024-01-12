let homeScoreEl = document.getElementById("home-score-el")
let guestScoreEl = document.getElementById("guest-score-el")
let homeScoreBoard = document.getElementById("home-score")
let guestScoreBoard = document.getElementById("guest-score")
let homeFoulEl = document.getElementById("home-foul-el")
let guestFoulEl = document.getElementById("guest-foul-el")
let periodEl = document.getElementById("period-el")
let appendTimer = document.getElementById("timer-display")

let homeScore = 0
let guestScore = 0
let homeFoul = 0
let guestFoul = 0
let period = 0
let seconds = 0
let minutes = 0

function leader(){
    if (homeScore == guestScore){
        guestScoreBoard.style.boxShadow = 'none'
        homeScoreBoard.style.boxShadow = 'none'
    }
    if (homeScore > guestScore){
        homeScoreBoard.style.boxShadow = 'inset 0 0 20px white'
        guestScoreBoard.style.boxShadow = 'none'
    }
    if (homeScore < guestScore){
        guestScoreBoard.style.boxShadow = 'inset 0 0 20px white'
        homeScoreBoard.style.boxShadow = 'none'
    }
}
    
function home1(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
    leader()
}

function home2(){
    homeScore += 2
    homeScoreEl.textContent = homeScore
    leader()
}

function home3(){
    homeScore += 3
    homeScoreEl.textContent = homeScore
    leader()
}

function guest1(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
    leader()
}

function guest2(){
    guestScore += 2
    guestScoreEl.textContent = guestScore
    leader()
}

function guest3(){
    guestScore += 3
    guestScoreEl.textContent = guestScore
    leader()
}

function addHomeFoul(){
    homeFoul += 1
    homeFoulEl.textContent = homeFoul
}

function addGuestFoul(){
    guestFoul += 1
    guestFoulEl.textContent = guestFoul
}

function addPeriod(){
    period += 1
    periodEl.textContent = period
}

function timer(){
    seconds ++
    if (seconds == 60){
        seconds = 0
        minutes ++
    }
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    appendTimer.innerText = m + ":" + s
}

function startTimer(){
    if(timer!==null)
    {
        clearInterval(timer)
    }
    timer = setInterval(timer,1000)
}

function stopTimer(){
    clearInterval(timer) 
}    

function newGame(){
    period = 0
    homeScore = 0
    guestScore = 0
    homeFoul = 0
    guestFoul = 0
    seconds = "00"
    minutes = "00"
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
    homeFoulEl.textContent = homeFoul
    guestFoulEl.textContent = guestFoul
    periodEl.textContent = period
    clearInterval(timer)
    appendTimer.innerText = minutes + ":" + seconds 
    leader()
}
