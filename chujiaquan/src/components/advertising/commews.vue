<template>
  <div class="comnews">
    <div class="title">
      <h3>公司新闻</h3>
      <p>关于装修污染常见的七个误区</p>
    </div>
    <div class="img">
      <img src="./news.jpg">
    </div>
    <div class="description">
      <p>一、用空气清新剂把异味掩盖住即可</p>
      <p>二、只重视甲醛，不重视其它有害气体</p>
      <p>三、凭气味来判断是否有污染</p>
      <p>四、装修污染没多大危害</p>
      <p>五、先装修、后治理</p>
      <p>六、装修时全用合格的材料就没污染了</p>
      <p>七、没有快速彻底治理方法，就不需要治理</p>
    </div>
    <div class="detail">
      <router-link to='/newsdetail/9'>
        <span>+</span><span>查看详情</span>
      </router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .comnews
    width: 30%;
    margin-right: 15px;
    float: left;
    border-bottom: 3px solid #eee;
    margin-bottom: 30px;
    padding: 0 6px 15px 6px;
    border-left: 1px solid #eee;
    border-right: 1px solid #eee;
    .detail
      width: 85px;
      border: 2px solid #018b3e;
      span
        display :inline-block
        padding :2px
        height :26px
        font-size :14px
        line-height :26px
    .description
      width:100%
      padding :10px 0
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
      p
        font-size :14px
        letter-spacing :0.1rem
        color :#666
        height :20px
        line-height :20px
    .img
      width :100%
      img
        width :100%
    .title
      background: #2fa81d
      padding: 10px 10px 10px 15px
      font-size: 0px
      h3
        font-size:24px
        height: 32px
        line-height: 32px
        color: #fff
      p
        font-size: 14px
        height: 20px
        line-height: 20px
        color :#fff
</style>
