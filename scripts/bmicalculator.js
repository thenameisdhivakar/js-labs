function calculateBmi(weight,height){
    
    let bmi = weight / Math.pow(height,2);
    return bmi;

  
  }

  function onButtonClick() {
    var height = +document.getElementById("height").value;
    var weight = +document.getElementById("weight").value;
    const bmi= calculateBmi(weight,height);
    var resultElement = document.getElementById("result");
    resultElement.innerHTML= bmi.toFixed(0);


  }

  