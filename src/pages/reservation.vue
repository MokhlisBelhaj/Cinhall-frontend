<template>
  <div class="row">
    <div class="col-6">
      <h1 class="text-center text-light">Your reservation {{ name }}</h1>
    </div>
    <div class="col-4 g-3">
      <router-link to="/newRes">
        <button class="btn btn-primary">New reservation </button>
      </router-link>
    </div>
    <div class="col-2 g-3">
      <button class="btn btn-danger" @click="logout">Logout</button>
    </div>
  </div>
  
  <div class="container-md mt-5 p-4">
    <div v-if="yourRes.length==0" class="text-uppercase text-light text-center">
      Aucune réservation trouvée.
    </div>
    <div v-else>
      <div class="row">
        <div v-for="(reservation, index) in yourRes" :key="index" class="col-md-4 mt-4">
          <div class="card text-bg-dark" style="width: 18rem">
            <img src="../../public/img/6By839wAuutS3OoLTPqu8wuUet2.jpg" class="card-img-top" alt="..." />
            <ul class="list-group list-group-flush">
              <li class="list-group-item text-bg-dark">Name: {{ reservation.title }}</li>
              <li class="list-group-item text-bg-dark">Date: {{ reservation.date_reservation }}</li>
              <li class="list-group-item text-bg-dark">Place: {{ reservation.place_reservee }}</li>
              <li class="list-group-item text-bg-dark">Salle: {{ reservation.idSalle }}</li>
            </ul>
            <div class="card-body">
              <button class="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "reservation",
  data() {
    return {
      name: localStorage.getItem("user"),
      id: localStorage.getItem("idUser"),
      yourRes:[],
    };
  },
  async mounted() {
    axios.get("http://localhost/CineHall/Reservations/userReserv/"+ this.id)
      .then((res) => {
        if (Array.isArray(res.data)) {
          this.yourRes = res.data;
        } else {
          this.yourRes = [];
        }
      });
  },
  created(){
          if(!(localStorage.getItem("user"))){
           this.$router.push('/')
          }
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/");
    },
  },
};
</script>
