/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/ 

var scores, roundScore,activePlayer, gamePlaying, dice;

init();

// document.querySelector('#current-' + activePlayer).textContent=dice;
// document.querySelector('#current-' + activePlayer).innerHTML= '<em>'+ dice +'</em>';
// var x = document.querySelector('#score-0').textContent;


document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying){
        //1. Random number
        var dice1= Math.floor(Math.random()*6)+1;
        var dice2= Math.floor(Math.random()*6)+1;
        //2. Display the result
              var diceDOM1 =document.getElementById('.dice-1');
              var diceDOM2 =document.getElementById('.dice-2');
              diceDOM1.style.display='block';
              diceDOM2.style.display='block';
              diceDOM1.src='dice-'+ dice1 + '.png';
              diceDOM2.src='dice-'+ dice2 + '.png';
    
        //3. Update the round score if the rolled number was not a 1
             if(dice1!==1 && dice2!==1){
                 //add score
                 roundScore += dice1+dice2;
                 document.querySelector('#current-' + activePlayer).textContent= roundScore;
             }else{
                 //next player
                 nextPlayer();
    
             }
    }else{
        alert('Please clcik new game');
    }
         
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
        //add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;

    //update the UI
    document.querySelector('#score-'+ activePlayer).textContent = scores[activePlayer];
    var input = document.querySelector('.final-score').value;
    var winningScore;
    //undefined zero null or "" False
    if(input){
        winningScore = input;
    }else{
        winningScore = 100;
    }

    //check if player won the game
    if(scores[activePlayer] >= winningScore){
        document.querySelector('#name-' + activePlayer).textContent ='Winner!';
        document.getElementById('.dice-1').style.display='none';
        document.getElementById('.dice-2').style.display='none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active') ;
        gamePlaying= false;
    }else{
         //next player
         nextPlayer();
    } 
    } else{
        alert("Please click new game");
    }

});

function nextPlayer(){
            //next player
             activePlayer === 0 ? activePlayer =1 : activePlayer =0;
             roundScore=0;

             document.getElementById('current-0').textContent='0';
             document.getElementById('current-1').textContent= roundScore;

             document.querySelector('.player-0-panel').classList.toggle('active'); 
             document.querySelector('.player-1-panel').classList.toggle('active'); 
            //  document.querySelector('.player-0-panel').classList.remove('active');
            //  document.querySelector('.player-1-panel').classList.add('active'); 
            
            document.getElementById('#dice-1').style.display='none';
            document.getElementById('#dice-2').style.display='none';
}

document.querySelector('.btn-new').addEventListener('click',function(){
     init();
});

function init(){
     scores=[0,0];
     activePlayer =0;
     roundScore=0; 
     gamePlaying= true;

     document.getElementById('.dice-1').style.display='none';
     document.getElementById('.dice-2').style.display='none';

     document.getElementById('score-0').textContent='0';
     document.getElementById('score-1').textContent='0';
     document.getElementById('current-0').textContent='0';
     document.getElementById('current-1').textContent='0';

     document.getElementById('name-0').innerHTML ='<input type="text" name="Player 1" placeholder="Player 1">';
     document.getElementById('name-1').innerHTML = '<input type="text" name="Player 2" placeholder="Player 2">';
     document.querySelector('.player-0-panel').classList.remove('winner');
     document.querySelector('.player-1-panel').classList.remove('winner');
     document.querySelector('.player-0-panel').classList.remove('active');
     document.querySelector('.player-0-panel').classList.add('active');
     document.querySelector('.player-1-panel').classList.remove('active');
    }










