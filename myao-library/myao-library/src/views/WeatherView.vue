<template>
    <div class="container">
        <div class="header">
           <h1>WEATHER APP</h1>
           <div class="search-bar">
            <input type="text" v-model="city" placeholder="Enter city name" class="search-input"/>
            <button @click="searchByCity" class="search-button">Search</button>
           </div>
        </div>
      
        <!--The <main> tag in HTML is used to specify the main content of a document More info about main, check https://www.w3schools.com/tags/tag_main.asp-->
        <main>
            <!--If there are no data returned, then skip rendering the information-->
            <div v-if="weatherData">
                <!--Display the weather data attribute returned from API Example of API data: https://openweathermap.org/current-->
                <h2>{{ weatherData.name }}, {{ weatherData.sys.country }}</h2>
                <div>
                    <!--The image source of of the weather icon will be coming from a function called iconUrl which will be shared in script later-->
                    <img :src="iconUrl" alt="Weather Icon" />
                    <p>{{ temperature }} °C</p>
                </div>
                <!-- weather [0] means the current weather, the way we need to obtain data depends on how the API JSON data looks-->
                <span>{{ weatherData.weather[0].description }}</span>
            </div>
        </main>
    </div>
</template>

<script>
  // The info section in 10.1.1 provided detailed information about this package 
  import axios from "axios";

  const apikey = "14fbcc6d4134378b6064919cbcb8aad9";
  
  export default {
    name: "App",
    data() {
      return {
        city: "",
        weatherData: null,
        hourlyForecast: [],
        dailyForecast: [],
      };
    },
    //computed is a property that is used to define a property that 
    //is dependent on other data properties. 
    //If we using a more easy to understand words to understand the concept: 
    //the derived value such as temperature automatically update when the relevant value change.
    computed: {
      //There are multiple way to obtain the data in Celsius format.
      //Calculation by yourself like below after data is retireved or via API parameters
      
      //Example of adding additional units requirement, if you choose this, remember to change section 3.1
      //https://api.openweathermap.org/data/2.5/weather?lat=XXX&lon=-XXX.15&appid={API key}&units=metric
      temperature() {
        return this.weatherData
          ? Math.floor(this.weatherData.main.temp)
          : null;
      },
      //Get the current weather icon using the API link
      iconUrl() {
        return this.weatherData
          ? `https://openweathermap.org/img/wn/${this.weatherData.weather[0].icon}@2x.png`
          : null;
      },
    },
    //There are two steps involved in this, 
    //step 1: identify current location 
    //step 2: after identify, get the weather data straight based on the current location.
    mounted() {
      this.fetchCurrentLocationWeather();
    },
    methods: {
      //Async in a easy to understand way means the method will run in backend thread, 
      //And it won't occupy the main thread, so the user experience is still smooth
      async fetchCurrentLocationWeather() {
        //The navigator.geolocation object is part of the Web API provided by modern web browsers
        //Please note this function is not belongs to Vue or openweather.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            //API link to obtain the current weather based on the current location browser identified 
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}&units=metric`;
            //await means wait for the fetchWeatherData method to complete before proceeding
            await this.fetchWeatherData(url);
          });
        }
      },
      async fetchWeatherData(url) {
        try {
          console.log("Fetching weather data from:", url);
          const response = await axios.get(url);
          console.log("API Response:", response.data);
          //Returned data from API is stored as JSON file in weatherData
          this.weatherData = response.data;
          console.log("Weather data updated:", this.weatherData);
        } catch (error) {
          console.error("Error fetching weather data:", error);
          if (error.response && error.response.status === 401) {
            alert("Invalid API Key. Please get a valid API key from OpenWeatherMap.");
          } else if (error.response && error.response.status === 404) {
            alert("City not found. Please check the city name and try again.");
          } else {
            alert("Failed to fetch weather data. Please try again later.");
          }
          this.weatherData = null;
        }
      },
      // Method to search weather by city name
      async searchByCity() {
        if (!this.city.trim()) {
          alert("Please enter a city name");
          return;
        }
        console.log("Searching for city:", this.city);
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${apikey}&units=metric`;
        console.log("API URL:", url);
        await this.fetchWeatherData(url);
      }
    }
  }
</script>

<style scoped>
.container {
  text-align: center;
  margin-top: 100px;
}

.header h1 {
  font-size: 48px;
  font-weight: normal;
  color: #333;
  margin-bottom: 50px;
  margin-top: 0;
  font-family: sans-serif;
}

.search-bar {
  margin-bottom: 30px;
}

.search-input {
  padding: 8px;
  border: 1px solid #d3d3d3;
  border-radius: 4px;
  width: 200px;
  background-color: white;
  margin-right: 10px;
}

.search-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.search-button:hover {
  background-color: #0056b3;
}

main {
  margin-top: 30px;
}

main h2 {
  font-size: 32px;
  font-weight: normal;
  color: #333;
  margin-bottom: 20px;
  font-family: sans-serif;
}

main div {
  margin-bottom: 20px;
}

main img {
  width: 80px;
  height: 80px;
  display: block;
  margin: 0 auto 10px auto;
}

main p {
  font-size: 24px;
  color: #333;
  margin: 0 0 10px 0;
  font-family: sans-serif;
}

main span {
  font-size: 18px;
  color: #666;
  font-family: sans-serif;
  display: block;
}
</style>