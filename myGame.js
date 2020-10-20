function start(){
    goalKeeper = getElementByIdGlobal("goalKeeperCenter");
    goalKeeper.style.right = parseInt(610) + "px";
    player1 = getElementByIdGlobal("centerPlayer1");
    player1.style.right = parseInt(590) + "px";
    ball = getElementByIdGlobal("centerBall");
    ball.style.right = parseInt(630) + "px";
    ball.style.bottom = parseInt(100) + "px"; 
    setTimeout(goalKeeperMoveToRight,1000);
}

var counterGoals = 0;
var counterGoalKeeper = 0;

function getElementByIdGlobal(elementById){
    var variable = document.getElementById(elementById);
    return variable;
}

function goalKeeperMoveToRight(){
    var goalKeeper = getElementByIdGlobal("goalKeeperCenter");
    var move = setInterval(() => { 
        goalKeeper.style.right = parseInt(goalKeeper.style.right) - 3 + "px";
        if(goalKeeper.style.right <= 300 + "px"){
            clearInterval(move);
            goalKeeperMoveToLeft();
        }
    }, 10);
}

function goalKeeperMoveToLeft(){
    var goalKeeper = getElementByIdGlobal("goalKeeperCenter");
    var move = setInterval(() => {
        goalKeeper.style.right = parseInt(goalKeeper.style.right) + 3 + "px";
        if(goalKeeper.style.right >= 900 + "px"){
            clearInterval(move);
            goalKeeperMoveToRight();
        }
    }, 10);
}

function checkGoal(){
    var ball = getElementByIdGlobal("centerBall");
    var goalKeeper = getElementByIdGlobal("goalKeeperCenter");
    var scoreGoals = getElementByIdGlobal("goals");
    var scoreGoalKeeper = getElementByIdGlobal("Goalkeeper");

    if(goalKeeper.offsetLeft - 20 > ball.offsetLeft + 20 ||
         goalKeeper.offsetLeft + 60 < ball.offsetLeft - 40){
        scoreGoals.innerText = counterGoals += 1;
    }
    else{
        scoreGoalKeeper.innerText = counterGoalKeeper += 1;
    }
}

document.addEventListener('keydown',function(event){
    var player1 = getElementByIdGlobal("centerPlayer1");
    var ball = getElementByIdGlobal("centerBall");
    if(event.keyCode == 39){
        player1.style.right = parseInt(player1.style.right) - 10 + "px";
        ball.style.right = parseInt(ball.style.right) - 10 + "px";
    }
    if(event.keyCode == 37){
        player1.style.right = parseInt(player1.style.right) + 10 + "px";
        ball.style.right = parseInt(ball.style.right) + 10 + "px";
    }
    if(event.keyCode == 32){
        var move = setInterval(() => {
            ball.style.bottom = parseInt(ball.style.bottom) + 3 + "px";
            if(ball.style.bottom >= 500 + "px"){
                checkGoal();
                clearInterval(move);
                ball.style.bottom = 100 + "px";
            }
        }, 10);
    }
})