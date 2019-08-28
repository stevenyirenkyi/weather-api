<template>
  <div id="main-div" class="is-clipped">
      <div class="column is-one-third is-offset-one-third">
        <p>
          Enter any location below to get the current weather conditions for that
          area
        </p>
      <div class="field">
        <div class="control" v-bind:class="{'is-loading': isLoading}">
          <input
           type="text" class="input " v-model="location"
           :placeholder="placeholderValue">
        </div>
      </div>
      <div class="field">
        <button
          type="button"
          class="button is-danger"
          @click="submit">Check Out Weather</button>
      </div>
    </div>
    <div class="modal" v-bind:class="{'is-active': isActive }">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="card box">
          <!-- <div class="card-image">
            <img src=iconUrl alt="nope">
          </div> -->
          <div class="card-content" >
              <h1 id="temperature">{{temperature}}°</h1>
              <h2 class="title">{{main}}</h2>
              <div class="level">
                <div class="level-item level-left">
                  <h2 class="subtitle">Humidity: {{humidity}}%</h2>
                </div>
                <div class="level-item level-right">
                  <h2 class="subtitle">Wind Speed: {{wind}}mph</h2>
                </div>
                <!-- <div class="level-item level-right">
                  <h2 class="subtitle">{{temp_max}}</h2>
                </div>
                <div class="level-item level-right">
                  <h2 class="subtitle">{{temp_min}}</h2> -->
                </div>
          </div>

        </div>
        <div class="container">
          <p class="subtitle is-spaced is-3">Location | {{location}}</p>
          <p class="subtitle is-4">Country | {{country}}</p>
        </div>
      </div>
      <button class="modal-close is-large" @click="clear"></button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      placeholderValue: 'Location',
      isActive: false,
      isLoading: false,
      location: '',
      temp_min: '',
      temp_max: '',
      wind: '',
      humidity: '',
      temperature: '',
      main: '',
      country: '',
      inputRules: [
        v => !!v || 'Location is required',
      ],
      // icon: '',
      // iconUrl: '',
    };
  },
  methods: {
    submit() {
      this.isLoading = true;
      return axios({
        method: 'post',
        data: {
          city: this.location,
        },
        url: 'http://localhost:8083/searchlocation',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          this.wind = response.data.wind.speed;
          this.temp_min = response.data.main.temp_min;
          this.temp_max = response.data.main.temp_max;
          this.humidity = response.data.main.humidity;
          this.main = response.data.weather.main;
          this.temperature = response.data.main.temp;
          this.main = response.data.weather[0].description;
          // this.iconUrl = "http://openweathermap.org/img/wn/" + response.data.weather[0].icon + "@2x.png";
          this.country = response.data.sys.country;
          this.isActive = true;
        })
        .catch(() => {
          this.placeholderValue = 'Error, no Internet';
          this.isLoading = false;
        });
    },
    clear() {
      this.isActive = false;
      this.location = '';
      this.isLoading = false;
    },
  },
};
</script>

<style scoped>
#temperature{
  font-size: 8rem;
  display: block;
}
input{
  text-align: center;
}
</style>
