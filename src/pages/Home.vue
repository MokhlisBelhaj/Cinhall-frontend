<template>
   
  <div class="contaner a1 position-absolute top-50 start-50 translate-middle d-flex flex-column  p-3">
    <div class="position-absolute mb-5 start-50 translate-middle">
        <img src="../../public/img/logo1.png" alt="" />
      </div>
        <h3 class="text-light text-center">welcome</h3>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control align-center text-white bg-dark"
            placeholder="identification"
            aria-label="identification"
            aria-describedby="button-addon2"
          />
          <RouterLink to="/reservation">
            <button
            class="btn btn-outline-secondary text-light btn-primary"
            type="button"
            id="button-addon2">
            login
          </button>
          </RouterLink>
          
        </div>
            <RouterLink to="/films" class="text-danger mx-auto"
          ><button class="btn btn-primary  " type="submit">
            new compte
          </button></RouterLink>
      </div>
     

</template>

<script>
import Title from "@/components/Title.vue";
export default {
  name: "Home",
  components: {
    Title,
  },
};
</script>
<style>
img {
  width: 40vw;
  height: 40vh;
}
.a1{
    background: rgba(217, 217, 217, 0.18);
border-radius: 16px;
width:fit-content;
}
</style>
