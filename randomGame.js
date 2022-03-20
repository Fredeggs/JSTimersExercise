// randomGame()
// Selects a random number between 0 and 1 every 1000 milliseconds. and each time that a random number is picked, add 1 to a counter. 
// If the number is greater than .75, stop the timer and console.log the number of tries it took before we found a number greater than .75.

function randomGame() {
    let randomNum = Math.random();
    console.log(randomNum);
    let count = 0;
    count++;
    const id = setInterval(function () {
        if(randomNum > 0.75){
            clearInterval(id);
            console.log(count);
        } else if (randomNum <= 0.75)
            randomNum = Math.random();
            console.log(randomNum);
            count++;
    }, 1000)
}

randomGame();