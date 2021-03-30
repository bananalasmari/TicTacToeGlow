// Declarations (both function and variable)
var Player1Score = 0;
var Player2Score = 0;
var player = "one";

// this func will check the winner for Player1-X
function CheckWinnerX() {
    //Checking the X elemnts by its length - appliying the 8 times logic for playerone (x).
    if ($(".gamebored div div.top-left, .gamebored div div.top-center, .gamebored div div.top-right ").children(".x-boredgame").length === 3) {
        console.log("Player1 Wins");
        Player1Score++;
        $(".disabled").removeClass('disabled');
        $(".btn-again").prop("disabled", false); // disable html
        //prevent playing after winning
        $(".container .gamebored div div").css("cursor", "not-allowed");
        //alert("WHOHO X WINS");
        $(".container .playerone h5").css("display", "Block");



    }

    else if ($(".gamebored div div.center-left, .gamebored div div.center-center, .gamebored div div.center-right ").children(".x-boredgame").length === 3) {
        console.log("Player1 Wins");
        Player1Score++;
        $(".disabled").removeClass('disabled');
        $(".btn-again").prop("disabled", false);
        //prevent playing after winning
        $(".container .gamebored div div").css("cursor", "not-allowed");
        $(".container .playerone h5").css("display", "Block");

    }

    else if ($(".gamebored div div.bottom-left, .gamebored div div.bottom-center, .gamebored div div.bottom-right ").children(".x-boredgame").length === 3) {
        console.log("Player1 Wins");
        Player1Score++;
        $(".disabled").removeClass('disabled');
        $(".btn-again").prop("disabled", false);
        //prevent playing after winning
        $(".container .gamebored div div").css("cursor", "not-allowed");
        $(".container .playerone h5").css("display", "Block");

    }

    else if ($(".gamebored div div.top-left, .gamebored div div.center-left, .gamebored div div.bottom-left ").children(".x-boredgame").length === 3) {
        console.log("Player1 Wins");
        Player1Score++;
        $(".disabled").removeClass('disabled');
        $(".btn-again").prop("disabled", false);
        //prevent playing after winning
        $(".container .gamebored div div").css("cursor", "not-allowed");
        $(".container .playerone h5").css("display", "Block");

    }

    else if ($(".gamebored div div.top-center, .gamebored div div.center-center, .gamebored div div.bottom-center ").children(".x-boredgame").length === 3) {
        console.log("Player1 Wins");
        Player1Score++;
        $(".disabled").removeClass('disabled');
        $(".btn-again").prop("disabled", false);
        //prevent playing after winning
        $(".container .gamebored div div").css("cursor", "not-allowed");
        $(".container .playerone h5").css("display", "Block");

    }

    else if ($(".gamebored div div.top-right, .gamebored div div.center-right, .gamebored div div.bottom-right ").children(".x-boredgame").length === 3) {
        console.log("Player1 Wins");
        Player1Score++;
        $(".disabled").removeClass('disabled');
        $(".btn-again").prop("disabled", false);
        //prevent playing after winning
        $(".container .gamebored div div").css("cursor", "not-allowed");
        $(".container .playerone h5").css("display", "Block");

    }

    else if ($(".gamebored div div.top-left, .gamebored div div.center-center, .gamebored div div.bottom-right ").children(".x-boredgame").length === 3) {
        console.log("Player1 Wins");
        Player1Score++;
        $(".disabled").removeClass('disabled');
        $(".btn-again").prop("disabled", false);
        //prevent playing after winning
        $(".container .gamebored div div").css("cursor", "not-allowed");
        $(".container .playerone h5").css("display", "Block");

    }

    else if ($(".gamebored div div.top-right, .gamebored div div.center-center, .gamebored div div.bottom-left ").children(".x-boredgame").length === 3) {
        console.log("Player1 Wins");
        Player1Score++;
        $(".disabled").removeClass('disabled');
        $(".btn-again").prop("disabled", false);
        //prevent playing after winning
        $(".container .gamebored div div").css("cursor", "not-allowed");
        $(".container .playerone h5").css("display", "Block");

    }


    $(".container .playerone .Player1Score").text(Player1Score);
};

// this func will check the winner for Player2-O
function CheckWinnerO() {
    //Checking the X elemnts by its length - appliying the 8 times logic for playerone (x).
    if ($(".gamebored div div.top-left, .gamebored div div.top-center, .gamebored div div.top-right ").children(".o-boredgame").length === 3) {
        console.log("Player2 Wins");
        Player2Score++;
        $(".disabled").removeClass('disabled');
        $(".btn-again").prop("disabled", false);
        //prevent playing after winning
        $(".container .gamebored div div").css("cursor", "not-allowed");
        $(".container .playertwo h5").css("display", "Block");


    }

    else if ($(".gamebored div div.center-left, .gamebored div div.center-center, .gamebored div div.center-right ").children(".o-boredgame").length === 3) {
        console.log("Player2 Wins");
        Player2Score++;
        $(".disabled").removeClass('disabled');
        $(".btn-again").prop("disabled", false);
        //prevent playing after winning
        $(".container .gamebored div div").css("cursor", "not-allowed");
    }

    else if ($(".gamebored div div.bottom-left, .gamebored div div.bottom-center, .gamebored div div.bottom-right ").children(".o-boredgame").length === 3) {
        console.log("Player2 Wins");
        Player2Score++;
        $(".disabled").removeClass('disabled');
        $(".btn-again").prop("disabled", false);
        //prevent playing after winning
        $(".container .gamebored div div").css("cursor", "not-allowed");
        $(".container .playertwo h5").css("display", "Block");
    }

    else if ($(".gamebored div div.top-left, .gamebored div div.center-left, .gamebored div div.bottom-left ").children(".o-boredgame").length === 3) {
        console.log("Player2 Wins");
        Player2Score++;
        $(".disabled").removeClass('disabled');
        $(".btn-again").prop("disabled", false);
        //prevent playing after winning
        $(".container .gamebored div div").css("cursor", "not-allowed");
        $(".container .playertwo h5").css("display", "Block");
    }

    else if ($(".gamebored div div.top-center, .gamebored div div.center-center, .gamebored div div.bottom-center ").children(".o-boredgame").length === 3) {
        console.log("Player2 Wins");
        Player2Score++;
        $(".disabled").removeClass('disabled');
        $(".btn-again").prop("disabled", false);
        //prevent playing after winning
        $(".container .gamebored div div").css("cursor", "not-allowed");
        $(".container .playertwo h5").css("display", "Block");
    }

    else if ($(".gamebored div div.top-right, .gamebored div div.center-right, .gamebored div div.bottom-right ").children(".o-boredgame").length === 3) {
        console.log("Player2 Wins");
        Player2Score++;
        $(".disabled").removeClass('disabled');
        $(".btn-again").prop("disabled", false);
        //prevent playing after winning
        $(".container .gamebored div div").css("cursor", "not-allowed");
        $(".container .playertwo h5").css("display", "Block");
    }

    else if ($(".gamebored div div.top-left, .gamebored div div.center-center, .gamebored div div.bottom-right ").children(".o-boredgame").length === 3) {
        console.log("Player2 Wins");
        Player2Score++;
        $(".disabled").removeClass('disabled');
        $(".btn-again").prop("disabled", false);
        //prevent playing after winning
        $(".container .gamebored div div").css("cursor", "not-allowed");
        $(".container .playertwo h5").css("display", "Block");
    }

    else if ($(".gamebored div div.top-right, .gamebored div div.center-center, .gamebored div div.bottom-left ").children(".o-boredgame").length === 3) {
        console.log("Player2 Wins");
        Player2Score++;
        $(".disabled").removeClass('disabled');
        $(".btn-again").prop("disabled", false);
        //prevent playing after winning
        $(".container .gamebored div div").css("cursor", "not-allowed");
        $(".container .playertwo h5").css("display", "Block");
    }
    $(".container .playertwo .Player2Score").text(Player2Score);
};

//PlayGame botton func
function playgame() {
    // restart the game
    Player1Score = 0;
    Player2Score = 0;
    $(".container .playerone .Player1Score").text(0);
    $(".container .playertwo.Player2Score").text(0);

    $(".container .gamebored div div").children('span').remove();

    player = "one"; // return to player1
    $(".container .playerone h3, .container .playerone .symbol-x").css("opacity", "1"); // active Player1
    $(".container .playertwo h3, .container .playertwo .symbol-o").css("opacity", "0.7"); // unactive Player2
    $(".gamebored div div").css("cursor", "pointer");
    $(".container").css("cursor", "unset");

    $(".container .playerone h5").css("display", "none");
    $(".container .playertwo h5").css("display", "none");
};

//PlayAgain botton func
function playagain() {

    $(".container .gamebored div div").children('span').remove();
    player = "one"; // return to player1
    $(".container .playerone h3, .container .playerone .symbol-x").css("opacity", "1"); // active Player1
    $(".container .playertwo h3, .container .playertwo .symbol-o").css("opacity", "0.7"); // unactive Player2  
    $(".gamebored div div").css("cursor", "pointer");
    $(".container").css("cursor", "unset");

    $(".container .playerone h5").css("display", "none");
    $(".container .playertwo h5").css("display", "none");
    $("body h1").css("display", "none");
};


$(document).ready(function () {
    var player = "one";
    $(".container .playertwo h3, .container .playertwo .symbol-o").css("opacity", "0.7"); //Changing the CSS when the other player playing
    $(".gamebored div div").click(function () {

        //Check if the game is over prevent playing
        if ($(".container .gamebored div div").css("cursor") === "not-allowed") {
            Swal.fire({
                title: 'GAME OVER!',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })

        }

        else {
            //console.log("test")
            if ($(this).children('span').length === 0) {
                if (player === "one") {
                    $(this).append("<span class='x-boredgame'>🤖</span>"); // Click on this object
                    //this condition will add ONLY one symbol, by checking the div using children func 
                    // if == 0 put symbol if not 
                    player = "two";
                    $(".container .playerone h3, .container .playerone .symbol-x").css("opacity", "0.7");
                    $(".container .playertwo h3, .container .playertwo .symbol-o").css("opacity", "1");
                    CheckWinnerX(); // Calling func for X

                }

                else {
                    $(this).append('<span class="o-boredgame">👾</span>'); // Click on this object
                    player = "one";
                    $(".container .playerone h3, .container .playerone .symbol-x").css("opacity", "1");
                    $(".container .playertwo h3, .container .playertwo .symbol-o").css("opacity", "0.7");
                    CheckWinnerO(); // Calling func for O
                }
            }
        }

        if ($(".gamebored div div").children('span').length === 9 && $(".container .playerone h5").css("display") === "none" && $(".container .playertwo h5").css("display") === "none") {
            $("body h1").fadeIn(400);
            $(".disabled").removeClass('disabled');
            $(".btn-again").prop("disabled", false); // disable html


        }
    });

    $(".btn-play").click(function () {
        playgame();
    });

    $(".btn-again").click(function () {
        playagain();
    });
});