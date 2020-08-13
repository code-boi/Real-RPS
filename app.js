const game = () => {
    let pScore = 0;
    let cScore = 0;

    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');           

        playBtn.addEventListener('click', ()=>{
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn')
        });
    }
    //play match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        //computer options
        const computerOptions = ['rock', 'paper', 'scissors']
        options.forEach(option => {
            option.addEventListener("click", function(){
                console.log(this.textContent);
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                console.log(computerChoice);
                //here is where we call compareHands
                compareHands(this.textContent, computerChoice);
            }); 
        });   
    }
    const updadteScore = () => {
    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.computer-score p');
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;

    }


    const winner = document.querySelector('.winner');
    //checking for a tie
    const compareHands = (playerChoice, computerChoice) =>{
        if(playerChoice === computerChoice){
            winner.textContent = 'It is a tie!';
            return;
        }
        //checking for rock
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = "Player wins!";
                pScore++;
                updadteScore();
                return;
            }else{
                winner.textContent = "Computer wins.";
                cScore++;
                updadteScore();
                return;
            }
            
        }
        //checking for paper
        if(playerChoice === 'paper'){
            if(computerChoice === 'rock'){
                winner.textContent = 'Player wins!';
                pScore++;
                updadteScore();
                return;
            }else{
                winner.textContent = 'Computer wins.';
                cScore++;
                updadteScore();
                return;
            }

        }
        //checking for scissors
        if(playerChoice === 'scissors'){
            if(computerChoice === 'rock'){
                winner.textContent = 'Computer wins.';
                cScore++;
                updadteScore();
                return;
            }else{
                winner.textContent = 'Player wins!';
                pScore++;
                updadteScore();
                return;
            }
        }

    }
    // call the inner functions
    startGame();
   playMatch();
}

//start the game function
game();



