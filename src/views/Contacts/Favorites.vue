<template>
  <ListContainer :contacts="favorites" />
</template>

<script>
import ListContainer from '@/components/List/ListContainer.vue';

export default {
  name: 'Favorites',
  components: {
    ListContainer,
  },
  data() {
    return {
      allContacts: [],
      favorites: [],
    };
  },
  mounted() {
    if (localStorage.getItem('contacts')) this.allContacts = JSON.parse(localStorage.getItem('contacts'));
    this.filterFavorites();
  },
  computed: {
    filterFavorites() {
      this.favorites.append(this.allContacts.map((item) => {
        if (item.favorite) {
          this.favorites.push(item);
        }
        return null;
      }));
      return null;
    },
  },
};
</script>
