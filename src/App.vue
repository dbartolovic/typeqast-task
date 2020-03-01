<template>
  <div id="app">
    <header>
      <Header />
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>

<style lang="scss">
@import url('./reset.css');

#app {
  font-family: 'Lato';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  main {
    width: 100%;
    max-width: 1260px;
    margin: 0 auto;
    padding: 0 8px;
  }
}
</style>
