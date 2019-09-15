console.log('index is connected!');

const fSubmit = document.querySelector('.fTempButton');
fSubmit.addEventListener('click', convertF);

function convertF() {
  let farenheit = document.querySelector('.fTemp').value;
  let celsius = ((Number(farenheit)) - 32)/1.8;
  let kelvin = ((Number(farenheit) - 32)*5)/9 + 273.15;

  console.log("Farenheit: " + farenheit);
  console.log("Celsius: " + celsius);
  console.log("Kelvin: " + kelvin);

  document.querySelector('.newF').innerHTML = ("Farenheit --- " + "  " + (Math.round(Number(farenheit)*10)/10) + " °F");
  document.querySelector('.newC').innerHTML = ("Celsius --- " + "  " + (Math.round(Number(celsius)*10)/10) + " °C");
  document.querySelector('.newK').innerHTML = ("Kelvin --- " + "  " + (Math.round(Number(kelvin)*10)/10) + " K");
}

const cSubmit = document.querySelector('.cTempButton');
cSubmit.addEventListener('click', convertC);

function convertC() {
  let celsius = document.querySelector('.cTemp').value;
  let farenheit = Number(celsius) * 1.8 + 32;
  let kelvin = Number(celsius) + 273.15;

  console.log("Farenheit: " + farenheit);
  console.log("Celsius: " + celsius);
  console.log("Kelvin: " + kelvin);

  document.querySelector('.newF').innerHTML = ("Farenheit --- " + "  " + (Math.round(Number(farenheit)*10)/10) + " °F");
  document.querySelector('.newC').innerHTML = ("Celsius --- " + "  " + (Math.round(Number(celsius)*10)/10) + " °C");
  document.querySelector('.newK').innerHTML = ("Kelvin --- " + "  " + (Math.round(Number(kelvin)*10)/10) + " K");
}

const kSubmit = document.querySelector('.kTempButton');
kSubmit.addEventListener('click', convertK);

function convertK() {
  let kelvin = document.querySelector('.kTemp').value;
  let farenheit = (Number(kelvin)-273.15)*1.8+32;
  let celsius = Number(kelvin)-273.15;

  console.log("Farenheit: " + farenheit);
  console.log("Celsius: " + celsius);
  console.log("Kelvin: " + kelvin);

  document.querySelector('.newF').innerHTML = ("Farenheit --- " + "  " + (Math.round(Number(farenheit)*10)/10) + " °F");
  document.querySelector('.newC').innerHTML = ("Celsius --- " + "  " + (Math.round(Number(celsius)*10)/10) + " °C");
  document.querySelector('.newK').innerHTML = ("Kelvin --- " + "  " + (Math.round(Number(kelvin)*10)/10) + " K");
}
