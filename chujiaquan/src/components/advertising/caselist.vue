<template>
  <div class="case-lf">
    <h3>客户案例</h3>
    <ul>
      <li v-for="items in caseitem" :key="items.id">
        <router-link :to="'/cases/case/id/'+items.id">{{ items.title }}</router-link>
      </li>
      <!--<li v-if="$route.params.id">-->
        <!--<router-link to="/cases/case">更多</router-link>-->
      <!--</li>-->
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      cases: {}
    },
    data: function () {
      return {
        caseitem: this.cases
      };
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .case-lf
    width :30%
    background :#666
    margin-right :30px
    float :left
    margin-bottom :30px
    h3
      line-height: 34px;
      color: #fff;
      padding-left: 30px;
      font-size: 16px;
      font-weight: bold;
      background: #2fa81d;
    ul
      background :#fcfcfc
      li
        height :39px
        font-size :14px
        line-height :39px
        border-bottom :1px dashed #e7e7e7
        a
          padding-left :15px
          &:active
            color :#009926
      li:before
        content :url("../../../static/imges/icon2.jpg")
</style>
