
    

function randomNumber(min, max){ 
    return(Math.floor(Math.random()*100+1));
}


function validateGuess(event){
    
    //alert(document.getElementById('guess').innerHTML);

    // num1=parseInt(numGuess)
    
     
  
    /*if (isNaN(guess)) {
  alert("Please input a Number")
    }
    
    if ((guess > 100) || (guess< 1)) {
        alert("Please put in a number between 1 and 100" )
    } 
    return;*/

}

// Iniitilizing variables
let score = 0
let highScore = 10
let min = 1
let max =100
const random = randomNumber(min, max)
let count = -1

 




function processFormData(){

  var inputs = document.getElementsById('txt_name').value

 /* var message = 'The form has the following input elements: \n\n';

for (var i = 0; i < inputs.length; i++) {
	message += inputs[i].tagName + " element with 'type' attribute = '" + inputs[i].getAttribute('type') + "' and 'name' attribute = '" + inputs[i].getAttribute('name') + "'\n";	
  } */

  message = ("inputs")

  alert(message);
  
}

  
function processData(){ 
  alert(random) 
    let number1 = document.getElementById("number").value  

    if (number1==random){
      alert("Congratulations You Win")
    }

   
  
     if (number1 > random) {
            alert("Your guess is greater");}
     if ( random > number1)
            {alert (" Your guess is less than");}

    count=count+1 

    switch (count+1) {
      case 1:
        document.getElementById("score1").innerHTML=number1;
        break;
      case 2:
        document.getElementById("score2").innerHTML=number1
        break;
      case 3:
        document.getElementById("score3").innerHTML=number1;
        break;
      case 4:
        document.getElementById("score4").innerHTML=number1
        break;
      case 5:
        document.getElementById("score5").innerHTML=number1
        break;
      case 6:
        document.getElementById("score6").innerHTML=number1
        break;
      case 7:
        document.getElementById("score7").innerHTML=number1
        break;
      case 8:
        document.getElementById("score8").innerHTML=number1
        break;
      case 9:
        document.getElementById("score9").innerHTML=number1
        break;
      case 10:
        document.getElementById("score10").innerHTML=number1
        break;
    }
}
    
     


          
 
    

      
