<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container my-5">
    <div class="row flex-wrap-reverse">
      <!-- Text column -->
      <div class="col-md-6 d-flex flex-column justify-content-center">
        <h2>Hello👋,</h2>
        <h1>I'm a Web Developer</h1>
        <p class="mt-4 ">
          I am a front-end developer who constantly seeks out innovative solutions to everyday problems.
          As a beginner, I'm passionate about mastering the fundamentals of web design and development, eagerly soaking up knowledge and honing my skills with each project. 
        </p>
        <div class="d-flex justify-content-center mt-2 gap-3">
          <a :href="instagramProfile" aria-label="Instagram" target="_self">
            <font-awesome-icon :icon="['fab', 'instagram']" size="lg" style="color:black"/>
          </a>
          <a :href="githubProfile" aria-label="Github" target="_self">
            <font-awesome-icon :icon="['fab', 'github']" size="lg" style="color:black" />
          </a>
          <a v-bind:href="pinterestProfile" aria-label="Pinterest" target="_self">
            <font-awesome-icon :icon="['fab', 'pinterest']" size="lg" style="color:black;" />
          </a>
        </div>
      </div>
       <!-- Image column -->
       <div class="col-md-6 d-flex justify-content-center">
        <img :src="require('@/assets/profile3.jpg')" class="img-fluid" alt="Profile Picture">
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  data(){
    return{
      instagramProfile:'https://www.instagram.com/camaraderie_9/',
      githubProfile:'https://github.com/himani-saini',
      pinterestProfile:'https://in.pinterest.com/awwwards/'
    }
  },

  components: {
    FontAwesomeIcon,
  }
}
</script>

<style scoped>
h2,h1,
p {
  font-family: 'Josefin Sans';
  text-align: left;
}
p{
  font-size:18px;
}
.container {
  margin-top: 5rem !important;
}

img {
  max-width: 100%;
  height: auto;
  width: 75%;
}
</style>
