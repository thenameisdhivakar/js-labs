/*function declaration
function showMessage(){
  console.log("in a function")
}

showMessage();
showMessage();*/ 

/*function expression
const name= function student(){
  console.log("Dhivakar");
}

name();*/



  function calculateBmi(weight,height){
    
    let bmi = weight / Math.pow(height,2);
    return bmi;

  
  }

  function onButtonClick() { 
    var height = +document.getElementById("height").value; 
    var weight = +document.getElementById("weight").value;
    const  bmi= calculateBmi(weight,height);
    var resultElement = document.getElementById("result");
    resultElement.innerHTML=bmi.toFixed(2);

  }
  
   var result=calculateBmi(60,1.8);
   document.getElementById("result").innerHTML = `Your BMI is ${result}`;

  
 
