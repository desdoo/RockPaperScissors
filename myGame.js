function computerPlay(){
    const options = ["Paper", "Scissors", "Rock"]
    const randomValue = Math.floor(Math.random() * options.length)
    const computerSelection =  options[randomValue]
    return computerSelection
}

function playRound(playerSelection){
    const computerSelection = computerPlay()
        
if (computerSelection===playerSelection){
    return winner = "Both"
     
}
else if (computerSelection==="Rock") {
    if(playerSelection==="Scissors"){
        return winner = "Computer"
        
    }
        else {
            return winner = "Player" 
        }
}
else if (computerSelection==="Paper") {
    if(playerSelection==="Rock"){
        return winner = "Computer"
        
    }
        else {
            return winner = "Player"
        }
    
}
else if (computerSelection==="Scissors") {
    if(playerSelection==="Paper"){
        return winner = "Computer"
    }
        else {
            return winner = "Player"
        }

}

}

const buttons = document.querySelectorAll('button')

let playerScore = 0
let computerScore = 0
let tieScore = 0




buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        playRound(btn.innerHTML)
        calculateScore(winner)
    })
})

function calculateScore (winner) {

    switch (winner) {
    case 'Player':
    playerScore = playerScore + 1
    
    break
    
    case 'Both':
    computerScore = computerScore + 1
    
    break
    
    case 'Computer':
    tieScore = tieScore + 1
    
    break   
    }

    document.getElementById('player-score').innerHTML = playerScore
    document.getElementById('tie-score').innerHTML = tieScore
    document.getElementById('computer-score').innerHTML = computerScore

    console.log(winner)
    }
