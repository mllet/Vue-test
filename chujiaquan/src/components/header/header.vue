<template>
  <div class="header">
    <div class="logo">
      <img width="60" height="60" src="./logo.png">
    </div>
    <div class="content">
      <h2>蒂易伽</h2>
    </div>
    <div class="description">
      <h2>高品质室内空气治理</h2>
      <h3>给您一个无甲醛的空间</h3>
    </div>
    <div class="tel">
      <span class="icon"></span>
      <span class="phone">全国服务热线：<strong>199-2361-5979</strong></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    height :60px
    padding :30px 0
    width :980px
    margin-left :auto
    margin-right :auto
    display :flex
    position :relative
    .content
      margin-left :15px
      h2
        letter-spacing :0.3rem
        height :60px
        line-height :60px
        font-size: 26px;
        font-weight: bold;
        color :#379338
    .description
      height :40px
      padding: 8px 0 8px 15px;
      margin-left: 15px;
      border-left: 1px solid #ccc;
      font-size :0px
      h2
        height: 20px;
        line-height :20px
        font-size: 20px;
        color: #6db035;
        letter-spacing: 0.1rem;
      h3
        margin-top:8px;
        font-size: 16px;
        line-height: 16px;
        letter-spacing: 0.1rem;
    .tel
      position :absolute
      right :0px
      height :60px
      .icon
        display: inline-block;
        width: 60px
        height: 60px
        background-image: url(../../../static/imges/tel.png)
        background-size: 60px 60px
        background-repeat: no-repeat
      .phone
        height :60px
        line-height :60px
        display :inline-block
        vertical-align: top;
        letter-spacing: 0.1rem;
        padding-right: 20px;
        strong
          color :#ffba00
</style>
