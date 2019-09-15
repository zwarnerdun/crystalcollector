# unit-4-game
In this assignment, you'll create another fun and interactive game for web browsers. This time, your app must dynamically update your HTML pages with the jQuery library.

# Getting Started
Here's how the app works:
* There will be four crystals displayed as buttons on the page.
* The player will be shown a random number at the start of the game.
* When the player clicks on a crystal, it will add a specific amount of points to the player's total score.
* The player wins if their total score matches the random number from the beginning of the game.
* The player loses if their score goes above the random number.
* The game restarts whenever the player wins or loses.

# Deployment
Check it out here: https://zwarnerdun.github.io/unit-4-game/

# Overview
Problem: Each crystal when clicked was not showing random numbers.

Solution: Each crystal needed its own Math.floor(Math.random) in order to render a random number.

Technical Approach: I had to add num1= Math.floor(Math.random()*11+1); num2= Math.floor(Math.random()*11+1); num3=Math.floor(Math.random()*11+1); num4= Math.floor(Math.random()*11+1); for each crystal to have its own random number. I added this code within my reset function which allowed for every win or lose for the next set of games each crystal will have its own random number. 

# Built With
* HTML5
* CSS
* JavaScript
* JQuery
