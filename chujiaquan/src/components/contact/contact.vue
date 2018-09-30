<template>
  <div class="my-wrapper">
    <div class="banner"><img src="../../../static/imges/about-banner.jpg"/></div>
    <div class="wrapper-content">
      <ContactLf></ContactLf>
      <div class="wrapper-rig">
        <h2>联系我们</h2>
        <div class="contact-items">
          <img src="../../../static/imges/contpic.jpg">
        </div>
        <div class="contact-content">
          <p>联系人：<strong>伍经理</strong></p>
          <p>电话：<strong>199-2361-5979</strong></p>
          <p>邮箱：19923615979@163.com</p>
          <p>地址：重庆市永川区宣花路86号</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import contactlf from '../advertising/contactlf.vue';
  export default {
    components: {
      ContactLf: contactlf
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/base.styl";
  .my-wrapper
    .wrapper-content
      .wrapper-rig
        .contact-items
          padding: 0 20px 30px 20px
          overflow: hidden;
          img
            width: 100%;
        .contact-content
          padding-left :30px
          padding-bottom :50px
          p
            font-size :16px;
            height :34px
            line-height :34px
            letter-spacing :0.1rem
            color:#666
</style>
