import Vue from 'vue';
import Router from 'vue-router';
import Contacts from '@/views/Contacts/Contacts.vue';
import AllContacts from '@/views/Contacts/AllContacts.vue';
import Favorites from '@/views/Contacts/Favorites.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Contacts',
      component: Contacts,
      children: [
        {
          path: '',
          component: AllContacts,
        },
        {
          path: 'favorites',
          component: Favorites,
        },
      ],
    },
  ],
});
