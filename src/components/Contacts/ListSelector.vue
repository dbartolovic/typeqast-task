<template>
    <div id="list-select">
      <div class="list-selector">
        <router-link to="/">All contacts</router-link>
      </div>
      <div class="list-selector">
        <router-link to="/favorites">My favorites</router-link>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ListSelect',
};
</script>

<style lang="scss" scoped>
#list-select {
  width: 100%;
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: solid 2px #2DA1AD;
  @media (max-width: 615px) {
    max-width: 320px;
    padding: 16px 0;
    margin: 0 auto;
  }
  .list-selector {
    font-size: 18px;
    font-weight: bold;
    padding: 0 30px;
    &:first-child {
      border-right: solid 1px #BBC4C3;
    }
    a {
      color: #BBC4C3;
    }
    a.router-link-exact-active {
      color: #2DA1AD;
    }
  }
}
</style>
