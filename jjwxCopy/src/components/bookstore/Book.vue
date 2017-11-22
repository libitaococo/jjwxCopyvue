<template>
   <div class="book">
     <div class="vipgold">
       <h3 class="gold-title">{{title['27000000']}}</h3>
       <div class="gold-main">
         <ul class="goldul clearfix">
           <li class="goldli" v-for="item in books['27000000']">
             <div class="imagebox">
               <img :src="item.cover" alt=""/>
               <p class="bookname">{{item.novelName}}</p>
             </div>
             <p class="summary">{{item.novelIntroShort}}</p>
           </li>
         </ul>
       </div>
     </div>
     <div class="viprecommend">
       <h4 class="recommend-title">{{title['5000000']}}</h4>
       <div class="recommend-main">
         <p class="recommend-name" v-for="item in books['5000000']">{{item.novelName}}</p>
       </div>
     </div>
     <div class="viprecod vipgold">
       <h3 class="gold-title">{{title['4000000']}}</h3>
       <div class="gold-main">
         <ul class="goldul clearfix">
           <li class="goldli" v-for="item in books['4000000']">
             <div class="imagebox">
               <img :src="item.cover" alt=""/>
               <p class="bookname">{{item.novelName}}</p>
             </div>
             <p class="summary">{{item.novelIntroShort}}</p>
           </li>
         </ul>
       </div>
     </div>
     <div class="rakinglist viprecommend clearfix">
       <div class="weeklist">
         <h4 class="weeklist-title recommend-title">{{title['6000000']}}</h4>
         <div class="weeklist-main">
           <p class="weeklist-name" v-for="item in books['6000000']">{{item.novelName}}</p>
         </div>
       </div>
       <div class="readerlist weeklist">
         <h4 class="readerlist-title weeklist-title">{{title['3000000']}}</h4>
         <div class="readerlistt-main weeklist-main ">
           <p class="readerlist-name weeklist-name" v-for="item in books['3000000']">{{item.novelName}}</p>
         </div>
       </div>
     </div>
     <div class="allclassify vipgold clearfix">
       <div class="onemain" >
         <h4 class="onemain-title">{{title['9000000']}}</h4>
         <div>
           <div class="onemain-content clearfix" v-for="item in books['9000000']">
             <div class="onemain-imgbox">
               <img :src="item.cover" alt=""/>
             </div>
             <div class="onemain-word">
               <p class="onemain-noverlname">{{item.novelName}}</p>
               <p class="author">{{item.authorName}}</p>
               <p class="onemain-novelIntroShort">{{item.novelIntroShort}}</p>
             </div>
           </div>
         </div>
       </div>
       <div class="onemain" >
         <h4 class="onemain-title">{{title['9000001']}}</h4>
         <div>
           <div class="onemain-content clearfix" v-for="item in books['9000001']">
             <div class="onemain-imgbox">
               <img :src="item.cover" alt=""/>
             </div>
             <div class="onemain-word">
               <p class="onemain-noverlname">{{item.novelName}}</p>
               <p class="author">{{item.authorName}}</p>
               <p class="onemain-novelIntroShort">{{item.novelIntroShort}}</p>
             </div>
           </div>
         </div>
       </div>
       <div class="onemain" >
         <h4 class="onemain-title">{{title['9000002']}}</h4>
         <div>
           <div class="onemain-content clearfix" v-for="item in books['9000002']">
             <div class="onemain-imgbox">
               <img :src="item.cover" alt=""/>
             </div>
             <div class="onemain-word">
               <p class="onemain-noverlname">{{item.novelName}}</p>
               <p class="author">{{item.authorName}}</p>
               <p class="onemain-novelIntroShort">{{item.novelIntroShort}}</p>
             </div>
           </div>
         </div>
       </div>
       <div class="onemain" >
         <h4 class="onemain-title">{{title['9000003']}}</h4>
         <div>
           <div class="onemain-content clearfix" v-for="item in books['9000003']">
             <div class="onemain-imgbox">
               <img :src="item.cover" alt=""/>
             </div>
             <div class="onemain-word">
               <p class="onemain-noverlname">{{item.novelName}}</p>
               <p class="author">{{item.authorName}}</p>
               <p class="onemain-novelIntroShort">{{item.novelIntroShort}}</p>
             </div>
           </div>
         </div>
       </div>
       <div class="onemain" >
         <h4 class="onemain-title">{{title['9000004']}}</h4>
         <div>
           <div class="onemain-content clearfix" v-for="item in books['9000004']">
             <div class="onemain-imgbox">
               <img :src="item.cover" alt=""/>
             </div>
             <div class="onemain-word">
               <p class="onemain-noverlname">{{item.novelName}}</p>
               <p class="author">{{item.authorName}}</p>
               <p class="onemain-novelIntroShort">{{item.novelIntroShort}}</p>
             </div>
           </div>
         </div>
       </div>
       <div class="onemain" >
         <h4 class="onemain-title">{{title['9000005']}}</h4>
         <div>
           <div class="onemain-content clearfix" v-for="item in books['9000005']">
             <div class="onemain-imgbox">
               <img :src="item.cover" alt=""/>
             </div>
             <div class="onemain-word">
               <p class="onemain-noverlname">{{item.novelName}}</p>
               <p class="author">{{item.authorName}}</p>
               <p class="onemain-novelIntroShort">{{item.novelIntroShort}}</p>
             </div>
           </div>
         </div>
       </div>
       <div class="onemain" >
         <h4 class="onemain-title">{{title['9000006']}}</h4>
         <div>
           <div class="onemain-content clearfix" v-for="item in books['9000006']">
             <div class="onemain-imgbox">
               <img :src="item.cover" alt=""/>
             </div>
             <div class="onemain-word">
               <p class="onemain-noverlname">{{item.novelName}}</p>
               <p class="author">{{item.authorName}}</p>
               <p class="onemain-novelIntroShort">{{item.novelIntroShort}}</p>
             </div>
           </div>
         </div>
       </div>
       <div class="onemain" >
         <h4 class="onemain-title">{{title['9000007']}}</h4>
         <div>
           <div class="onemain-content clearfix" v-for="item in books['9000007']">
             <div class="onemain-imgbox">
               <img :src="item.cover" alt=""/>
             </div>
             <div class="onemain-word">
               <p class="onemain-noverlname">{{item.novelName}}</p>
               <p class="author">{{item.authorName}}</p>
               <p class="onemain-novelIntroShort">{{item.novelIntroShort}}</p>
             </div>
           </div>
         </div>
       </div>
       <div class="onemain" >
         <h4 class="onemain-title">{{title['9000008']}}</h4>
         <div>
           <div class="onemain-content clearfix" v-for="item in books['9000008']">
             <div class="onemain-imgbox">
               <img :src="item.cover" alt=""/>
             </div>
             <div class="onemain-word">
               <p class="onemain-noverlname">{{item.novelName}}</p>
               <p class="author">{{item.authorName}}</p>
               <p class="onemain-novelIntroShort">{{item.novelIntroShort}}</p>
             </div>
           </div>
         </div>

       </div>
       <div class="onemain" >
         <h4 class="onemain-title">{{title['9000009']}}</h4>
         <div>
           <div class="onemain-content clearfix" v-for="item in books['9000009']">
             <div class="onemain-imgbox">
               <img :src="item.cover" alt=""/>
             </div>
             <div class="onemain-word">
               <p class="onemain-noverlname">{{item.novelName}}</p>
               <p class="author">{{item.authorName}}</p>
               <p class="onemain-novelIntroShort">{{item.novelIntroShort}}</p>
             </div>
           </div>
         </div>
       </div>
       <div class="onemain" >
         <h4 class="onemain-title">{{title['9000010']}}</h4>
         <div>
           <div class="onemain-content clearfix" v-for="item in books['9000010']">
             <div class="onemain-imgbox">
               <img :src="item.cover" alt=""/>
             </div>
             <div class="onemain-word">
               <p class="onemain-noverlname">{{item.novelName}}</p>
               <p class="author">{{item.authorName}}</p>
               <p class="onemain-novelIntroShort">{{item.novelIntroShort}}</p>
             </div>
           </div>
         </div>
       </div>
       <div class="onemain" >
         <h4 class="onemain-title">{{title['9000011']}}</h4>
         <div>
           <div class="onemain-content clearfix" v-for="item in books['9000011']">
             <div class="onemain-imgbox">
               <img :src="item.cover" alt=""/>
             </div>
             <div class="onemain-word">
               <p class="onemain-noverlname">{{item.novelName}}</p>
               <p class="author">{{item.authorName}}</p>
               <p class="onemain-novelIntroShort">{{item.novelIntroShort}}</p>
             </div>
           </div>
         </div>
       </div>
     </div>
     <div class="allchart">
       <div class="allchart-name clearfix">
         <ul class="clearfix">
           <li class="single-name" v-for="(item, key, index) in singlename" >
             <p class="name" :class="{'hightlight': currentIndex === index}" @click="changeData(index, key, $event)">{{item}}</p></li>
         </ul>
       </div>
       <div class="allchart-book clearfix">
          <p class="allchart-bookname" v-for="item in books[name]">{{item.novelName}}</p>
       </div>
     </div>
   </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default{
    data () {
      return {
        title: {
          '700000': '月度排行',
          '4000000': '封面推荐',
          '5000000': 'vip强推',
          '6000000': '霸王票周榜',
          '9000000': '古代言情',
          '9000001': '都市青春',
          '9000002': '幻想言情',
          '9000003': '古代穿越',
          '9000004': '玄幻奇幻',
          '9000005': '科幻网游',
          '9000006': '现代纯爱',
          '9000007': '古代纯爱',
          '9000008': '百合小说',
          '9000009': '衍生纯爱',
          '9000010': '衍生言情',
          '9000011': '二次言情',
          '27000000': 'vip金榜',
          '3000000': '读者栽培榜'
        },
        singlename: {
          '700000': '月度排行',
          '700001': '季度排行',
          '700002': '半年排行',
          '700003': '长生殿',
          '700004': '新晋作者',
          '700005': '驻站排行'
        },
        currentIndex: 0,
        name: '700000'
      }
    },
    computed: {
      ...mapGetters({
        books: 'getBook'
      })
    },
    methods: {
      changeData (index, key, event) {
        this.currentIndex = index
        this.name = key
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../common/less/basic.less";
  .book {
    width: 100%;
    .vipgold {
      padding:0 5px;
      background-color: white;
      width: 100%;
      /*height: 170px;*/
      /*overflow: hidden;*/
      overflow: hidden;
      overflow-x: auto;
      margin-bottom: 10px;
      box-sizing: border-box;
      .gold-title {
        width: 100%;
        height: 30px;
        line-height: 30px;
        color: red;
        padding-left: 5px;
        box-sizing: border-box;
      }
      .gold-main {
        width: 100%;
        overflow: hidden;
        .goldul {
          float: left;
          width: 220%;
          .goldli {
            width: 10.5%;
            height: 125px;
            margin-right: 2%;
            .imagebox {
              position: relative;
              width: 100%;
              height: 90px;
              border: 1px solid #aaaaaa;
              box-sizing: border-box;
              img {
                width: 100%;
                height: 100%;
              }
              .bookname {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 15px;
                color: white;
                font-size: 10px;
                background-color: #999999;
                text-overflow: ellipsis;
                line-height: 15px;
                opacity: 0.7;
                overflow: hidden;
                white-space: nowrap;
              }
            }
            .summary {
              width: 100%;
              height: 35px;
              color: #aaaaaa;
              font-size: 12px;
              overflow: hidden;
            }
          }
          .goldli:last-child {
            margin-right: 0;
          }
        }
      }
    }
    .viprecommend {
      padding:0 5px;
      background-color: white;
      width: 100%;
      /*height: 200px;*/
      overflow: hidden;
      margin-bottom: 10px;
      box-sizing: border-box;
      .recommend-title {
        width: 100%;
        height: 25px;
        line-height: 25px;
        color: red;
        font-size: 14px;
        padding-left: 5px;
        box-sizing: border-box;
      }
      .recommend-main {
        width: 100%;
        /*height: 175px;*/
        .recommend-name {
          padding-left: 5px;
          box-sizing: border-box;
          float: left;
          width: 50%;
          height: 29px;
          line-height: 29px;
          font-size: 14px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
    .rakinglist {
      .weeklist {
        float: left;
        width: 50%;
        .weeklist-main {
          width: 100%;
          .weeklist-name {
            padding-left: 5px;
            box-sizing: border-box;
            float: left;
            width: 100%;
            height: 29px;
            line-height: 29px;
            font-size: 14px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
      .readerlist {
        float: left;
        width: 50%;
        .readerlist-title {
          width: 100%;
          height: 25px;
          line-height: 25px;
          color: red;
          font-size: 14px;
          padding-left: 5px;
          box-sizing: border-box;
        }
      }
    }
    .allclassify {
      padding: 0;
      .onemain {
        width: 50%;
        float: left;
        border-bottom: 3px solid #f1f1f1;
        padding: 0 10px;
        box-sizing: border-box;
        .onemain-title {
          width: 100%;
          height: 25px;
          color: red;
          font-size: 13px;
          line-height: 25px;
        }
        .onemain-content {
          width: 100%;
          .onemain-imgbox {
            display: none;
          }
          .onemain-word {
            width: 100%;
            .onemain-noverlname {
              width: 100%;
              height: 29px;
              line-height: 29px;
              font-size: 14px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .author {
              display: none;
            }
            .onemain-novelIntroShort {
              display: none;
            }
          }
        }
        .onemain-content:first-child {
          width: 100%;
          height: 90px;
          .onemain-imgbox {
            float: left;
            display: inline;
            width: 50%;
            height: 100%;
            border: 1px solid #aaaaaa;
            box-sizing: border-box;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .onemain-word {
            float: left;
            width: 45%;
            height: 90px;
            display: inline;
            .onemain-noverlname {
              display: block;
              padding-left: 5px;
              padding-top: 5px;
              box-sizing: border-box;
              width: 100%;
              height: 30px;
              line-height: 27px;
              font-size: 14px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .author {
              display: block;
              padding-left: 5px;
              box-sizing: border-box;
              width: 100%;
              height: 15px;
              line-height: 15px;
              font-size: 12px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              color: #aaaaaa;
            }
            .onemain-novelIntroShort {
              /*display: block;*/
              padding-left: 5px;
              padding-top: 10px;
              box-sizing: border-box;
              height: 40px;
              width: 100%;
              font-size: 12px;
              overflow: hidden;
              text-overflow: ellipsis;
              /*white-space: nowrap;*/
              word-wrap:break-word;
              color: #aaaaaa;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }
          }
        }
      }
    }
    .allchart {
      padding:0 10px;
      background-color: white;
      width: 100%;
      box-sizing: border-box;
      .allchart-name {
        width: 100%;
        ul {
          width: 100%;
          border-bottom: 2px solid #f1f1f1;
          .single-name {
            display: flex;
            width: 33.3%;
            height: 40px;
            align-items: center;
            vertical-align: middle;
            box-sizing: border-box;
            .name {
              display: table;
              padding: 5px;
              margin: auto;
              font-size: 15px;
              color: #aaaaaa;
              box-sizing: border-box;
            }
            .hightlight {
              background-color: #27d16f;
              border-radius: 5px;
              color: white;
            }
          }
        }
      }
      .allchart-book {
        width: 100%;
        height: 290px;
        .allchart-bookname {
          box-sizing: border-box;
          float: left;
          width: 50%;
          height: 29px;
          line-height: 29px;
          font-size: 14px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
</style>
