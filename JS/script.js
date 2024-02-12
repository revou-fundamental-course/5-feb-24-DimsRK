function celciusToFahrenheit () {
    var tempt = document.getElementById("input").value;
    if (!tempt|| isNaN(tempt)) {
        alert("Input suhu dengan nilai angka! Contoh : 25 atau 3.14");
        return;
      }
    
    var fahrenheit = (tempt * 9/5) + 32;
    console.log(fahrenheit)
    document.getElementById("output").innerHTML = fahrenheit + "°F"
    document.getElementById("explain").innerHTML = "(" + tempt + "°C" + "* 9/5) + 32 =" + fahrenheit + "°F"
}

function fahrenheitToCelcius () {
    var tempt = document.getElementById("input").value;
    if (!tempt|| isNaN(tempt)) {
        alert("Input suhu dengan nilai angka! Contoh : 25 atau 3.14");
        return;
      }
    
    var celcius = (tempt - 32) * 5/9;
    console.log(celcius)
    document.getElementById("output").innerHTML = celcius + "°C"
    document.getElementById("explain").innerHTML = "(" + tempt + "°F" + "- 32) * 5/9 =" + celcius + "°C"
}
/*
function reset () {
    var clearInput = document.getElementById("input");
    var clearOutput = document.getElementById("output");
    var clearExplain = document.getElementById("explain");
  
    if (clearInput) {
        clearInput.innerHTML = "";
    }
  
    if (clearOutput) {
        clearOutput.value = "";
    }

    if (clearExplain) {
        clearExplain.value = "";
    }
}*/

function reset () {
    document.getElementById("input").value = "";
    document.getElementById("output").innerHTML = "";
    document.getElementById("explain").innerHTML = "";
}