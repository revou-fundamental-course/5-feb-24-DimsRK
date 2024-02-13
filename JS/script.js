function celciusToFahrenheit () {
    var tempt = document.getElementById("input").value;
    if (!tempt|| isNaN(tempt)) {
        alert("Input suhu dengan nilai angka! Contoh : 25 atau 3.14");
        return;
      }
    
    var fahrenheit = (tempt * 9/5) + 32;
    fahrenheit = fahrenheit.toFixed(2);
    console.log(fahrenheit)
    document.getElementById("output").innerHTML = fahrenheit + "°F"
    document.getElementById("explain1").innerHTML = "diketahui :"
    document.getElementById("explain2").innerHTML = "°C=" + tempt
    document.getElementById("explain3").innerHTML = "Rumus konversi °C ke °F adalah : °F=(°C x 9/5) + 32"
    document.getElementById("explain4").innerHTML = "Maka, perhitungannya adalah sebagai berikut :"
    document.getElementById("explain5").innerHTML = "(" + tempt + "°C" + "* 9/5) + 32 =" + fahrenheit + "°F"
    document.getElementById("explain6").innerHTML = "Jadi," + tempt + "°C =" + fahrenheit + "°F" 
}

function fahrenheitToCelcius () {
    var tempt = document.getElementById("input").value;
    if (!tempt|| isNaN(tempt)) {
        alert("Input suhu dengan nilai angka! Contoh : 25 atau 3.14");
        return;
      }
    
    var celcius = (tempt - 32) * 5/9;
    celcius = celcius.toFixed(2);
    console.log(celcius)
    document.getElementById("output").innerHTML = celcius + "°C"
    document.getElementById("explain1").innerHTML = "diketahui :"
    document.getElementById("explain2").innerHTML = "°F=" + tempt
    document.getElementById("explain3").innerHTML = "Rumus konversi °F ke °C adalah : °C=(°F-32) x 5/9"
    document.getElementById("explain4").innerHTML = "Maka, perhitungannya adalah sebagai berikut :"
    document.getElementById("explain5").innerHTML = "(" + tempt + "°F" + "- 32) x 5/9 =" + celcius + "°C"
    document.getElementById("explain6").innerHTML = "Jadi," + tempt + "°F =" + celcius + "°C" 
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
}