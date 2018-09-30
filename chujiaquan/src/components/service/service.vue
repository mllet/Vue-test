<template>
  <div class="my-wrapper">
    <div class="banner"><img src="../../../static/imges/about-banner.jpg"/></div>
    <div class="wrapper-content">
      <ContactLf></ContactLf>
      <div class="wrapper-rig">
        <h2>我们的服务<span></span></h2>
        <div class="service-items">
          <h3>除醛除苯</h3>
          <p>一天治理，三天见效，七天达标，终身受益。感谢您的支持和信任！</p>
          <h4>合同保障</h4>
          <p>每项服务项目先签合同后服 务保障你我双方利益</p>
          <h4>服务高速</h4>
          <p>预约成功后24小时内到达现场服务</p>
          <h4>服务专业</h4>
          <p>团队高标准服务体系，做到统一服装形象</p>
          <h4>售后见效果</h4>
          <p>定期回访跟踪，长期提供免费咨询服务</p>
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
        .service-items
          padding: 0 0 30px 20px;
          h3
            margin-top :15px
            font-size: 22px;
            font-family: "微软雅黑"
            color: #008000;
          h4
            margin-top :15px
            font-size: 16px;
            font-family: "微软雅黑";
            color: #008000
          p
            line-height: 35px;
            height: 34px;
            color: #333;
            font-size :16px
</style>
