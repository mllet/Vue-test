<template>
  <div class="products-lf">
    <h3>产品展示</h3>
    <ul>
      <li v-for="items in product" :key="items.id">
        <router-link :to="'/product/'+items.id">{{ items.name }}</router-link>
      </li>
      <li v-if="$route.params.id">
        <router-link to="/products">更多</router-link>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      products: {}
    },
    data: function () {
      return {
        product: this.products
      };
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .products-lf
    width :26%
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
