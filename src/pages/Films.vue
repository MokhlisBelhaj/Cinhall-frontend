<template>
<div class="contaner a1 position-absolute top-50 start-50 translate-middle d-flex  p-3">

<div class="row">
  <div class="col-6">
  <label for="" class="text-light">name</label>
  <div class="input-group mb-3">
    <input
      type="text"
      class="form-control text-white bg-dark"
      placeholder="name"
    />
    
    
  </div>
  <label for="" class="text-light">email</label>
  <div class="input-group mb-3">
    <input
      type="email"
      class="form-control text-white bg-dark"
      placeholder="email"
      aria-describedby="button-addon2"
    />
    
    
  </div>
  <label for="" class="text-light">CNI</label>
  <div class="input-group mb-3">
    <input
      type="text"
      class="form-control text-white bg-dark"
      placeholder="HH..."
    />
    <button class="btn btn-primary" type="submit">
    create accounte
    </button>
    
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
export default{
    name:'Films',
    components:{
    }
}
</script>
<style>
img {
  width: 20vw; 
   height: 20vh; 
}
.a1{
    background: rgba(217, 217, 217, 0.18);
border-radius: 16px;
width:fit-content;
}
</style>