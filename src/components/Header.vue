<template>
  <div class="container">
    <router-link id="typeqast-logo" to="/" >
      <img src="@/assets/images/logos/typeqast-white.svg" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss" scoped>
.container {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(182.65deg, #78C9CE 0%, #2496A2 100%);
  border-bottom: solid 7px #A1CED3;
  #typeqast-logo {
    height: 19px;
    display: flex;
  }
}
</style>
