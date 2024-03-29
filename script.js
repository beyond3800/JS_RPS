/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'

function getComputerChoice() {
    let computerRpg = ['Rock','Paper','Scissors']
    let random = Math.floor(Math.random()*3)
    return computerRpg[random]
  
}
// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  let score
    if(score < 0)
    {
      return score
    }
    else
    {
        if(playerChoice == computerChoice)
        {
          score = 0
        }else if(playerChoice == 'Rock' && computerChoice == 'Scissors'){
          score = 1
        }else if(playerChoice == 'Scissors' && computerChoice== 'Paper'){
          score = 1
        }else if(playerChoice == 'Paper' && computerChoice == 'Rock'){
          score = 1
        }else{
          if(score > 0)
          {
            score =- 1
          }
        }
    }
    return score
  

  // All situations where human draws, set `score` to 0
  

  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here
  

  // Otherwise human loses (aka set score to -1)
  

  // return score
  
}


let count = {'playerChoice':0,'computerChoice':0}
let result= document.getElementById('result');
let hands =document.getElementById('hands');


// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
  // let count = {'playerChoice':0,'computerChoice':0};
  // let player_score = document.getElementById('playerscore');
  
          if(score==1){
            result.innerHTML='You won'
            // player_score.innerHTML=`${count.playerChoice++} vs ${count.computerChoice--}`
          }else if(score==0){
             result.innerHTML='You draw'
            //  player_score.innerHTML=`${count.playerChoice} vs ${count.computerChoice}`
          }else if(score==-1){
            result.innerHTML='You lose'
            // player_score.innerHTML=`${count.playerChoice--} vs ${count.computerChoice++}`
         }
         hands.innerHTML=`Player:${playerChoice} vs Computer:${computerChoice}`
         
        
             


         


}
let player_score = document.getElementById('playerscore');

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
    computerChoice= getComputerChoice()
    let score=getResult(playerChoice,computerChoice)
    showResult(score,playerChoice,computerChoice)

    
      if(count['playerChoice']+=score){
        count['computerChoice']-=score
        player_score.innerHTML=`${count['playerChoice']} vs ${count['computerChoice']}`
      } else if(count['computerChoice']+=score){
        count['computerChoice']+=score
        player_score.innerHTML=`${count['playerChoice']} vs ${count['computerChoice']}`
      }else{
        player_score.innerHTML=`${count['playerChoice']} vs ${count['computerChoice']}`

      }
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
  let rpsButton= document.querySelectorAll('.rpsButton');
     rpsButton.forEach(i => {
         i.onclick=()=>(onClickRPS(i.value))
});

  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  
  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument

 

  // Add a click listener to the end game button that runs the endGame() function on click
  
}
// let rpsButton= document.querySelectorAll('.rpsButton');
//      rpsButton.forEach(i=>{
//         i.onclick=()=>(console.log(i.value))
//      })


// ** endGame function clears all the text on the DOM **
let endGameButton=document.getElementById('endGameButton');
endGameButton.onclick=()=>(endGame())
function endGame() {
  count={'playerChoice':0,'computerChoice':0};
  player_score.innerHTML='';
    getResult('','');
    showResult('','','');
    result.innerHTML='';
    hands.innerHTML='';
}

playGame()