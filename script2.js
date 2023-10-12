(function () {
    const city_name = 'mangalore';
    let api_key = '97c81e6c3b5c1a3ed8d05fefd2895b5c';
    let apiResponse;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=mangalore&appid=${api_key}`)
        .then(response => {
            if(!response.ok){
                console.log(response);
            }
            return response.json();
        })
        .then(data => {
            apiResponse = data;
            showData(data);
        })
        .catch(error => {
            console.log(error);
        })


    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];

    const currentDate = new Date();
    const currentDay = currentDate.getDate()-1;

    const allDateHolders = document.querySelectorAll('.date');

    for(i=0; i<6; i++){
        const previousDate = new Date();
        previousDate.setDate(currentDay - i);
        const previousDay = previousDate.getDate();
        const previousMonthIndex = previousDate.getMonth();
        const previousMonth = monthNames[previousMonthIndex];
        const previousYear = previousDate.getFullYear();

        allDateHolders[i].textContent = `${previousDay} ${previousMonth} ${previousYear}`
    }

    const prevWindSpeed = document.querySelectorAll('#wind-speed-previous');
    const prevTemp = document.querySelectorAll('#temperature-previous');
    const prevHumidity = document.querySelectorAll('#humidity');
    console.log(prevTemp);
    prevWindSpeed[0].textContent = 0.36;
    prevTemp[0].textContent = 35;
    console.log(prevTemp[0].textContent)
    prevHumidity[0].textContent = 70;
})();


function showData(response){
    const humidity = document.getElementById('humidityPercentage');
    humidity.textContent = response.main.humidity;
    humidityDes(response.main.humidity);

    const windSpeed = document.getElementById('windMeasurement');
    windSpeed.textContent = response.wind.speed;

    const precipitation = document.getElementById('precipitationMeasurement');
    precipitation.textContent = 'apiResponse' + ' cm';
    precipitationDes(50);

    const uvIndex = document.getElementById('uvIndex');
    uvIndex.textContent = 'apiResponse';
    uvIndexDesc(5)
    

    const feelsLike = document.getElementById('feelsLikeTemp');
    const feelsLikeFahrenheit = response.main.feels_like;
    const feelsLikeCelsius = feelsLikeFahrenheit - 273.15;
    feelsLike.textContent = `${feelsLikeCelsius.toFixed(2)}°C`

    const chanceOfRain = document.getElementById('rainChance');
    chanceOfRain.textContent = 'apiRepsonse' + '%'
   
}

function humidityDes(humidityPercentage){
    const desciption = document.querySelector('.indicator');
    
    // Update the indicator text based on the value
    if (humidityPercentage > 70) {
        desciption.textContent = 'High Humidity';
    } else if (humidityPercentage > 40) {
        desciption.textContent = 'Normal Humidity';
    } else {
        desciption.textContent = 'Low Humidity';
    }
};

function precipitationDes(data){
    const description = document.getElementById('precipitationDescription');
    if (data > 0) {
        description.textContent = 'Rainy';
      } else {
        description.textContent = 'Dry';
      }
}

function uvIndexDesc(uvIndex){
    const description = document.getElementById('uvLabel');
    if (uvIndex < 3) {
        description.textContent = 'Low';
      } else if (uvIndex < 6) {
        description.textContent = 'Medium';
      } else {
        description.textContent = 'High';
      }
}


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
  