<template>
  <ListContainer :contacts="allContacts" />
</template>

<script>
import ListContainer from '@/components/List/ListContainer.vue';

export default {
  name: 'AllContacts',
  components: {
    ListContainer,
  },
  data() {
    return {
      allContacts: [],
    };
  },
  mounted() {
    if (localStorage.getItem('contacts')) this.allContacts = JSON.parse(localStorage.getItem('contacts'));
  },
};
</script>
