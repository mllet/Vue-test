<template>
  <div class="products-rig">
    <h2>产品展示</h2>
    <div class="products-cp">
      <div class="products-item" v-for="product in products" :key="product.id">
        <img :src="product.imgs"/>
        <h3><router-link :to="'/products/product/id/'+product.id">{{ product.name }}</router-link></h3>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  const ERR_OK = 0;
  export default {
//    data() {
//      return {
//        products: [
//          {
//            id: '0',
//            imgs: '../../../static/imges/product_zh.png',
//            name: 'NG-I 二氧化钛（综合治理产品）'
//          }, {
//            id: '1',
//            name: 'NG-C 二氧化钛（汽车专用）',
//            imgs: '../../../static/imges/product_qc.png'
//          }, {
//            id: '2',
//            name: 'NG-Y 二氧化钛（孕婴专用）',
//            imgs: '../../../static/imges/product_yy.png'
//          }, {
//            id: '3',
//            name: 'NG-B 二氧化钛（布艺专用）',
//            imgs: '../../../static/imges/product_by.png'
//          }, {
//            id: '4',
//            name: '除醛剂',
//            imgs: '../../../static/imges/product_cq.png'
//          }, {
//            id: '5',
//            name: '除苯剂',
//            imgs: '../../../static/imges/product_cb.png'
//          }, {
//            id: '6',
//            name: '高温熏蒸液',
//            imgs: '../../../static/imges/product_gw.png'
//          }, {
//            id: '7',
//            name: 'NGCTVOC去除剂',
//            imgs: '../../../static/imges/product_tovc.png'
//          }
//        ]
//      };
//    },
    data() {
        return {
            products: []
        };
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .products-rig
    width :70%
    float :right
    margin-bottom :30px
    border :1px solid #eee
    h2
      height: 28px;
      line-height: 28px;
      padding-left :15px
      border-left: 5px solid #018b3e;
      border-right: 1px solid transparent;
      border-bottom: 3px solid transparent;
      border-top: 3px solid transparent;
    .products-cp
      border-top :1px solid #eee
      display :flex
      padding: 15px 0 15px 15px;
      flex-wrap :wrap
      justify-content :flex-start;
      .products-item
        width :210px
        height :230px
        margin-bottom :20px
        margin-right :10px
        font-size :0px
        border :1px solid #eee
        img
          height :180px
          width :100%
        h3
          font-size :14px
          line-height :48px
          text-align :center
          border-top :1px solid #eee
          &:hover
            a
              color :#009926
          a
            display :block
</style>
