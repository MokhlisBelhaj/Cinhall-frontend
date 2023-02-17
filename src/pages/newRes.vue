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
        <form>
          <div class="input-group mb-3">
            <input
              type="date"
              name="date"
              class="form-control text-white bg-dark"
              ref="dateInput"
              :min="minDate"
          
            />
          </div>
          <div class="input-group mb-3">
            <select
              name="idFilm"
              class="form-control text-white bg-dark"
              v-model="selectedFilmTitle" 
            >
              <option value="" disabled selected>Select a film</option>
              <option v-for="film in films" :key="film.id">
                {{ film.title }}
              </option>
            </select>
          </div>
          <input type="button" value="check"  @click="submitFormh()">
        </form>
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
          {{
            selectedFilmTitle
              ? films.find((film) => film.title === selectedFilmTitle).id
              : ""
          }}
        </h6>
        <div>
          <form>
            <label class="text-white" v-for="n in 50" :key="n">
              <input
                type="checkbox"
                :checked="isResrved(n)"
                :disabled="isResrved(n)"
                @change="addRes(n)"
              />
              {{ n }}
            </label>
          </form>
        </div>
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
      reservedPlaces: [],
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
    isResrved(n) {
      return this.reservedPlaces.includes(n);
    },
    submitFormh() {
      // const selectedFilm = this.films.find(
      //   (film) => film.title === this.selectedFilmTitle
      // );
      // const reservationData = {
      //   idFilm: selectedFilm.id,
        
      // };
      // console.log(reservationData);
      
      const selectedFilm = this.films.find((film) => film.title === this.selectedFilmTitle);
      const form_data = new FormData();
      console.log(form_data);
      form_data.append("idFilm",selectedFilm.id);
      form_data.append("date",this.$refs.dateInput.value);
      axios
        .post(
          "http://localhost/CineHall/Reservations/getPlaceRes",form_data
        )
        .then((response) => {
          const reservedPlaces = response.data;
          this.reservedPlaces = reservedPlaces;
          reservedPlaces.push(response.data)
          console.log(reservedPlaces);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // sendReservation() {
    //   const selectedFilm = this.films.find(film => film.title === this.selectedFilmTitle);
    //   const reservationData = {
    //     idFilm: selectedFilm.id,
    //     date: this.$refs.dateInput.value,
    //     places: this.reservedPlaces
    //   };
    //   axios.post('http://localhost/CineHall/Reservations/getPlaceRes', reservationData)
    //     .then(response => {
    //       // Faire quelque chose en cas de succès
    //     })
    //     .catch(error => {
    //       // Faire quelque chose en cas d'erreur
    //     });
    // }
  },

  mounted() {
    this.getFilms();
    this.disableSundays();
    this.minDate = new Date().toISOString().split("T")[0];
   
  },
};
</script>
