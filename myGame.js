function computerPlay(){
    const options = ["Paper", "Scissors", "Rock"]
    const randomValue = Math.floor(Math.random() * options.length)
    const computerSelection =  options[randomValue]
    return computerSelection
}

function playRound(){
    let playerSelection = prompt("Ching Chang Chong?")
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

function game(){

let playedRound = 0

for (let i=0;i<5;i++){
    let winner = playRound()
    window.alert(winner)
}

}
