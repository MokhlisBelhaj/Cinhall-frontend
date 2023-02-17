<template>
  <div
    class="contaner a1 position-absolute top-50 start-50 translate-middle d-flex flex-column p-3"
  >
    <div class="position-absolute mb-5 start-50 translate-middle">
      <img src="../../public/img/logo1.png" alt="" />
    </div>
    <h3 class="text-light text-center">welcome</h3>
    <div class="input-group mb-3">
      <input
        type="text"
        v-model="reference"
        class="form-control align-center text-white bg-dark"
        placeholder="identification"
        aria-label="identification"
        aria-describedby="button-addon2"
      />
      <button
        @click="login()"
        class="btn btn-outline-secondary text-light btn-primary"
        id="button-addon2"
      >
        login
      </button>
    </div>
    <RouterLink to="/register" class="text-danger mx-auto"
      ><button class="btn btn-primary" type="submit">
        new compte
      </button></RouterLink
    >
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      reference: "",
    };
  },
  methods: {
    login() {
      const form = new FormData();
      form.append("reference", this.reference);
      if (this.reference != "") {
        axios
          .post("http://localhost/CineHall/users/login", form)
          .then((res) => {
            res = res.data;
            if (!res.sucsses) {
              alert(res.invalid);
            } else {
              localStorage.setItem('idUser',res.data.id);
              localStorage.setItem('user',res.data.name);
              
              console.log(res);
              this.$router.push("/reservation");
            }
          });
      }
    },
  },
};
</script>

<style>
img {
  width: 40vw;
  height: 40vh;
}
.a1 {
  background: rgba(217, 217, 217, 0.18);
  border-radius: 16px;
  width: fit-content;
}
</style>
