<template>
  <div class="construct-lf">
    <h3>客户案例</h3>
    <ul>
      <li v-for="items in constructlist" :key="items.id">
        <router-link :to="'/construct/'+items.id">{{ items.title }}</router-link>
      </li>
      <li v-if="$route.params.id">
        <router-link to="/construction">更多</router-link>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      constructs: {}
    },
    data: function () {
      return {
        constructlist: this.constructs
      };
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .construct-lf
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
