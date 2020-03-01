<template>
  <div class="container">
    <ListSelector />
    <SearchContainer />
    <router-view />
  </div>
</template>

<script>
import ListSelector from '@/components/Contacts/ListSelector.vue';
import SearchContainer from '@/components/Contacts/SearchContainer.vue';

export default {
  name: 'Contacts',
  components: {
    ListSelector,
    SearchContainer,
  },
};
</script>
