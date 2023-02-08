<template>
  <div
    class="contaner a1 position-absolute top-50 start-50 translate-middle d-flex p-3"
  >
    <div class="row">
      <div class="col-6">
        <form @submit.prevent="register">
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
            <button @onclick="register"  class="btn btn-primary" type="submit">
              create accounte
            </button>
          </div>

        </form>

        <div>
          <h1>
            {{ reference }}
          </h1>
        </div>


        <RouterLink to="/" class="text-danger"
          ><button class="btn btn-primary" type="submit">
            login
          </button></RouterLink
        >
      </div>
      <div class="col-6">
        <img src="../../public/img/logo1.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default{
  data(){
    return {
      reference:"",
      form:{
        email:"",
        name:"",
        CNI:""
      }
    }
  },
  methods:{
       async register(){
          // var fd=new FormData();
          // fd.append('email',this.email)
          // fd.append('name',this.name)
          // fd.append('CNI',this.CNI)

          try{
            axios
            .post('http://localhost/CineHall/users/register',JSON.stringify(this.form))
            .then((res => this.reference = res.data.reference)
            .catch(function (error){
            console.log(error)})
                //  alert( console.log(data.res))
                // this.$router.push({ path: '/home' });

            )}
            catch (err){
                console.error(err);
            }
          }

        }
      }
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
