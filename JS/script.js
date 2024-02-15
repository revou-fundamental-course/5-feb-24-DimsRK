function celciusToFahrenheit () {
    var tempt = document.getElementById("input").value;
    if (!tempt|| isNaN(tempt)) {
        alert("Input suhu dengan nilai angka! Contoh : 25 atau 3.14");
        return;
      }
    
    var fahrenheit = (tempt * 9/5) + 32;
    var temptPlus = tempt * 9;
    var temptPlusOne = temptPlus / 5;
    fahrenheit = fahrenheit.toFixed(2);
    console.log(fahrenheit)
    document.getElementById("output").innerHTML = fahrenheit + "°F"
    document.getElementById("explain1").innerHTML = "diketahui :"
    document.getElementById("explain2").innerHTML = "°C = " + tempt
    document.getElementById("explain3").innerHTML = "Rumus konversi °C ke °F adalah :"
    document.getElementById("explain4").innerHTML = "°F = (°C x 9/5) + 32"
    document.getElementById("explain5").innerHTML = "Maka, perhitungannya adalah sebagai berikut :"
    document.getElementById("explain6").innerHTML = "°F = " + "(" + tempt + " x 9/5) + 32"
    document.getElementById("explain7").innerHTML = "°F = " + "(" + temptPlus + "/ 5) + 32" 
    document.getElementById("explain8").innerHTML = "°F = " + temptPlusOne + " + 32"
    document.getElementById("explain9").innerHTML = "°F = " + fahrenheit
    document.getElementById("explain10").innerHTML = "Jadi, " + tempt + "°C = " + fahrenheit + "°F" 
}

function fahrenheitToCelcius () {
    var tempt = document.getElementById("input").value;
    if (!tempt|| isNaN(tempt)) {
        alert("Input suhu dengan nilai angka! Contoh : 25 atau 3.14");
        return;
      }
    
    var celcius = (tempt - 32) * 5/9;
    var temptMin = tempt - 32;
    var temptMinOne = temptMin * 5;
    celcius = celcius.toFixed(2);
    console.log(celcius)
    document.getElementById("output").innerHTML = celcius + "°C"
    document.getElementById("explain1").innerHTML = "diketahui :"
    document.getElementById("explain2").innerHTML = "°F = " + tempt
    document.getElementById("explain3").innerHTML = "Rumus konversi °F ke °C adalah :"
    document.getElementById("explain4").innerHTML = "°C = (°F - 32) x 5/9"
    document.getElementById("explain5").innerHTML = "Maka, perhitungannya adalah sebagai berikut :"
    document.getElementById("explain6").innerHTML = "°C = " + "(" + tempt + " - 32) x 5/9"
    document.getElementById("explain7").innerHTML = "°C = " + temptMin + " x 5/9"
    document.getElementById("explain8").innerHTML = "°C = " + temptMinOne + "/9"
    document.getElementById("explain9").innerHTML = "°C = " + celcius
    document.getElementById("explain10").innerHTML = "Jadi, " + tempt + "°F = " + celcius + "°C" 
}

function reset () {
    document.getElementById("input").value = "";
    document.getElementById("output").innerHTML = "";
    document.getElementById("explain1").innerHTML = "";
    document.getElementById("explain2").innerHTML = "";
    document.getElementById("explain3").innerHTML = "";
    document.getElementById("explain4").innerHTML = "";
    document.getElementById("explain5").innerHTML = "";
    document.getElementById("explain6").innerHTML = "";
    document.getElementById("explain7").innerHTML = "";
    document.getElementById("explain8").innerHTML = "";
    document.getElementById("explain9").innerHTML = "";
    document.getElementById("explain10").innerHTML = "";
}