let score1 : number = 0;
let score2 : number = 0;
let player1 : number = 1;
let player2 : number = 1;

//Timer upto 60s
const promise1 = new Promise((resolve,reject) => {
    let counter = 10;
    let intervalId = setInterval(() => {
        counter = counter - 1;
        console.log(counter)
        if(this.counter === 0) clearInterval(intervalId)
    }, 1000);
    resolve();
});
promise1.then(() => {
    (<HTMLInputElement> document.getElementById("play1")).disabled = true;
});

// Next timer upto 60s
const promise2 = new Promise((resolve,reject) => {
    let counter = 10;
    let intervalId = setInterval(() => {
        counter = counter - 1;
        console.log(counter)
        if(this.counter === 0) clearInterval(intervalId)
    }, 1000);
    resolve();
});
promise2.then(() => {
    (<HTMLInputElement> document.getElementById("play2")).disabled = true;
});

//onclick function for batting 
var bttn1 = document.getElementById("play1");
bttn1.onclick = function(){
    let temp = Math.floor(Math.random() * 7);
    if(temp == 0)
    player1++;
    else
    score1 += temp;
    if(player1 == 10)
    (<HTMLInputElement> document.getElementById("play1")).disabled = true;
};

//onclick function for batting
var bttn2 = document.getElementById("play2");
bttn2.onclick = function(){
    let temp = Math.floor(Math.random() * 7);
    if(temp == 0)
    player1++;
    else
    score2 += temp;
    if(player2 == 10)
    {
        (<HTMLInputElement> document.getElementById("play2")).disabled = true;
        if(score1 > score2)
        alert("Plyaer 1 is winner");
        else
        alert("Player 2 is winner");
    }
};


    

