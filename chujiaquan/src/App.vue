<template>
  <div id="app">
    <Header></Header>
    <div :class='"tab "+myclass1'>
      <div class="tab-content">
        <div class="tab-item">
          <router-link to="/home">网站首页</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/products">产品展示</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/construction">施工现场</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/cases">客户案例</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/news">资讯信息</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/service">售后服务</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/contact">联系我们</router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
  import header from './components/header/header.vue';
  import footer from './components/footer/footer.vue';
  export default {
    name: 'App',
    components: {
        Header: header,
        Footer: footer
    },
    data() {
      return {
        myclass1: ''
      };
    },
    mounted: function () {
      window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop > 120) {
          this.myclass1 = 'fixed1';
        } else {
          this.myclass1 = '';
        }
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet">
  .fixed1
    position: fixed;
    top: 0px;
    width: 100%;
    z-index: 9999;
  .tab
    font-size :0px
    background-color :#018b3e
    .tab-content
      width :980px
      margin :0 auto
      .tab-item
        display :inline-block
        height :50px
        width :140px
        font-size :18px
        letter-spacing: 0.1rem;
        &>a
          display :block
          height :100%
          text-align :center
          line-height :50px
          color :#fff
          &.active
            background-color :#ffba00
</style>
