<template>
  <div class="contact-me">
    <div class=title>
      <h3>联系我们</h3>
    </div>
    <div class="phone">
      <span class="icon"></span>
      <div class="phone-number">
        <p>联系人：伍经理</p>
        <p>电话：199-2361-5979</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .contact-me
    width: 30%
    margin-right: 15px
    float: left;
    border-bottom: 3px solid #eee
    margin-bottom: 30px;
    padding: 0 6px 15px 6px;
    border-left: 1px solid #eee
    border-right: 1px solid #eee
    .phone
      padding: 30px
      .phone-number
        vertical-align :top
        padding-top: 5px
        display :inline-block
        p
          font-weight :700
          font-size :14px
          height :30px
          line-height :30px
          color: #999;
      .icon
        display: inline-block;
        width: 65px;
        background: url("../../../static/imges/tel.png");
        height:65px;
        background-repeat: no-repeat;
        background-size: cover;
    .title
      background: #2fa81d
      padding: 10px 10px 10px 15px
      font-size: 0px
      h3
        font-size: 24px
        height: 32px
        line-height: 32px
        color: #fff
</style>
