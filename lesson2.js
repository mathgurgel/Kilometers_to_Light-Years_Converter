function Convert()
{
    let elementValue = document.getElementById("valueKm");
    let value = elementValue.value;
    let valueKm = parseFloat(value);

    let valueLy = (valueKm * 0.00000000000010570).toFixed(4);
    let convertedValueElement = document.getElementById("convertedValue");
    let convertedValue = valueKm + " equals to " + valueLy + " light-years.";
    convertedValueElement.innerHTML = convertedValue;
}