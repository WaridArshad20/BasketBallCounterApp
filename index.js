
let homeScore = 0
let guestScore = 0
homeScoreEl = document.getElementById("home_score");
guestScoreEl = document.getElementById("guest_score")

// Functions For Home Scores
//------------------------------

function addOne(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function addTwo() {
    homeScore += 2;
    homeScoreEl.textContent = homeScore
}

function addThree() {
    homeScore += 3;
    homeScoreEl.textContent = homeScore
}


// Functions For Guest Scores
// --------------------------------

function addOneToGuest(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function addTwoToGuest() {
    guestScore += 2;
    guestScoreEl.textContent = guestScore
}

function addThreeToGuest() {
    guestScore += 3;
    guestScoreEl.textContent = guestScore
}


// New Game Function

function newGame() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = 0
    guestScoreEl.textContent = 0
}