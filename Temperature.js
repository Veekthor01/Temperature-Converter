const convert = () => {
    const input = parseFloat(document.getElementById('input').value);
     const inputUnit = document.getElementById('inputUnit').value;
     const outputUnit = document.getElementById('outputUnit').value;
     let output;
   
     if (inputUnit === 'celsius' && outputUnit === 'fahrenheit') {
       output = (input * 1.8) + 32;
     } else if (inputUnit === 'fahrenheit' && outputUnit === 'celsius') {
        output = (input - 32) * 5/9;
     } else if (inputUnit === 'celsius' && outputUnit === 'kelvin') {
        output = (input + 273.15);
     } else if (inputUnit === 'fahrenheit' && outputUnit === 'kelvin') {
        output = (input - 32) * 5/9 + 273.15
     } else if (inputUnit === 'kelvin' && outputUnit === 'celsius') {
        output = (input - 273.15);
     } else if (inputUnit === 'kelvin' && outputUnit === 'fahrenheit') {
        output = (input - 273.15) * 1.8 + 32
     } else {
       output = input;
     }
     document.getElementById('output').value = output.toFixed(2);
   };