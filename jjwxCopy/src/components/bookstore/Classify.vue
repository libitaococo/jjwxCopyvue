<template>
  <div class="classify">
    <ul class="allclassify clearfix">
      <li class="classify-content" v-for="item in classify">
        <div class="clearfix">
          <div class="imgbox">
            <img :src="item.cover" alt=""/>
          </div>
          <div class="container">
            <p class="novelname">{{item.novelname}}</p>
            <p class="num">{{item.booknums}}本+</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default{
    computed: {
      ...mapGetters({
        classify: 'getClassify'
      })
    }
  }
</script>

<style lang="less" scoped>
  @import "../../common/less/basic.less";
  .classify {
    width: 100%;
    .allclassify {
      width: 100%;
      .classify-content {
        width: 50%;
        float: left;
        padding: 5px;
        box-sizing: border-box;
        margin-bottom: 5px;
        div {
          background-color: #d7ffc2;
          width: 100%;
          padding: 5px;
          box-sizing: border-box;
          .imgbox {
            box-sizing: border-box;
            border: 1px solid #aaaaaa;
            padding: 0;
            width: 30%;
            height: 70px;
            float: left;
            img {
              width: 100%;
              height: 70px;
            }
          }
          .container {
            padding: 0 0 0 5px;
            width: 70%;
            height: 70%;
            float: left;
            box-sizing: border-box;
            .novelname {
              height: 50%;
              line-height: 35px;
            }
            .num {
              height: 50%;
              line-height: 35px;
            }
          }
        }
      }
    }

  }
</style>
