function test(){
    console.log("test");
}

function play_craps() {
    console.log("play_crabs()funtion Started");
    var die1 = Math.ceil(Math.random() * 6); //pick a random number from 0-6,it rounds it to the nears whole number, result becomes die1


    var die2 = Math.ceil(Math.random() * 6); //pick a random number from 0-6, it rounds it to the nears whole number , result becomes die2
    


    var sum = die1 + die2; //the final result is the combation of die1 and die2
    document.getElementById("die1Res").innerHTML = "Die 1 = " + die1; //shows the result of die1
    document.getElementById("die2Res").innerHTML = "Die 2 = " + die2; // shows the result of die2
    document.getElementById("sumRes").innerHTML = "Sum = " + sum; //shows the result of the sum

    if (sum == 7 || sum == 11) //check the vaule for loss/win/tie if 7 or 11 its a loss 
    {
        //loss = loss + 1; //
        //document.getElementById("loseRes").innerHTML = loss; //cauclates the results for a loss
        document.getElementById("finalRes").innerHTML = "CRAPS - you lose"; //it writes the loss stament if vaules are hit

    }
    else if (die1 == die2 && die1 % 2 == 0) {
        //win++;
        // document.getElementById("winRes").innerHTML = wins; //calatites the results for a win
        document.getElementById("finalRes").innerHTML = "DOUBLES - you win"; //it writes the win statment if win vaules are hit
    } else {
        //document.getElementById("tieRes").innerHTML = tie; //cauclates the results for a tie
        document.getElementById("finalRes").innerHTML = "Draw - you neither won nor lost. Please try again "; // write statment if tie vaules are hit
        
    }
}


function blastoff() {
    var currTime = 50;
    document.getElementById("countdowntimer").innerHTML = currTime;
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdowntimer").innerHTML = currTime;
    }, 5000);

    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdowntimer").innerHTML = currTime;
    }, 5000);

    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdowntimer").innerHTML = currTime;
    }, 5000);

    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdowntimer").innerHTML = currTime;
    }, 5000);

    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdowntimer").innerHTML = currTime;
    }, 5000);

    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdowntimer").innerHTML = currTime;
    }, 10000);

    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdowntimer").innerHTML = currTime;
    }, 15000);

    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdowntimer").innerHTML = currTime;
    }, 20000);

    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdowntimer").innerHTML = currTime;
    }, 25000);

    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdowntimer").innerHTML = "Blastoff!";
    }, 30000)
}

function btrBlastOff() {
    console.log("btrBlastOff() started");
    var currTime = 50;
    for (var i = 0; i < 11; i++) {
        setTimeout(function () {

            if (currTime >= 25) {
                //greater than 25 so only countdown
                document.getElementById("countDownTimer").innerHTML = currTime; //if contions are true
            } else if (currTime == 0) {
                //0 so blastoff
                document.getElementById("countdowntimer").innerHTML = "Blastoff!"
            } else {
                //les than 25 so the 1/2 way to launch style
                document.getElementById("countDownTimer").innerHTML = "half " + currTime; //if contion are not true

            }
    

            currTime = currTime - 5;
        }, i * 5000);
    }
}
