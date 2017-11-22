<template>
  <div class="bookstore-container">
    <div class="list-container" ref="listWrapper">
      <ul class="list clearfix" ref="list">
        <li class="list-item"
            v-for="(item, index) in classify"
            :class="{'now': currentIndex === index}"
            @click.stop="change(index)">{{item}}</li>
      </ul>
    </div>
    <div class="content-container" ref="containerWrapper">
      <ul class="content clearfix" ref="contentWrapper">
        <li class="content-item" ref="bookWrapper"><div class="main"><book></book></div></li>
        <li class="content-item" ref="classifyWrapper"><div class="main"><classify></classify></div></li>
        <li class="content-item"><div class="main">3</div></li>
        <li class="content-item"><div class="main">4</div></li>
        <li class="content-item"><div class="main">限免</div></li>
        <li class="content-item"><div class="main">版权</div></li>
        <li class="content-item"><div class="main">标签</div></li>
      </ul>
    </div>
  </div>
</template>

<script>
  import IScroll from 'iscroll/build/iscroll-probe.js'
  import {mapActions} from 'vuex'
  import book from './Book.vue'
  import classify from './Classify.vue'
  export default {
    data () {
      return {
        classify: ['书城', '分类', '排行', '完结', '限免', '版权', '标签'],
        currentIndex: 0
      }
    },
    created () {
      this.$nextTick(() => {
        this.initScrollTemplate()
      })
    },
    methods: {
      initScrollTemplate () {
        if (this.$refs.listWrapper) {
          this.listScroll = new IScroll(this.$refs.listWrapper, {
            click: true,
            scrollX: true
          })
          if (this.$store.state.boolean) {
            this.bookScroll = new IScroll(this.$refs.bookWrapper, {
              click: true,
              vScrollbar: true,
              fadeSrollbar: true
            })
            this.classifyScroll = new IScroll(this.$refs.classifyWrapper, {
              click: true,
              vScrollbar: true,
              fadeSrollbar: true
            })
          }
        }
      },
      ...mapActions(['slidePage', 'clickChange']),
      change (index) {
        this.currentIndex = index
        this.clickChange({sobj: this.$refs.list, obj: this.$refs.contentWrapper, num: this.currentIndex})
      },
      stop () {
        this.$store.state.boolean = false
      }
    },
    components: {
      book,
      classify
    },
    mounted () {
      this.$nextTick(() => {
        let container = this.$refs.containerWrapper
        this.$store.state.offsetWidth = container.offsetWidth
        let content = this.$refs.contentWrapper
        let sobj = this.$refs.list.children
        this.slidePage({obj: content, sobj})
      })
    }
  }
</script>

<style lang="less" scoped>
  @import "../../common/less/basic.less";

  .bookstore-container {
    width: 100%;
    position: absolute;
    bottom: 0;
    top: 60px;
    .list-container {
      height: 30px;
      border-bottom: 1px solid #626968;
      overflow: hidden;
       .list {
         height: 100%;
         width: 402px;
         .list-item {
           height: 30px;
           width: 32px;
           text-align: center;
           line-height: 30px;
           margin-left: 22px;
           box-sizing: border-box;
         }
         .list-item:last-child {
           margin-right: 22px;
         }
         .now {
           border-bottom: 1px solid #0F843A;
           color: #0F843A;
         }
       }
    }
    .content-container {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 30px;
      bottom: 0;
      overflow: hidden;
      background-color: #f1f1f1;
      .content {
        height: 100%;
        width: 700%;
        overflow: hidden;
        .content-item {
          width: 100/7%;
          height: 100%;
          padding:0 10px;
          box-sizing: border-box;
          overflow: hidden;
          .main {
            width: 100%;
            position: relative;
          }
        }
      }
    }
  }
</style>
