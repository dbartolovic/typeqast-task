<template>
  <div id="search-container">
    <label>
      <font-awesome-icon icon="search" />
      <input />
    </label>
  </div>
</template>

<script>

export default {
  name: 'SearchContainer',
};
</script>

<style lang="scss" scoped>
#search-container {
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 615px) {
  max-width: 320px;
  margin: 0 auto;
  padding: 25px 0;
  }
  label {
    position: relative;
    width: 100%;
    max-width: 540px;
  }
  input {
    width: 100%;
    height: 60px;
    padding: 10px 20px 10px 60px;
    font-size: 20px;
    color: #BBC4C3;
    border: solid 1px #eeeeee;
    border-radius: 5px;
    box-shadow: 0 0 20px 2px rgba(90, 90, 90, 0.15);
  }
  .fa-search {
    position: absolute;
    left: 25px;
    top: 20px;
    font-size: 20px;
    stroke: #ffffff;
    stroke-width: 50px;
    color: #BBC4C3;
  }
}
</style>
