<template>
  <div
    class="container a1 position-absolute top-50 start-50 translate-middle p-3"
  >
    <div class="row">
      <div class="col-md-6 flex-column">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control text-white bg-dark"
            disabled
            v-model="username"
          />
        </div>
        <div class="input-group mb-3">
          <input
            type="date"
            class="form-control text-white bg-dark"
            ref="dateInput"
            :min="minDate"
          />
        </div>
        <div class="input-group mb-3">
          <select
            name="film"
            class="form-control text-white bg-dark"
            v-model="selectedFilmTitle"
          >
            <option value="" disabled selected>Select a film</option>
            <option v-for="film in films" :key="film.id">
              {{ film.title }}
            </option>
          </select>
        </div>
      </div>
      <div class="col-md-6">
        <h3 class="text-white">{{ selectedFilmTitle }}</h3>
        <h6 class="text-white">
          {{
            selectedFilmTitle
              ? films.find((film) => film.title === selectedFilmTitle)
                  .description
              : ""
          }}
        </h6>
       <form >
      <label v-for="n in 50" :key="n">
        <input type="checkbox" :value="n" v-model="checkedItems">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path d="M248 48V256h48V58.7c23.9 13.8 40 39.7 40 69.3V256h48V128C384 57.3 326.7 0 256 0H192C121.3 0 64 57.3 64 128V256h48V128c0-29.6 16.1-55.5 40-69.3V256h48V48h48zM48 288c-12.1 0-23.2 6.8-28.6 17.7l-16 32c-5 9.9-4.4 21.7 1.4 31.1S20.9 384 32 384l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32V384H352v96c0 17.7 14.3 32 32 32s32-14.3 32-32V384c11.1 0 21.4-5.7 27.2-15.2s6.4-21.2 1.4-31.1l-16-32C423.2 294.8 412.1 288 400 288H48z"/>
  </svg>
      </label>
    </form>
  </div>
      </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      username: localStorage.getItem("user"),
      films: [],
      selectedFilmTitle: "",
      minDate: "",
    };
  },
  methods: {
    getFilms() {
      axios.post("http://localhost/CineHall/film/getfilms").then((res) => {
        this.films = res.data;
      });
    },
    disableSundays() {
      const dateInput = this.$refs.dateInput;
      dateInput.addEventListener("input", (event) => {
        const selectedDate = new Date(event.target.value);
        if (selectedDate.getDay() === 0) {
          event.target.value = "";
        }
      });
    },
  },
  mounted() {
    this.getFilms();
    this.disableSundays();
    this.minDate = new Date().toISOString().split("T")[0];
  },
};
</script>
