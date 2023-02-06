<template>
    <body>
        <h1>  {{ content }}</h1>
      
    </body>

</template>

<script>
export default{
    name:'Title',
    data(){
        return {
            content:'Hell Cinema'
            
        }
    }
}
</script>
<style>
body{
background-image:url(../img/back.jpg);
background-size: cover;
}
h1{
    color: red;
}
    

</style>