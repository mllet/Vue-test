<template>
  <div class="my-wrapper">
    <div class="banner"><img src="../../../static/imges/about-banner.jpg"/></div>
    <div class="wrapper-content">
      <ConstructList :constructs="constructs"></ConstructList>
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import constructlist from '../advertising/constructlist.vue';
  const ERR_OK = 0;
  export default {
    data() {
      return {
        constructs: [
          {
            id: '1',
            title: '室内甲醛检测',
            img: '../../../static/imges/constructs_01.jpg',
            time: '2018-09-10'
          }, {
            id: '2',
            title: '家居甲醛处理',
            img: '../../../static/imges/constructs_02.jpg',
            time: '2018-09-08'
          }, {
            id: '3',
            title: '室内除甲醛',
            img: '../../../static/imges/constructs_03.jpg',
            time: '2018-09-05'
          }, {
            id: '4',
            title: '室内甲醛检测',
            img: '../../../static/imges/constructs_04.jpg',
            time: '2018-09-02'
          }
        ]
      };
    },
    components: {
      ConstructList: constructlist
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/base.styl";
</style>
