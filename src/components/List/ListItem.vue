<template>
    <li class="list-item">
      <router-link class="profile-info" to="contact-details">
        <div class="profile-image">
          <img :src="contact.image" />
        </div>
        <h4>{{contact.firstName}} {{contact.lastName}}</h4>
      </router-link>
      <div class="action-bar">
        <div class="column-left">
          <font-awesome-icon :icon="[contact.favorite ? 'fas' : 'far', 'heart']" />
        </div>
        <div class="column-right">
          <router-link to="edit-contact">
            <font-awesome-icon icon="pencil-alt" />
          </router-link>
          <font-awesome-icon icon="trash-alt" />
        </div>
      </div>
    </li>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    contact: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
li.list-item {
  position: relative;
  width: 270px;
  height: 150px;
  margin: 0 15px 30px;
  border: 1px solid rgba(187,196,195,0.4);
  border-radius: 4px;
  transition: all 150ms linear;
  &:hover {
    border: 1px solid #2DA1AD;
  }
  @media (max-width: 615px) {
    width: 100%;
    max-width: 360px;
    height: 60px;
    margin: 0 0 10px;
    padding: 7px 13px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  a.profile-info {
    width: 100%;
    height: 100%;
    padding: 15px 17px 23px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    @media (max-width: 615px) {
      flex: 1;
      padding: 0;
      margin-right: 10px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: row;
    }
    h4 {
      max-width: 220px;
      color: #BBC4C3;
      font-size: 18px;
      font-weight: bold;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      @media (max-width: 615px) {
        width: 120px;
        flex: 1;
        font-size: 14px;
        white-space: unset;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
    .profile-image {
      height: 66px;
      width: 66px;
      margin-bottom: 13px;
      border: 3px solid rgba(187,196,195,0.3);
      border-radius: 50%;
      overflow: hidden;
      @media (max-width: 615px) {
        height: 46px;
        width: 46px;
        margin: 0 25px 0 0;
      }
    }
  }
  .action-bar {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    padding: 15px 17px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    pointer-events: none;
    @media (max-width: 615px) {
      position: relative;
      width: 100px;
      padding: 0;
      justify-content: flex-end;
    }
    svg {
      height: 18px;
      width: 15px;
      color: #BBC4C3;
      pointer-events: auto;
      @media (max-width: 615px) {
        &.fa-heart {
          margin-right: 26px;
        }
      }
      &.fa-pencil-alt {
        margin-right: 26px;
        padding-bottom: 2px;
        border-bottom: solid 1px #BBC4C3;
      }
    }
  }
}
</style>
