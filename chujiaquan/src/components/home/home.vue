<template>
  <div class="home">
    <div class="swiper-container top-swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="./banner1.png"/></div>
        <div class="swiper-slide"><img src="./banner2.png"/></div>
        <div class="swiper-slide"><img src="./banner3.png"/></div>
      </div>
      <!-- Add Arrows -->
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
    <div class="about-wrapper">
      <div class="about-content">
        <img src="./aboutus_h.png">
        <div class="about-description">
          <h4>关于我们</h4>
          <p>重庆蒂易伽室内空气净化有限公司是一家集研发、生产、销售、服务为一体的环保企业。生产工艺先进，生产设备自动化，超越欧洲最高等级涂料环保标准，达到无排放无污染，是真正的绿色环保生态涂料。</p>
          <p>采用目前最先进的物理和化学相结合的治理方法，添加负离子粉、甲壳素、纳米贵金属后提升其活性与渗透性。克服了传统光触媒需要强光照射才能产生催化分解作用的不足，LTG 高效纳米技术在微光甚至是无光的状态下同样具有具有防腐抗菌杀毒功效。将各种有害气体如甲醛、苯、氨、TVOC 等有毒有害物质分解成水和二氧化碳。能够有效解决室内与车内有害气体超标问题，净化室内车内空气，具有一次解决永不反弹的特性。</p>
          <div class="btn-c">
            <span>查看更多</span>
            <span>联系我们</span>
          </div>
        </div>
      </div>
    </div>
    <div class="fuwu">
      <div class="fuwu-tit">
        <h2>服务项目</h2>
        <p>安全、健康、无毒无害无二次污染,一次治理、受益终身</p>
      </div>
      <div class="fuwu-item">
        <div class="fuwu-items">
          <div class="img">
            <img src="./fuwu_01.png"/>
          </div>
          <div class="fuwu-title">
            <p>室内空气检测</p>
            <span>甲醛、苯、TVOC检测</span>
          </div>
        </div>
        <div class="fuwu-items">
          <div class="fuwu-title">
            <p>家装除甲醛</p>
            <span>新房、婚房、儿童房、精装房、别墅</span>
          </div>
          <div class="img">
            <img src="./fuwu_02.png"/>
          </div>
        </div>
        <div class="fuwu-items">
          <div class="img">
            <img src="./fuwu_03.png"/>
          </div>
          <div class="fuwu-title">
            <p>工装除甲醛</p>
            <span>写字楼、酒店、学校、医院、售楼部、样板房</span>
          </div>
        </div>
        <div class="fuwu-items">
          <div class="fuwu-title">
            <p>汽车除甲醛</p>
            <span>消毒、杀菌、除味、除甲醛</span>
          </div>
          <div class="img">
            <img src="./fuwu_04.png"/>
          </div>
        </div>
      </div>
    </div>
    <!--<div class="product">
      <div class="product-tit">
        <h2>服务范围</h2>
        <p>有效解决室内环境污染，为您提供绿色健康呼吸</p>
      </div>
      <div class="product-content">
        <ul>
          <li v-for="items in products" :key="items.id">
            <div class="img"><img :src="items.imgs"></div>
            <div class=name>{{ items.name }}</div>
          </li>
        </ul>
      </div>
    </div>-->
    <div class="case">
      <div class="case-tit">
        <h2>服务案例</h2>
      </div>
      <div class="case-swiper swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="../../../static/imges/case_01.jpg"/></div>
          <div class="swiper-slide"><img src="../../../static/imges/case_02.jpg"/></div>
          <div class="swiper-slide"><img src="../../../static/imges/case_03.jpg"/></div>
          <div class="swiper-slide"><img src="../../../static/imges/case_04.jpg"/></div>
          <div class="swiper-slide"><img src="../../../static/imges/case_05.jpg"/></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper';
  const ERR_OK = 0;
  export default {
    data() {
      return {
        products: [
          {
            name: '除味王苯氨清除剂',
            description: '1 ',
            imgs: '../../../static/imges/01.png'
          }, {
            name: '熏蒸精华液',
            description: '2 ',
            imgs: '../../../static/imges/02.png'
          }, {
            name: '生物活性净化剂',
            description: ' 3',
            imgs: '../../../static/imges/03.png'
          }, {
            name: '生物甲醛祛除剂',
            description: '4 ',
            imgs: '../../../static/imges/04.png'
          }, {
            name: '除味王装修除味剂',
            description: ' ',
            imgs: '../../../static/imges/05.png'
          }, {
            name: '生物广普净化剂',
            description: ' ',
            imgs: '../../../static/imges/06.png'
          }, {
            name: '生物复合净化剂',
            description: ' ',
            imgs: '../../../static/imges/07.png'
          }, {
            name: '生物异味净化剂',
            description: ' ',
            imgs: '../../../static/imges/08.png'
          }
        ]
      };
    },
    created() {
      this.$http.get('/homes').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.products = response.data;
        }
      });
    },
    mounted: function () {
      this.swippertab();
    },
    methods: {
      swippertab() {
        var swiper = new Swiper('.top-swiper', {
          autoHeight: true,
          loop: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true
          }
        });
        var caseSwiper = new Swiper('.case-swiper', {
          slidesPerView: 4,
          spaceBetween: 30,
          loop: true,
          autoplay: {
           delay: 2000,
           stopOnLastSlide: false,
           disableOnInteraction: true
           }
        });
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../static/css/swiper.min.css";
  @import "../../common/stylus/base.styl";
  .swiper-slide
    text-align: center
    font-size: 18px
    background: #fff
    display: -webkit-box
    display: -ms-flexbox
    display: -webkit-flex
    display: flex
    -webkit-box-pack: center
    -ms-flex-pack: center
    -webkit-justify-content: center
    justify-content: center
    -webkit-box-align: center
    -ms-flex-align: center
    -webkit-align-items: center
    align-items: center
    img
      width :100%
  .about-wrapper
    background :#e3f1e3
    .about-content
      max-width :1200px
      max-height: 300px;
      margin :0 auto
      display :flex
      padding :20px 0px 15px 0px
      img
        height :260px
      .about-description
        padding: 0px 30px 0px 75px;
        p
          font-size: 13px;
          color: black;
          line-height: 26px;
          text-indent :2rem
          &:nth-childp(1)
            margin-top :15px
            color :#ccc
        h4
          font-family: sans-serif;
          padding-top: 0px;
          font-size: 25px;
          color: #53290c;
          font-weight: bold;
        .btn-c
          padding-top :20px;
          span
            display :inline-block
            padding :8px 20px 8px 20px
            background :#3aad41
            color :#fff
            font-size :12px
            margin-right :30px
            &:nth-child(2)
              background :#ffba00
  .fuwu
    padding-bottom:30px
    background: #fcfbfc
    tit(fuwu)
    .fuwu-item
      max-width: 1200px;
      padding-top:45px
      display: flex
      margin: 0 auto
      .fuwu-items
        width: 260px;
        margin: 0 auto;
        position: relative;
        z-index: 9;
        padding: 4px;
        overflow: hidden;
        .img
          width: 260px
          height: 180px
          img
            width:100%
            height: 100%
        .fuwu-title
          width: 260px;
          padding-bottom: 30px;
          background: #4CAF50;
          p
            letter-spacing: 0.1rem
            padding: 25px 20px;
            font-size: 25px;
            line-height: 35px;
            text-align: left
            color :#fff
          span
            display :block
            padding: 0px 20px 1px 20px;
            font-family: 'Microsoft YaHei';
            font-size: 13px;
            color: #FFFFFF;
            line-height: 160%;
            text-overflow: ellipsis
            overflow :hidden
            white-space :nowrap;
  /*.product
    height: 730px
    background: url(./probg.jpg) no-repeat center
    overflow: hidden
    tit(product)
    .product-content
      max-width: 1220px;
      padding-top:30px;
      height: 550px;
      overflow: hidden;
      margin: 0 auto;
      display :flex
      img
        height :350px
      ul
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        overflow: hidden;
        li
          width: 285px;
          height: 260px;
          float: left;
          margin-right: 20px;
          margin-bottom: 20px;
          .img
            width: 285px;
            height: 210px;
            border: 1px solid #3aad41;
            box-sizing: border-box;
            img
              width: 100%;
              height: 100%;
          &:hover
            .img
              border: 1px solid #ffba00;
            .name
              background: #ffba00;
          .name
            background: #3aad41;
            color: #fff;    width: 285px;
            height: 50px;
            line-height: 50px;
            font-size: 16px;
            text-align: center;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;*/
  .case
    max-width: 1200px;
    padding-bottom: 75px;
    margin: 0 auto;
    tit(case)
    .case-swiper
      height :200px
      margin :0 auto
      padding-top :45px
      .swiper-slide
        width :280px
        img
          width:100%
</style>
