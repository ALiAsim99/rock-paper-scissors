
const getComputerChoice=()=>{
const choices=['rock','paper','scissors']
return choices[Math.floor(Math.random()*choices.length)]

}
const computerSelection=getComputerChoice()
const playerSelection=(prompt("Please select your weapon:")).toLowerCase()
console.log(playerSelection,computerSelection)
const play=(playerSelection,computerSelection)=>{
    if(playerSelection=='rock'){
        if(computerSelection=='paper'){
            return 'You Lose! Paper beats Rock'
        }
        else if(computerSelection=='scissors'){
            return 'You Win! Rock beats scissors'
        }
        else return 'It is a Draw!'

    }
    else if(playerSelection=='paper'){
        if(computerSelection=='rock'){
            return 'You win! Paper beats Rock'
        }
        else if(computerSelection=='scissors'){
            return 'You Lose! Scissors beats paper'
        }
        else return 'It is a Draw!'

    }
    else if(playerSelection=='scissors'){
        if(computerSelection=='paper'){
            return 'You Win! Scissors beats Paper'
        }
        else if(computerSelection=='Rock'){
            return 'You Lose! Rock beats scissors'
        }
        else return 'It is a Draw!'

    }

}
console.log(play(playerSelection,computerSelection))
