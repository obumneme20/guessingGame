function btnClick(){

    var guess_the_number = document.getElementById("guess_the_number").value;
    var screen = document.getElementById("screen").value;
    var guess = Math.floor(Math.random() * 10 + 1);
    

    
    if(guess_the_number > 6){

        document.getElementById("screen").value = "Opps Sorry!! Invalid Number, Try again";
 
    }else if(guess_the_number != guess){
        
        document.getElementById("screen").value = "Opps Sorry!! Invalid Number, Try again";
      
    }else{
        
        document.getElementById("screen").value = "CONGRATULATIONS!!! YOU GUESSED IT RIGHT";
    }        
    
}  









