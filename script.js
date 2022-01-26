"use strict";

//selecting element 
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const diceimg=document.querySelector(".dice");
const rollbtn=document.querySelector(".btn--roll");
const newbtn=document.querySelector(".btn--new");
const holdbtn=document.querySelector(".btn--hold");
const currScoreEl0=document.querySelector("#current--0");
const currScoreEl1=document.querySelector("#current--1");
// const player0Section=document.getElementsByClassName("player--0"); dint work
const player0Section=document.querySelector(".player--0");
const player1Section=document.querySelector(".player--1");


//initial conditions
// score0El.textContent=0;
// score1El.textContent=0;
// diceimg.classList.add("hidden");

let Scores; //storing the final scores of 2 players so player 1 starts as player-0
let currentScore,play,activePlayer;
   //state variable

     const func=function()
     {
         diceimg.classList.add("hidden");
                  score0El.textContent=0;
                  score1El.textContent=0;  
                  currScoreEl0.textContent = 0;
                  currScoreEl1.textContent = 0;  
             player0Section .classList.remove('player--winner');
                  player1Section.classList.remove('player--winner');
                  player0Section.classList.add('player--active');
                  player1Section.classList.remove('player--active');
                  currentScore=0; 
                  play=true;   //state variable
                  Scores=[0,0]; 
                  activePlayer=0;
     };
     func();

//rolling dice functionality
rollbtn.addEventListener("click",function()
{
if(play){
         
     //1 generate random dice roll
     const rand=(Math.floor(Math.random()*6+1)); 
      
     //display rolled dice
     diceimg.classList.remove("hidden");
     diceimg.src=`dice-${rand}.png`;

     //check rolled for number 1 
         
if(rand!==1)
{
//add rand number generated to current score
currentScore+=rand;
// console.log(currentScore);
const a=document.getElementById(`current--${activePlayer}`);
a.textContent=currentScore;

}else{
//switch players  and make current score 0
currentScore=0;
document.getElementById(`current--${activePlayer}`).textContent=currentScore;
activePlayer=activePlayer===0?1:0;
player0Section.classList.toggle("player--active");
player1Section.classList.toggle("player--active");

}
}
});

//clicked on hold button

holdbtn.addEventListener("click",function()
{
         
      if(play){ 
               
//add current score to final score of active players
Scores[activePlayer]=Scores[activePlayer]+currentScore;
document.getElementById(`score--${activePlayer}`).textContent= Scores[activePlayer];


//check score >=100
//if 100 win the active player else switch player

if(Scores[activePlayer]>=10)
{ 
        
         play=false;
      diceimg.classList.add("hidden");
         const a=document.querySelector(`.player--${activePlayer}`);
         a.classList.add("player--winner"); 
         document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");


}

else{
//switching players
currentScore=0;
document.getElementById(`current--${activePlayer}`).textContent=0;
activePlayer=activePlayer===0?1:0;
player0Section.classList.toggle("player--active");
player1Section.classList.toggle("player--active");
        

}
      }
         
});

//New game
//same code is used in the beginning for refresh and new game so put it in a function
// newbtn.addEventListener("click",function()
// {
//          diceimg.classList.add("hidden");
//          score0El.textContent=0;
//          score1El.textContent=0; 
//          currScoreEl0.textContent = 0;
//          currScoreEl1.textContent = 0;  
         
//          player0Section .classList.remove('player--winner');
//          player1Section.classList.remove('player--winner');
//          player0Section.classList.add('player--active');
//          player1Section.classList.remove('player--active');
//          currentScore=0; 
//          play=true;
//          Scores=[0,0]; 
//          activePlayer=0;


        
        
// })

newbtn.addEventListener("click",func);