# TicTacToeGlow

TicTacToe is a a game in which two players alternately put 🤖 and 👾 in compartments of a figure formed by two vertical lines crossing two horizontal lines and each tries to get a row of three 🤖 or three 👾 before the opponent does.

## Table of Contents
1. [General Info](#general-info)
2. [Technologies](#technologies)
4. [Screenshots](#Screenshots)
5. [User Stories](#User-Stories)
6. [Planning/Development](#Planning/Development)
7. [How to become awinner](#How-to-be-comea-winner)
8. [Unsolved Problems](#Unsolved-Problems)
9. [favorite functions](#favorite-functions)
10. [Installation](#installation)
11. [FAQs](#faqs)


## General Info
***

Tic Tac Toe GLOW edition is a game submaiited for the Project #1 - #SEI-15-KSA


### Screenshot
***
Wireframe:
![Image text](/Imgs/TicTacToeGLOW_Protoype.png)

Main Page:
![Image text](/Imgs/mainpage.png)

### User Stories: 

***

* As a Player1 (X), I can make the first move toward the gameboard.
* As Player2 (O), I can make the second move toward the gameboard.
* As players, we will continue playing until one of us wins or get equalized!
* As a Player, I should get my scores to result so I know how many times I won.
* As a player, I should know when I won by showing a winning statement. 
* As both players, we should know when the game is over!
* As players, we should restart the game so we can play again!
* As players, we should play again by keeping our previous scores. 



### Planning/Development process and problem-solving strategy:

* Create New Repository in GitHub Enterprise.
* Prepare the Folders and Files for the game.
   * create README.md
   *  create index.html
   * create levels folder
* create css folder
   * create styles.css
* create js folder
   * create main.js
* create images folder
  * create wireframe folder for wireframe image
  * create mainpage for game Image
* work on the Design of index.html as the main page of the game.
* work on main.js file to build the logic of the game.
* work on style.css file to build the styling of the game.



## List of technologies used in this project:
***
A list of technologies used within the project:
* [HTML5]
* [CSS]
* [Javascript]
* [JQuery](https://jquery.com/): Version v3.6.0
* [sweetalert](https://sweetalert2.github.io/): Version v10.15.7
* [AOS-Library](https://michalsnik.github.io/aos/): Version @2.3.1

## Unsolved Problems :

Nothing

## How to become a winner:

* First, Player 1 has to make the first move
* Both players play the game untill winner got scored.

### Favorite Functions:
`(function playgame() {
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
};)`



## Installation
***
A little intro about the installation. 
```
$ git clone https://example.com
$ cd ../path/to/the/file
```

## FAQs

### How it works:

There are eight possibilities of winning for both players. First I divided the HTML into eight sections based on the position of the Gameboard. I implemented the logic using JQoury and setting up conditions based on the length of each player's move. 







