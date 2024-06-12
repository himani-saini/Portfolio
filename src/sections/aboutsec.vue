<!-- eslint-disable vue/no-parsing-error -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container-fluid my-5">
    <div class="row flex-wrap">
       <!-- Image column -->
       <div class="col-md-6 d-flex justify-content-center" style="background-color:lightgoldenrodyellow;">
        <img :src="require('@/assets/profile1.jpg')" class="img-fluid" alt="Profile Picture">
      </div>
      <!-- Text column -->
      <div id="content" class="col-md-6 d-flex flex-column justify-content-center" style="background-color:lightskyblue; color:white; overflow-y: auto">
        <h2>About Me</h2>
        <p class="mt-4">
          As a web developer, i am responsible for designing and developing Web Pages.
          My primary focus is to create responsive,user-friendly experiences that meets the needs of a diverse online audience.
        </p>
      </div>
      
    </div>
  </div>

</template>

<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name:'aboutsec',
}
</script>

<style scoped>
h2,
p {
  font-family: 'Josefin Sans';
  text-align: left;
  margin-left: 10px;
}

p{
  font-size: 20px;
}

.container {
  margin-top: 5rem !important;
}

img {
  max-width: 100%;
  height: auto;
  width: 60%;
  margin-top: 2rem;
}

@media(max-width:768px){
  img{
    width: 40%;
    height:auto;
    
  }
  #content{
    padding-top: 10px;
  }
  
}
</style>
