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
        const options = querySelectorAll('.options button');
        //computer options
        const computerOptions = ['rock', 'paper', 'scissors']
        options.forEach(option => {
            
        })
            
        });
        const computerNumber = Math.floor(Math.random() * 3);
        
    }

    // call the inner functions
    startGame();
   playMatch();
}

//start the game function
game();

}

