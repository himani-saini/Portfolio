<template>
  <div id="app">
    <Navbar @change-page="currentPage = $event" />
    <component :is="currentPageComponent"></component>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import mainsec from './sections/mainsec.vue';
import aboutsec from './sections/aboutsec.vue';
import contactsec from './sections/contactsec.vue';

export default {
  name: 'App',
  components: {
    Navbar
  },
  data() {
    return {
      currentPage: 'mainsec'
    };
  },
  computed: {
    currentPageComponent() {
      switch (this.currentPage) {
        case 'mainsec':
          return mainsec;
        case 'aboutsec':
          return aboutsec;
        case 'contactsec':
          return contactsec;
        default:
          return mainsec;
      }
    }
  }
};
</script>

<style>
@import 'bootstrap/dist/css/bootstrap.css';
@import 'bootstrap-vue/dist/bootstrap-vue.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
