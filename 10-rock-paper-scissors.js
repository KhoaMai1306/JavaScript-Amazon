// use localStorage to save score in cases of refreshing the website with helps of JSON
let score= JSON.parse(localStorage.getItem('score')) || {
    wins:0,
    losses: 0,
    ties:0
  }
  
  /*
  after the ||, it already works for all the codes below as a shortcut
  || will result in left side if it exits ( as truthy),if not then go the right side of it
  //in case reset score, the value of score will be remove as null, in this case we set the score to all 0
  if(score===null){
    //!score can replace score=== null
    
    score={
      wins:0,
      losses: 0,
      ties:0
    }
  }
  */
  

  function playGame(playerMove){
    const computerMove= pickComputerMove();

    let result='';

    if(playerMove==='scissors'){
        if(computerMove ==='rock'){
          result = 'You lose';
        } else if (computerMove=== 'paper'){
          result='You win';
        } else if(computerMove==='scissors'){
          result='Tie';
        }  
    }else if(playerMove==='paper'){

        if(computerMove ==='rock'){
            result = 'You win';
        } else if (computerMove=== 'paper'){
            result='Tie';
        } else if(computerMove==='scissors'){
            result='You lose';
        }
    } else if(playerMove==='rock'){
        if(computerMove ==='rock'){
        result = 'Tie';
        } else if (computerMove=== 'paper'){
        result='You lose';
        } else if(computerMove==='scissors'){
        result='You win';
        }
    }
    if(result=== 'You win'){
      score.wins= score.wins +1;
    } else if(result ==='You lose'){
      score.losses+=1;
    } else if(result ==='Tie'){
      score.ties+=1;
    }
    //(name, value), local storage save the variables even if we refresh the website
    //only store as its a string, thats why we need to parse it back later using JSON
    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();
    document.querySelector('.js-moves').innerHTML= `You
    <img src="images/${computerMove}-emoji.png" class="move-icon">
    <img src="images/${computerMove}-emoji.png" class="move-icon"> Computer`;
    document.querySelector('.js-result').innerHTML= `${result}`;

  }

  function updateScoreElement(){
    document.querySelector('.js-score').innerHTML=`Wins: ${score.wins}, Losses: ${score.losses}, Tie: ${score.ties}`;
  }

  function pickComputerMove(){
      const randomNumber =Math.random();
      let computerMove =''; 

      if(randomNumber >=0 && randomNumber <1/3){
          computerMove='rock';
      }
      else if(randomNumber >=1/3 && randomNumber <2/3){
          computerMove= 'paper';
      }
      else{
          computerMove='scissors';
      }
      return computerMove;
  }
  //This was cool, I leanred pushing this things up!
  //Test it one more time