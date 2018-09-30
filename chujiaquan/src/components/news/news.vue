<template>
  <div class="my-wrapper">
    <div class="banner"><img src="../../../static/imges/about-banner.jpg"/></div>
    <div class="wrapper-content">
      <ComNews></ComNews>
      <div class="wrapper-rig">
        <h2>环保课堂<span></span></h2>
        <div class="news-items">
          <div class="news-item" v-for="items in news" :key="items.id">
            <div class="news-content">
              <h3>{{ items.title }}</h3>
              <p>{{ items.content }}<strong> <router-link to='/newsdetail/9'>[详情]</router-link></strong></p>
            </div>
            <div class="news-time">
              <span>{{ items.timed }}</span>
              <span>{{ items.timem }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import comnews from '../advertising/commews.vue';
  const ERR_OK = 0;
  export default {
    data() {
        return {
          news: [
            {
              title: '装修后查看自己甲醛及苯污染情况的简易方法',
              content: '1、新居中放盐水:应用甲醛溶于水的特征,我们可以在各个房间里放几盆盐水。2、室内透风:甲醛是一种蒸发性的物资,可以把房间各个门和窗户掀开.3、室内温度调高....',
              timem: '2018-09',
              timed: '16'
            }, {
              title: '夏季甲醛污染重 开空调能除甲醛吗？',
              content: '甲醛是一种常见的室内环境污染物，影响甲醛师范改的因素还有很多。承载率、挥发途径、环境变化...都会对甲醛的释放速度产生影响....',
              timem: '2018-09',
              timed: '09'
            }, {
              title: '人造细木工板和免漆板是怎样产生甲醛的？',
              content: '⑴胶粘剂自身含有游离的甲醛。 含有不稳定键与基团在较低PH值、高潮、高湿下会断链，分离出甲醛。 ①树脂合成时余留未反应的游离甲醛； ②树脂合成...',
              timem: '2018-09',
              timed: '05'
            }, {
              title: '甲醛对你孩子的伤害,请看这篇文章',
              content: '提起甲醛，大家可能都知道是什么。但是谁又能具体说出来什么是甲醛呢？可能这就是大家对甲醛的了解并不是那么的透彻。这里，小编来给大家介绍一下...',
              timem: '2018-09',
              timed: '02'
            }, {
              title: '除甲醛：你知道的其实都是错的',
              content: '装修是好事！第一，证明你有钱；第二，证明你有品位；第三，证明你喜事临门。可是装修完了，甲醛也就来报道了。 人们对于甲醛的深恶痛绝完全不亚于...',
              timem: '2018-09',
              timed: '16'
            }
          ]
        };
//      return {
//        news: {}
//      };
    },
//    created() {
//      this.$http.get('/newss').then((response) => {
//        response = response.body;
//        if (response.errno === ERR_OK) {
//          this.news = response.data;
//        }
//      });
//    }
    components: {
        ComNews: comnews
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/base.styl";
  .my-wrapper
    .wrapper-content
      .wrapper-rig
        .news-items
          margin-bottom :30px
          .news-item
            margin-bottom:10px;
            padding: 20px 4px 4px 4px;
            display :flex
            border-bottom :1px dashed #eee
            .news-content
              width :798px
              h3
                height: 30px;
                font-size: 18px;
              p
                font-size: 14px;
                line-height: 20px;
                color: #333;
                letter-spacing: 0.1rem;
                margin-right:10px
            .news-time
              min-width :80px
              height :80px
              background :#2fa81d
              display :flex
              flex-direction :column
              justify-content :center
              align-items :center
              span
                font-size: 16px;
                font-weight: 700;
                margin-top: 6px;
                color: #fff;
</style>
