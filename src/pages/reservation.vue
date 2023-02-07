<template>
  <div class="row">
    <div class="col-6"> 
           <h1 class="text-center text-light">your reservation Mr amine C</h1>
    </div>
    <div class="col-4 g-3">

        <RouterLink to="/"
      ><button class="btn btn-primary  ">new reservation</button>
    </RouterLink>
    </div>
    <div class="col-2 g-3">
    <RouterLink to="/"
      ><button class="btn btn-danger">logout</button>
    </RouterLink>
  </div>
</div>
  <div class="container-md m-auto p-4">
    <div class="card" style="width: 18rem">
      <img
        src="../../public/img/6By839wAuutS3OoLTPqu8wuUet2.jpg"
        class="card-img-top"
        alt="..."
      />
      <ul class="list-group list-group-flush">
        <li class="list-group-item">name</li>
        <li class="list-group-item">date</li>
        <li class="list-group-item">place</li>
      </ul>
      <div class="card-body">
        <input type="button" class="btn btn-danger" value="delete" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "reservation",
  components: {},
};
</script>
