function Convert()
{
    let elementValue = document.getElementById("valueKm");
    let value = elementValue.value;

    let valueKm = parseFloat(value);
    if(valueKm >= 99999.99) valueKm = valueKm.toExponential(); // 99999.99: float imprecision

    let valueLy = (valueKm * 1.057e-13).toExponential(3);
    let convertedValueElement = document.getElementById("convertedValue");
    let convertedValue = valueKm + "km equals to " + valueLy + " light-years.";
    convertedValueElement.innerHTML = convertedValue;
}