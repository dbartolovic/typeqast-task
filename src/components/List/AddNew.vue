<template>
    <li class="add-new">
      <router-link to="/add-contact">
        <font-awesome-icon icon="plus" />
        <span>Add new</span>
      </router-link>
    </li>
</template>

<script>
export default {
  name: 'AddNew',
};
</script>

<style lang="scss" scoped>
li.add-new {
  width: 270px;
  height: 150px;
  margin: 0 15px 30px;
  border-radius: 4px;
  color: #2DA1AD;
  border: 1px dashed #2DA1AD;
  opacity: 0.5;
  transition: all 150ms linear;
  &:hover {
    border: 1px solid #2DA1AD;
    opacity: 1;
  }
  @media (max-width: 615px) {
    width: 100%;
    max-width: 360px;
    height: 60px;
    margin: 0 0 10px;
  }
  a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (max-width: 615px) {
      padding-left: 20px;
      justify-content: flex-start;
      flex-direction: row;
    }
  }
  .fa-plus {
    font-size: 18px;
    stroke: #ffffff;
    stroke-width: 50px;
    margin-bottom: 10px;
    @media (max-width: 615px) {
      margin: 0 18px 0 0;
    }
  }
  span {
    font-size: 16px;
  }
}
</style>
