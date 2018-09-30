<template>
  <div class="footer">
    <div class="content">
      <div class="content-lf">
        <p>网站首页|产品展示|施工现场|客户案例|资讯信息|售后服务|联系我们</p>
        <p>版权所有 © 重庆蒂易伽室内空气净化有限公司&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://www.miitbeian.gov.cn" >渝ICP备18003576号-1</a></p>
      </div>
      <div class="content-rig">
        <div class="tel">
          <p class="title">点击关注</p>
          <span class="wx"><img src="../../../static/imges/weixin.jpg"/></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default { };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .footer
    clear :both
    background-color :#049e08
    /*border-top :3px solid #009926*/
    .content
      width :900px
      margin :0 auto
      padding:50px 0 50px 0;
      display :flex
      justify-content :space-between
      .content-lf
        p
          font-size: 14px;
          line-height: 32px;
          letter-spacing: 0.1rem;
          color :#fff
          a
            font-size :16px
            line-height :34px
            color:#fff
      .content-rig
        .tel
          width :100px
          .title
            text-align :center
            color:#fff
          .wx
            display :block
            width :43px
            margin :0 auto
            padding-top :8px
            transition: border .2s ease-in-out;
            img
              cursor: pointer;
              transition: all 0.6s;
            &:hover
              img
                transform: scale(1.2);
</style>
