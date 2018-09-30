<template>
  <div class="my-wrapper">
    <div class="banner"><img src="../../../static/imges/about-banner.jpg"/></div>
    <div class="wrapper-content">
      <ConstructList :constructs="constructs"></ConstructList>
      <div class="wrapper-rig">
        <h2>施工案例<span></span></h2>
        <div class="construction-items" >
          <h5>{{ constructs[$route.params.id-1].title }}</h5>
          <div class="img-del">
            <img :src="constructs[$route.params.id-1].img">
          </div>
        </div>
      </div>
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
    created() {
      this.$http.get('/constructss').then((response) => {
        response = response.data;
        if (response.errno === ERR_OK) {
          this.constructs = response.data;
        }
      });
    },
    components: {
      ConstructList: constructlist
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .my-wrapper
    .wrapper-content
      .wrapper-rig
        h5
          height: 28px;
          line-height: 28px;
          color: #333;
          text-align :center
          font-size: 22px;
        .construction-items
          padding: 0 0 30px 20px
          .img-del
            width: 400px;
            margin: 20px auto;
            img
              height :200px
              width :400px;
</style>
