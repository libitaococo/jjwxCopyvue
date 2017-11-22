<template>
  <div id="app">
   <div class="header" :class="{'change': currentIndex === 2}">
    <ul class="tab">
      <li class="tab-item" @click="changeColor(0)" :class="{'light': currentIndex === 0}"><router-link to="/">书架</router-link></li>
      <li class="tab-item" @click="changeColor(1)" :class="{'light': currentIndex === 1}"><router-link to="/bookstore">书城</router-link></li>
      <li class="tab-item" @click="changeColor(2)" :class="{'light': currentIndex === 2}"><router-link to="/forum">论坛</router-link></li>
    </ul>
   </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    changeColor (index) {
      this.currentIndex = index
    }
  }
}
</script>

<style lang="less">
  @import "common/less/basic.less";
  #app {
    width: 100%;
    height: 100%;
    position: relative;
    .header {
      display: flex;
      background-color: #0F843A;
      font-size: 16px;
      color: white;
      width: 100%;
      height: 60px;
      .tab {
        width: 50%;
        height: 30px;
        margin: 23px auto 7px;
        .tab-item {
          color: white;
          height: 30px;
          text-align: center;
          border: 1px solid white;
          line-height: 30px;
          width: 33%;
          box-sizing: border-box;
          & > a {
            display: block;
            width: 100%;
            height: 28px;
            color: white;
            text-decoration: none;
          }
          & > a:hover {
            color: black;
            width: 100%;
            height: 28px;
            background-color: white;
          }
        }
        .light {
          background-color: white;
          & > a {
                display: block;
                width: 100%;
                height: 28px;
                color: black;
                text-decoration: none;
          }
        }
        .tab-item:first-child {
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
        }
        .tab-item:last-child {
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
        }
      }
    }
    .change {
      background-color: pink;
    }
  }
</style>
