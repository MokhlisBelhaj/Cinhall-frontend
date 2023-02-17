<template>
  <div
    class="contaner a1 position-absolute top-50 start-50 translate-middle d-flex p-3"
  >
    <div class="row">
      <div class="col-6">
        <form>
          <label for="" class="text-light">name</label>
          <div class="input-group mb-3">
            <input
              type="text"
              v-model="name"
              class="form-control text-white bg-dark"
              placeholder="name"
            />
          </div>
          <label for="" class="text-light">email</label>
          <div class="input-group mb-3">
            <input
              type="email"
              v-model="email"
              class="form-control text-white bg-dark"
              placeholder="email"
              aria-describedby="button-addon2"
            />
          </div>
          <label for="" class="text-light">CNI</label>
          <div class="input-group mb-3">
            <input
              type="text"
              v-model="CNI"
              class="form-control text-white bg-dark"
              placeholder="HH..."
            />
            <button @click="register()" type="button" class="btn btn-primary">
              create accounte
            </button>
          </div>
        </form>

        <RouterLink to="/" class="text-danger">
          <button @click="" class="btn btn-primary" type="submit">
            login
          </button>
          </RouterLink>
      </div>
      <div class="col-6">
        <img src="../../public/img/logo1.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      name: "",
      CNI: "",
    };
  },
  methods: {
    
    register() {
      const form = new FormData();
      form.append("name", this.name);
      form.append("email", this.email);
      form.append("CNI", this.CNI);
      if (this.name != "" && this.email != "" && this.CNI) {
        axios.post("http://localhost/CineHall/users/register",form)
        .then(res => {
            // after sucess
            console.log(res.data);
            this.$swal('your token is : '+ res.data.reference);
            // alert('your token is : '+ res.data.reference);
            // this.reset();
             this.$router.push('/');

          })
          .catch((err) => {
            // on error
            // alert(err.Error);
            console.log(err);
          });
      }else{
                  alert("erreur");
      }
    },
    reset() {
      (this.email = ""), (this.password = "");
    },
  },
};
</script>
<style>
img {
  width: 20vw;
  height: 20vh;
}
.a1 {
  background: rgba(217, 217, 217, 0.18);
  border-radius: 16px;
  width: fit-content;
}
</style>
