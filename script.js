let playerScore=0;
let computerScore=0;
const div=document.querySelector('div')

let running=true


const play=(playerSelection,computerSelection)=>{
    let result=''
  const h2=document.createElement('h2')
    console.log(playerSelection,computerSelection)
    if(playerSelection=='rock'){
        if(computerSelection=='paper'){
            result=( 'You Lose! Paper beats Rock')
            computerScore++
        }
        else if(computerSelection=='scissors'){
            result=( 'You Win! Rock beats scissors')
            playerScore++
        }
        else result=( 'It is a Draw!')

    }
    else if(playerSelection=='paper'){
        if(computerSelection=='rock'){
            result=( 'You win! Paper beats Rock')
            playerScore++

        }
        else if(computerSelection=='scissors'){
            result=( 'You Lose! Scissors beats paper')
            computerScore++;
        }
        else result=( 'It is a Draw!')

    }
    else if(playerSelection=='scissors'){
        if(computerSelection=='paper'){
          playerScore++;
            result=( 'You Win! Scissors beats Paper')
        }
        else if(computerSelection=='Rock'){
            result=('You Lose! Rock beats scissors')
            computerScore++;
        }
        else result=('It is a Draw!')

    }

    let finalResult=''
    if(playerScore==5){
      finalResult=`You WON!!!`
      const p=document.createElement('p')
      p.textContent=finalResult
      
      div.appendChild(p)
      running=false
     

    }
    else if(computerScore==5) {
      finalResult='YOU LOST!!'
      const p=document.createElement('p')
      p.textContent=finalResult
      div.appendChild(p)
      running=false
      


    }
   


    h2.textContent=`${result}`;
    const p=document.createElement('p')
    p.textContent=`PlayerScore:${computerScore}|| Computer Score: ${playerScore}`
    div.appendChild(h2)
    div.appendChild(p)
}


function game(){
 
   
    const buttons=document.querySelectorAll('button')
    console.log(buttons)

    buttons.forEach(button=>{
      button.addEventListener('click',(e)=>{
        const playerSelection=e.target.textContent.toLowerCase()
        const choices=['rock','paper','scissors']
        const computerSelection=getComputerChoice()
        function getComputerChoice(){
          return  choices[Math.floor(Math.random()*choices.length)]
        }

        div.textContent=''
      
        play(playerSelection,computerSelection)
      
      })
    })
  
    
    
     
}

 game()
