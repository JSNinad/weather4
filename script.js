

// Function to get formatted time in "Day-month" format
function getFormattedTime() {
  const now = new Date();
  const day = now.getDate();
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const month = monthNames[now.getMonth()];
  return `${day}-${month}`;
}

// Function to update the time display
function updateTimeDisplay() {
  const timeDisplay = document.getElementById('time-display');
  timeDisplay.textContent = getFormattedTime();
}

// Initial update
updateTimeDisplay();

// Update the time display every day
setInterval(updateTimeDisplay, 24 * 60 * 60 * 1000); // Update every 24 hours


    function updateHumidity() {
      fetch('your-api-url')
          .then(response => response.json())
          .then(data => {
              const humidityPercentage = data.humidity; // Replace with your API data property
              const humidityPercentageElement = document.getElementById('humidityPercentage');
              humidityPercentageElement.textContent = humidityPercentage + '%';
  
              // Update the indicator text based on the value
              const indicatorElement = document.querySelector('.indicator');
              if (humidityPercentage > 70) {
                  indicatorElement.textContent = 'High Humidity';
              } else if (humidityPercentage > 40) {
                  indicatorElement.textContent = 'Normal Humidity';
              } else {
                  indicatorElement.textContent = 'Low Humidity';
              }
          })
          .catch(error => {
              console.error('Error fetching data:', error);
          });
  }
  
  // Fetch data and update humidity every 1 second (adjust the interval as needed)
  setInterval(updateHumidity, 1000);
  
  // Initial fetch when the page loads
  updateHumidity();
  

    function updateWind() {
      fetch('your-wind-api-url')
        .then(response => response.json())
        .then(data => {
          const windSpeed = data.wind.speed; // Replace with your API data property
          const windSpeedElement = document.getElementById('windSpeed');
          windSpeedElement.textContent = windSpeed + ' km/h';
    
          // Update the wind speedometer needle rotation
          const needleElement = document.querySelector('.needle');
          const rotation = (windSpeed / 10) * 90; // Adjust rotation based on your data range
          needleElement.style.transform = `rotate(${rotation}deg)`;
        })
        .catch(error => {
          console.error('Error fetching wind data:', error);
        });
    }
    
    // Initial update
    updateWind();
    
    // Update wind data every 15 seconds (for example)
    setInterval(updateWind, 15000);

    function updatePrecipitation() {
      fetch('your-precipitation-api-url')
        .then(response => response.json())
        .then(data => {
          const precipitationMeasurement = data.precipitation; // Replace with your API data property
          const precipitationMeasurementElement = document.getElementById('precipitationMeasurement');
          precipitationMeasurementElement.textContent = precipitationMeasurement + ' cm';
    
          // Update the precipitation description based on the measurement
          const precipitationDescriptionElement = document.getElementById('precipitationDescription');
          if (precipitationMeasurement > 0) {
            precipitationDescriptionElement.textContent = 'Rainy';
          } else {
            precipitationDescriptionElement.textContent = 'Dry';
          }
        })
        .catch(error => {
          console.error('Error fetching precipitation data:', error);
        });
    }
    
    // Initial update
    updatePrecipitation();
    
    // Update precipitation data every 20 seconds (for example)
    setInterval(updatePrecipitation, 20000);
    
    function updateUVIndex() {
      fetch('your-uv-api-url')
        .then(response => response.json())
        .then(data => {
          const uvIndex = data.uvIndex; // Replace with your API data property
          const uvIndexElement = document.getElementById('uvIndex');
          uvIndexElement.textContent = uvIndex;
    
          // Update the UV index label based on the value
          const uvLabelElement = document.getElementById('uvLabel');
          if (uvIndex < 3) {
            uvLabelElement.textContent = 'Low';
          } else if (uvIndex < 6) {
            uvLabelElement.textContent = 'Medium';
          } else {
            uvLabelElement.textContent = 'High';
          }
        })
        .catch(error => {
          console.error('Error fetching UV index data:', error);
        });
    }
    
    // Initial update
    updateUVIndex();
    
    // Update UV index data every 25 seconds (for example)
    setInterval(updateUVIndex, 25000);

    
    function updateFeelsLikeTemperature() {
      fetch('your-temperature-api-url')
        .then(response => response.json())
        .then(data => {
          const feelsLikeTemp = data.feelsLike; // Replace with your API data property
          const feelsLikeTempElement = document.getElementById('feelsLikeTemp');
          feelsLikeTempElement.textContent = feelsLikeTemp + '°C';
        })
        .catch(error => {
          console.error('Error fetching "Feels Like" temperature data:', error);
        });
    }
    
    // Initial update
    updateFeelsLikeTemperature();
    
    // Update "Feels Like" temperature data every 30 seconds (for example)
    setInterval(updateFeelsLikeTemperature, 30000);

    
    function updateRainChance() {
      fetch('your-rain-api-url')
        .then(response => response.json())
        .then(data => {
          const rainChance = data.rainChance; // Replace with your API data property
          const rainChanceElement = document.getElementById('rainChance');
          rainChanceElement.textContent = rainChance + '%';
        })
        .catch(error => {
          console.error('Error fetching rain chance data:', error);
        });
    }
    
    // Initial update
    updateRainChance();
    
    // Update rain chance data every 35 seconds (for example)
    setInterval(updateRainChance, 35000);

    const apiUrl = "YOUR_API_URL_HERE"; // Replace with your API URL

function fetchSpeedData() {
  // Simulate fetching data from the API
  return Math.random() * 50; // Generating a random value for demonstration
}

function updateSpeedometer(value) {
  const needle = document.querySelector(".needle");
  const speedometerValue = document.querySelector(".speedometer-value");
  
  // Update needle rotation based on the value
  const rotation = value * 1.8; // 1.8 degrees per unit value
  needle.style.transform = `translateX(-50%) rotate(${rotation}deg)`;
  
  // Update speedometer value
  speedometerValue.textContent = Math.round(value);
}

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const speedData = await fetchSpeedData();
    updateSpeedometer(speedData);
  } catch (error) {
    console.error("Error fetching speed data:", error);
  }
});

    

// ------------------------
//--------------------------------------------------------------
// JavaScript to fetch and display the date for 5 days prior
const cardDates = document.querySelectorAll('.date');

// Function to format the date as "Month Day, Year"
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Function to get the date for a specific number of days prior
function getDateNDaysAgo(n) {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - n);
    return currentDate;
}

// Update the date for each card
cardDates.forEach((dateElement, index) => {
    const daysAgo = index + 1; // Index 0 is today, 1 is 1 day ago, 2 is 2 days ago, and so on
    const date = getDateNDaysAgo(daysAgo);
    dateElement.textContent = `Date: ${formatDate(date)}`;
});

// // wind speed url for 1st card
// // JavaScript to fetch wind speed data from an API and update the card content
// const windSpeedElement = document.getElementById('wind-speed');

// // Replace 'YOUR_API_URL' with the actual URL to fetch the wind speed data
// const apiUrl = 'YOUR_API_URL';

// // Fetch data from the API
// fetch(apiUrl)
//     .then((response) => response.json())
//     .then((data) => {
//         // Extract the wind speed value from the API response
//         const windSpeed = data.wind.speed;

//         // Update the content inside the card with the wind speed value
//         windSpeedElement.textContent = `Wind Speed: ${windSpeed} m/s`;
//     })
//     .catch((error) => {
//         console.error('Error fetching wind speed data:', error);
//     });

//     //tem url for 1st card

//     // JavaScript to fetch temperature data from an API and update the card content
// const temperatureElement = document.getElementById('temperature');

// // Replace 'YOUR_TEMPERATURE_API_URL' with the actual URL to fetch temperature data
// const temperatureApiUrl = 'YOUR_TEMPERATURE_API_URL';

// // Fetch temperature data from the API
// fetch(temperatureApiUrl)
//     .then((response) => response.json())
//     .then((data) => {
//         // Extract the temperature value from the API response
//         const temperature = data.main.temp;

//         // Update the content inside the card with the temperature value
//         temperatureElement.textContent = `Temperature: ${temperature}°C`;
//     })
//     .catch((error) => {
//         console.error('Error fetching temperature data:', error);
//     });

//     //humidity url for 1st card
//     // JavaScript to fetch humidity data from an API and update the card content
// const humidityElement = document.getElementById('humidity');

// // Replace 'YOUR_HUMIDITY_API_URL' with the actual URL to fetch humidity data
// const humidityApiUrl = 'YOUR_HUMIDITY_API_URL';

// // Fetch humidity data from the API
// fetch(humidityApiUrl)
//     .then((response) => response.json())
//     .then((data) => {
//         // Extract the humidity value from the API response
//         const humidity = data.main.humidity;

//         // Update the content inside the card with the humidity value
//         humidityElement.textContent = `Humidity: ${humidity}%`;
//     })
//     .catch((error) => {
//         console.error('Error fetching humidity data:', error);
//     });


// JavaScript to fetch and display data from 1 day ago in the sixth card
const oneDayAgoCard = document.querySelector('.card-title:contains("1 Day Ago")').closest('.card');

const windSpeedOneDayAgoElement = document.getElementById('wind-speed-one-day-ago');
const temperatureOneDayAgoElement = document.getElementById('temperature-one-day-ago');
const humidityOneDayAgoElement = document.getElementById('humidity-one-day-ago');

// Function to fetch weather data for a specific date (e.g., one day ago)
function fetchWeatherDataForDate(date) {
    // Replace 'YOUR_API_URL' with the actual URL to fetch the weather data
    const apiUrl = `YOUR_API_URL?date=${date}`;

    return fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            return {
                windSpeed: data.wind.speed,
                temperature: data.main.temp,
                humidity: data.main.humidity,
            };
        })
        .catch((error) => {
            console.error('Error fetching weather data:', error);
            return {};
        });
}

// Function to update the content in the sixth card
async function updateSixthCard() {
    const currentDate = new Date();
    const oneDayAgoDate = new Date(currentDate);
    oneDayAgoDate.setDate(currentDate.getDate() - 1); // Calculate the date for 1 day ago

    // Fetch weather data for one day ago
    const weatherData = await fetchWeatherDataForDate(oneDayAgoDate);

    // Update the content in the sixth card
    windSpeedOneDayAgoElement.textContent = `Wind Speed: ${weatherData.windSpeed} m/s`;
    temperatureOneDayAgoElement.textContent = `Temperature: ${weatherData.temperature}°C`;
    humidityOneDayAgoElement.textContent = `Humidity: ${weatherData.humidity}%`;
}

// Call the function to update the content in the sixth card
updateSixthCard();

// for 2nd card 
// JavaScript to fetch and display previous day's weather data in the second card
const previousDayCard = document.querySelector('.card-title:contains("Previous Day")').closest('.card');

const windSpeedPreviousElement = document.getElementById('wind-speed-previous');
const temperaturePreviousElement = document.getElementById('temperature-previous');
const humidityPreviousElement = document.getElementById('humidity-previous');

// Function to fetch weather data for a specific date (e.g., previous day)
function fetchWeatherDataForDate(date) {
    // Replace 'YOUR_API_URL' with the actual URL to fetch the weather data
    const apiUrl = `YOUR_API_URL?date=${date}`;

    return fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            return {
                windSpeed: data.wind.speed,
                temperature: data.main.temp,
                humidity: data.main.humidity,
            };
        })
        .catch((error) => {
            console.error('Error fetching weather data:', error);
            return {};
        });
}

// Function to update the content in the second card
async function updateSecondCard() {
    const currentDate = new Date();
    const previousDate = new Date(currentDate);
    previousDate.setDate(currentDate.getDate() - 1); // Calculate the date for the previous day

    // Fetch weather data for the previous day
    const weatherData = await fetchWeatherDataForDate(previousDate);

    // Update the content in the second card
    windSpeedPreviousElement.textContent = `Wind Speed: ${weatherData.windSpeed} m/s`;
    temperaturePreviousElement.textContent = `Temperature: ${weatherData.temperature}°C`;
    humidityPreviousElement.textContent = `Humidity: ${weatherData.humidity}%`;
}

// Call the function to update the content in the second card
updateSecondCard();
//for 3rd card 
// JavaScript to fetch and display data from 2 days ago in the third card
const twoDaysAgoCard = document.querySelector('.card-title:contains("2 Days Ago")').closest('.card');

const windSpeedTwoDaysAgoElement = document.getElementById('wind-speed-two-days-ago');
const temperatureTwoDaysAgoElement = document.getElementById('temperature-two-days-ago');
const humidityTwoDaysAgoElement = document.getElementById('humidity-two-days-ago');

// Function to fetch weather data for a specific date (e.g., two days ago)
function fetchWeatherDataForDate(date) {
    // Replace 'YOUR_API_URL' with the actual URL to fetch the weather data
    const apiUrl = `YOUR_API_URL?date=${date}`;

    return fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            return {
                windSpeed: data.wind.speed,
                temperature: data.main.temp,
                humidity: data.main.humidity,
            };
        })
        .catch((error) => {
            console.error('Error fetching weather data:', error);
            return {};
        });
}

// Function to update the content in the third card
async function updateThirdCard() {
    const currentDate = new Date();
    const twoDaysAgoDate = new Date(currentDate);
    twoDaysAgoDate.setDate(currentDate.getDate() - 2); // Calculate the date for 2 days ago

    // Fetch weather data for two days ago
    const weatherData = await fetchWeatherDataForDate(twoDaysAgoDate);

    // Update the content in the third card
    windSpeedTwoDaysAgoElement.textContent = `Wind Speed: ${weatherData.windSpeed} m/s`;
    temperatureTwoDaysAgoElement.textContent = `Temperature: ${weatherData.temperature}°C`;
    humidityTwoDaysAgoElement.textContent = `Humidity: ${weatherData.humidity}%`;
}

// Call the function to update the content in the third card
updateThirdCard();


//4th card 

// JavaScript to fetch and display data from 3 days ago in the fourth card
const threeDaysAgoCard = document.querySelector('.card-title:contains("3 Days Ago")').closest('.card');

const windSpeedThreeDaysAgoElement = document.getElementById('wind-speed-three-days-ago');
const temperatureThreeDaysAgoElement = document.getElementById('temperature-three-days-ago');
const humidityThreeDaysAgoElement = document.getElementById('humidity-three-days-ago');

// Function to fetch weather data for a specific date (e.g., three days ago)
function fetchWeatherDataForDate(date) {
    // Replace 'YOUR_API_URL' with the actual URL to fetch the weather data
    const apiUrl = `YOUR_API_URL?date=${date}`;

    return fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            return {
                windSpeed: data.wind.speed,
                temperature: data.main.temp,
                humidity: data.main.humidity,
            };
        })
        .catch((error) => {
            console.error('Error fetching weather data:', error);
            return {};
        });
}

// Function to update the content in the fourth card
async function updateFourthCard() {
    const currentDate = new Date();
    const threeDaysAgoDate = new Date(currentDate);
    threeDaysAgoDate.setDate(currentDate.getDate() - 3); // Calculate the date for 3 days ago

    // Fetch weather data for three days ago
    const weatherData = await fetchWeatherDataForDate(threeDaysAgoDate);

    // Update the content in the fourth card
    windSpeedThreeDaysAgoElement.textContent = `Wind Speed: ${weatherData.windSpeed} m/s`;
    temperatureThreeDaysAgoElement.textContent = `Temperature: ${weatherData.temperature}°C`;
    humidityThreeDaysAgoElement.textContent = `Humidity: ${weatherData.humidity}%`;
}

// Call the function to update the content in the fourth card
updateFourthCard();


//5th card 

// JavaScript to fetch and display data from 4 days ago in the fifth card
const fourDaysAgoCard = document.querySelector('.card-title:contains("4 Days Ago")').closest('.card');

const windSpeedFourDaysAgoElement = document.getElementById('wind-speed-four-days-ago');
const temperatureFourDaysAgoElement = document.getElementById('temperature-four-days-ago');
const humidityFourDaysAgoElement = document.getElementById('humidity-four-days-ago');

// Function to fetch weather data for a specific date (e.g., four days ago)
function fetchWeatherDataForDate(date) {
    // Replace 'YOUR_API_URL' with the actual URL to fetch the weather data
    const apiUrl = `YOUR_API_URL?date=${date}`;

    return fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            return {
                windSpeed: data.wind.speed,
                temperature: data.main.temp,
                humidity: data.main.humidity,
            };
        })
        .catch((error) => {
            console.error('Error fetching weather data:', error);
            return {};
        });
}

// Function to update the content in the fifth card
async function updateFifthCard() {
    const currentDate = new Date();
    const fourDaysAgoDate = new Date(currentDate);
    fourDaysAgoDate.setDate(currentDate.getDate() - 4); // Calculate the date for 4 days ago

    // Fetch weather data for four days ago
    const weatherData = await fetchWeatherDataForDate(fourDaysAgoDate);

    // Update the content in the fifth card
    windSpeedFourDaysAgoElement.textContent = `Wind Speed: ${weatherData.windSpeed} m/s`;
    temperatureFourDaysAgoElement.textContent = `Temperature: ${weatherData.temperature}°C`;
    humidityFourDaysAgoElement.textContent = `Humidity: ${weatherData.humidity}%`;
}

// Call the function to update the content in the fifth card
updateFifthCard();

//last card 

// Function to fetch weather data for a specific date (e.g., six days ago)
function fetchWeatherDataForDate(date) {
    // Replace 'YOUR_API_URL' with the actual URL to fetch the weather data
    const apiUrl = `YOUR_API_URL?date=${date}`;

    return fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            return {
                windSpeed: data.wind.speed,
                temperature: data.main.temp,
                humidity: data.main.humidity,
            };
        })
        .catch((error) => {
            console.error('Error fetching weather data:', error);
            return {};
        });
}

// Function to update the content in the sixth card
async function updateSixthCard() {
    const currentDate = new Date();
    const sixDaysAgoDate = new Date(currentDate);
    sixDaysAgoDate.setDate(currentDate.getDate() - 6); // Calculate the date for 6 days ago

    // Fetch weather data for six days ago
    const weatherData = await fetchWeatherDataForDate(sixDaysAgoDate);

    // Update the content in the sixth card
    // Add your code here to update the content in the card
}

// Call the function to update the content in the sixth card
updateSixthCard();



