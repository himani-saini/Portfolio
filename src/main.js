import Vue from 'vue';
import Application from './application.vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


import { faInstagram, faLinkedin, faGithub, faPinterest,} from '@fortawesome/free-brands-svg-icons';

library.add(faInstagram, faLinkedin, faGithub, faPinterest);

Vue.component('font-awesome-icon', FontAwesomeIcon);

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.config.productionTip = false;

new Vue({
  render: h => h(Application),
}).$mount('#app');
