// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faSearch, faPlus, faHeart, faPencilAlt, faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import initialData from './initialData.json';

library.add(faSearch, faPlus, faPencilAlt, faHeart, faTrashAlt, farHeart);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  beforeCreate() {
    if (!localStorage.contacts) {
      console.log('Contacts initialized!');
      localStorage.setItem('contacts', JSON.stringify(initialData));
    }
  },
  el: '#app',
  router,
  render: (h) => h(App),
  components: { App },
  template: '<App/>',
});
