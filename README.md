# unit-4-game
url [https://zwarnerdun.github.io/unit-4-game/.]


Problem: Each crystal when clicked was not showing random numbers.


Solution: Each crystal needed its own Math.floor(Math.random) in order to render a random number.


Technical Approach: I had to add num1= Math.floor(Math.random()*11+1); num2= Math.floor(Math.random()*11+1); num3=Math.floor(Math.random()*11+1); num4= Math.floor(Math.random()*11+1); for each crystal to have its own random number. I added this code within my reset fucntion which allowed for every win or lose the next set of games games each crystal will have its own random number. 
