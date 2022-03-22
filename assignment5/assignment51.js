
//
//function to convert celsius to farenheit

function convertTempcf(celsius){
    let ftemp = (celsius * 9/5) + 32
    document.getElementById("demo").innerHTML=(celsius+ ' celsius is '+ ftemp+' fahrenheit');
 }


//function to convert farenheit to celsius

 function convertTempfc(fahrenheit){
    let ctemp = ((fahrenheit - 32) *5)/9
    document.getElementById("demo1").innerHTML=(fahrenheit+ ' fahrenheit is '+ ctemp+' celsius');
 
 }


 //function who's BMI is higher
 function bmiCalc( height1, weight1, height2, weight2){
    let johnBMI = weight1  / (height1*height1)*703
    let lucasBMI = weight2 / (height2*height2)*703
    let lucashigherBMI =  (johnBMI > lucasBMI)
    document.getElementById("demo2").innerHTML=('Johns BMI '+ johnBMI+ ' is higher than Lucas BMI '+lucasBMI+ 'that is '+lucashigherBMI);
  
  }

  //guess whether 8 or 10
  
  function numberCheck(number){
    if (number == 8)  {
      document.getElementById("demo3").innerHTML=( 'you win 8 points') }
    else if (number == 10){
      document.getElementById("demo4").innerHTML=('you win 10 points')
    }
    else {
      document.getElementById("demo5").innerHTML=('NOT MATCHED')
    };
  
  }

  function gameCheck(N1,N2,N3,K1,K2,K3){
    let avgKnick = (K1+K2+K3)/3
    let avgNet = (N1+N2+N3)/3
    if ((avgKnick==avgNet) || ( 100< (avgKnick+avgNet)))
    {
      document.getElementById("demo6").innerHTML=('It is a draw!')}
    else if (avgKnick > avgNet)
    {
      document.getElementById("demo7").innerHTML=('The Knicks have Won') 
    }
}



   


// Problem 1
 convertTempcf(32)
 convertTempfc(32)

 // Problem 2
 bmiCalc(60, 200, 70, 183)

 //Problem 3
 numberCheck(8)
 numberCheck(10)
 numberCheck(5)


//Problem 4
 gameCheck(80,82,100,80,90,106)
 gameCheck(98, 110,101,108,92,110)


 

