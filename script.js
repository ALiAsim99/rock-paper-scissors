let playerScore=0;
let computerScore=0;


const getComputerChoice=()=>{
const choices=['rock','paper','scissors']
return choices[Math.floor(Math.random()*choices.length)]

}


const play=(playerSelection,computerSelection)=>{
    if(playerSelection=='rock'){
        if(computerSelection=='paper'){
            console.log( 'You Lose! Paper beats Rock')
            computerScore++
        }
        else if(computerSelection=='scissors'){
            console.log( 'You Win! Rock beats scissors')
            playerScore++
        }
        else console.log( 'It is a Draw!')

    }
    else if(playerSelection=='paper'){
        if(computerSelection=='rock'){
            console.log( 'You win! Paper beats Rock')
            playerScore++

        }
        else if(computerSelection=='scissors'){
            console.log( 'You Lose! Scissors beats paper')
            computerScore++;
        }
        else console.log( 'It is a Draw!')

    }
    else if(playerSelection=='scissors'){
        if(computerSelection=='paper'){
            console.log( 'You Win! Scissors beats Paper')
        }
        else if(computerSelection=='Rock'){
            console.log('You Lose! Rock beats scissors')
            computerScore++;
        }
        else console.log('It is a Draw!')

    }
}


function game(){
 

    let i=1;
    while(i<=5){
    const computerSelection=getComputerChoice()
    const playerSelection=(prompt("Please select your weapon:")).toLowerCase()
     play(playerSelection,computerSelection)
    i++;
    }
    

    if(playerScore>computerScore){
        console.log(`Congratulations You Won!\n Your score ${playerScore} : Computer Score ${computerScore}`)
    }
    else if(computerScore>playerScore){
        console.log(`Sorry You Lost!\n Your score ${playerScore} : Computer Score ${computerScore}`)

        
    }
    else {
        console.log(`It was a Draw!\n Your score ${playerScore} : Computer Score ${computerScore}`)
    }
    
   


}


game()
