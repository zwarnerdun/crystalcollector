$(document).ready(function(){
    var randomnumber = Math.floor(Math.random() * 101 + 19);
    // The random number shown at the start of the game should be between 19 - 120 when game starts.
    $('#randomnumber').text(randomnumber);
    // When the game begins again, the player should see a new random number. 
    var num1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
    var num4= Math.floor(Math.random()*11+1)
    // Each crystal should have a random hidden value between 1 - 12.
    var Total = 0;
    var wins = 0;
    var losses = 0;
    // console.log(losses)
$('#ofwins').text(wins);
$('#oflosses').text(losses);
// The game restarts whenever the player wins or loses.
function reset(){
    randomnumber=Math.floor(Math.random() * 101 + 19);
    console.log(randomnumber)
    $('#randomnumber').text(randomnumber);
    num1= Math.floor(Math.random()*11+1);
    num2= Math.floor(Math.random()*11+1);
    num3= Math.floor(Math.random()*11+1);
    num4= Math.floor(Math.random()*11+1);
    Total= 0;
    $('#OverallTotal').text(Total);     
}
// The player wins if their total score matches the random number from the beginning of the game.
function winner(){
    wins++; 
    $('#ofwins').text(wins);
    reset();
    document.getElementById("#ofwins").innerHTML = " " + wins;
}
// The player loses if their score goes above the random number.
function loser(){
    losses++;
    $('#oflosses').text(losses);
    reset();
    document.getElementById("#oflosses").innerHTML = " " + losses;
}
// When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
$('#one').on ('click', function(){
    Total = Total + num1;
    console.log("New Total= " + Total);
    $("#OverallTotal").text(Total); 
        if (Total == randomnumber){
            winner();
        }
        else if ( Total > randomnumber){
            loser();
        }   
    
    }
),
$('#two').on ('click', function(){
    Total = Total + num2;
    console.log("New Total= " + Total);
    $("#OverallTotal").text(Total); 
        if (Total == randomnumber){
            winner();
        }
        else if ( Total > randomnumber){
            loser();
        }   
    
    }
     
),
$('#three').on ('click', function(){
    Total = Total + num3;
    console.log("New OverallTotal= " + Total);
    $("#OverallTotal").text(Total); 
        if (Total == randomnumber){
            winner();
        }
        else if (Total > randomnumber){
            loser();
        }   
    
    }
     
),
$('#four').on ('click', function(){
    Total = Total + num4;
    console.log("New OverallTotal= " + Total);
    $("#OverallTotal").text(Total); 
        if (Total == randomnumber){
            winner();
        }
        else if ( Total > randomnumber){
            loser();
        }
    });      
});
