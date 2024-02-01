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
  let isAutoPlaying = false;
  let intervalId ;

  //const autoPlay = () =>{
  //};

  function autoPlay(){
    if(!isAutoPlaying){
      intervalId= setInterval(() => {    //using => instead of function()
        const playerMove =pickComputerMove();
        playGame(playerMove);
      },1000);
      isAutoPlaying = true;
    }
    else{
      //inside is a ID of interval cause every interval returns ID value each run
      clearInterval(intervalId);
      isAutoPlaying = false;
    }
  }

  // this function to replace on click attribute in html
  document.querySelector('.js-rock-button').addEventListener('click',() =>{
    playGame('rock'); // we need to right it like this instead of 'click', playGame('rock'), if not it will result in undefined, not sure why tho
  });

  document.querySelector('.js-paper-button').addEventListener('click',() =>{
    playGame('paper'); 
  });

  document.querySelector('.js-scissors-button').addEventListener('click',() =>{
    playGame('scissors'); 
  });

  //we use this to run code on keyboard r,p,s instead of clicking it (keydown of addEventListener) , event variable is needed in () , event.key returns what we type on keyboard
  document.body.addEventListener('keydown',(event) =>{
    if (event.key ==='r'){
      playGame('rock');
    }
    else if(event.key ==='p'){
      playGame('paper');
    }
    else if(event.key ==='s'){
      playGame('scissors');
    }

  })

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
    <img src="images/${playerMove}-emoji.png" class="move-icon">
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
  //Good experience