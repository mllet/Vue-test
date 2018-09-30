
<template>
  <div class="my-wrapper">
    <div class="banner"><img src="../../../static/imges/about-banner.jpg"/></div>
    <div class="wrapper-content">
      <CaseList :cases="cases"></CaseList>
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import caselist from '../advertising/caselist.vue';
  const ERR_OK = 0;
  export default {
      data() {
          return {
            cases: [
              {
                id: '1',
                title: '室内除甲醛',
                img: '../../../static/imges/case_01.jpg',
                time: '2018-09-10'
              }, {
                id: '2',
                title: '家居除甲醛',
                img: '../../../static/imges/case_02.jpg',
                time: '2018-09-08'
              }, {
                id: '3',
                title: '办公室除甲醛',
                img: '../../../static/imges/case_03.jpg',
                time: '2018-09-05'
              }, {
                id: '4',
                title: '家居除甲醛',
                img: '../../../static/imges/case_06.jpg',
                time: '2018-08-21'
              }
            ]
          };
      },
      components: {
        CaseList: caselist
      }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/base.styl";
</style>
