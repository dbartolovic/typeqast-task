<template>
  <ul class="list-container">
    <AddNew v-if="$route.path === '/'" />
    <ListItem v-for="item in contacts" v-bind:key="item.id" :contact="item" />
  </ul>
</template>

<script>
import AddNew from '@/components/List/AddNew.vue';
import ListItem from '@/components/List/ListItem.vue';

export default {
  name: 'ListContainer',
  components: {
    ListItem,
    AddNew,
  },
  props: {
    contacts: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.list-container {
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1260px) {
    justify-content: center;
  }
}
</style>
