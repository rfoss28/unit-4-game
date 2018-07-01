$(document).ready(function () {

    //Initialize variables
    var blueCrystalRate = 0;
    var greenCrystalRate = 0;
    var redCrystalRate = 0;
    var yellowCrystalRate = 0;
    var computerTotal = 0;
    var playerTotal = 0;
    var wins = 0;
    var losses = 0;

    initializeGame();

    //Assigns random values to the crystals and computer total
    function initializeGame() {

        blueCrystalRate = Math.floor(Math.random() * 12) + 1;
        greenCrystalRate = Math.floor(Math.random() * 12) + 1;
        redCrystalRate = Math.floor(Math.random() * 12) + 1;
        yellowCrystalRate = Math.floor(Math.random() * 12) + 1;
        computerTotal = Math.floor(Math.random() * 100) + 21;
        playerTotal = 0;
        $("#computer-score").text(computerTotal);
       

    }

    //checks to see if the player's total is greater than the computer's total
    function checkScore() {
        console.log("CheckScore");
        if (playerTotal > computerTotal) {
            losses++;
            $("#losses").text("You Lost! losses: " + losses);
           
            initializeGame();
        }
        else if (playerTotal === computerTotal) {
            wins++;
            $("#wins").text("You Won! Wins: " + wins);
            initializeGame();
        }
        else{
            $("#wins").text("Wins: " + wins);
            $("#losses").text("Losses: " + losses);

        }

    }

    $("#blueCrystal").on("click", function () {
        playerTotal += blueCrystalRate;
        $("#player-score").text(playerTotal);
        checkScore();

    });

    $("#greenCrystal").on("click", function () {
        playerTotal += greenCrystalRate;
        $("#player-score").text(playerTotal);
        checkScore();

    });
    $("#redCrystal").on("click", function () {
        playerTotal += redCrystalRate;
        $("#player-score").text(playerTotal);
        checkScore();

    });
    $("#yellowCrystal").on("click", function () {
        playerTotal += yellowCrystalRate;
        $("#player-score").text(playerTotal);
        checkScore();

    });


});