const convertButton = document.getElementById('convertButton');
const inputTemperature = document.getElementById('inputTemperature');
const conversionType = document.getElementById('conversionType');
const resultArea = document.getElementById('resultArea');

function convertTemperature() {
    const inputValue = parseFloat(inputTemperature.value);
    const selectedConversion = conversionType.value;

    if (isNaN(inputValue)) {
        resultArea.innerHTML = 'Please enter a valid temperature.';
        return;
    }

    let result = 0;
    let unit = '';

    if (selectedConversion === 'celsius') {
        result = (inputValue * 9/5) + 32;
        unit = '°F';
    } else if (selectedConversion === 'fahrenheit') {
        result = (inputValue - 32) * 5/9;
        unit = '°C';
    } else if (selectedConversion === 'kelvin') {
        result = inputValue - 273.15;
        unit = '°C';
    }

    resultArea.innerHTML = `Converted temperature: ${result.toFixed(2)} ${unit}`;
}

convertButton.addEventListener('click', convertTemperature);
