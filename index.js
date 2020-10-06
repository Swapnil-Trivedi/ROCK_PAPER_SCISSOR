
// player count and computer count
var pc=0,cc=0;
//helper function to toggle game board
function play_game()
{
  document.getElementById("gameplay").hidden=false;
  document.getElementById("start").style.display='none';
  
  pc=cc=0;
}

function reset()
{
  document.getElementById("gameplay").hidden=true;
  document.getElementById("start").style.display='block';;
  pc=cc=0;
}

//function to get computer's choice
function computerPlay()
{
   let choices=["ROCK","PAPER","SCISSOR"];
   let computerChoice=choices[Math.floor(Math.random()*choices.length)];
   document.getElementById("computer_choice").innerHTML=computerChoice;
   return computerChoice;
}
// getting player coice from buttons
function playerChoice(id)
{
  let pc;  
  if(id=="rock")
    pc="ROCK";
  else if(id=="paper")
   pc="PAPER";
  else if(id=="scissor")
   pc="SCISSOR";
  let cc=computerPlay(); 
  document.getElementById("player_choice").innerHTML=pc;
  score_check(pc,cc);
}

function score_check(player,computer)
{
  
  if(player == computer)
   document.getElementById("status").innerHTML="ROUND DRAW";
  else if(computer=="ROCK" && player=="SCISSOR")
  {
    document.getElementById("status").innerHTML="COMPUTER WON !!!";
    document.getElementById("computer_score").innerHTML=++cc;
  }
  else if(computer=="ROCK" && player=="PAPER")
  {
    document.getElementById("status").innerHTML="PLAYER WON !!!";
    document.getElementById("player_score").innerHTML=++pc;
  }
  else if(computer=="PAPER" && player=="ROCK")
  {
    document.getElementById("status").innerHTML="COMPUTER WON !!!";
    document.getElementById("computer_score").innerHTML=++cc;
  }
  else if(computer=="PAPER" && player=="SCISSOR")
  {
    document.getElementById("status").innerHTML="PLAYER WON !!!";
    document.getElementById("player_score").innerHTML=++pc;
  }
  else if(computer=="SCISSOR" && player=="ROCK")
  {
    document.getElementById("status").innerHTML="PLAYER WON !!!";
    document.getElementById("player_score").innerHTML=++pc;
  }
  else if(computer=="SCISSOR" && player=="PAPER")
  {
    document.getElementById("status").innerHTML="COMPUTER WON !!!";
    document.getElementById("computer_score").innerHTML=++cc;
  }
  
  

}


