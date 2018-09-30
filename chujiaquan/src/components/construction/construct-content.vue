<template>
  <div class="wrapper-rig">
    <h2>施工现场<span></span></h2>
    <div class="construction-items">
      <div class="construction-item"  v-for="item in constructs" :key="item.id">
        <router-link :to='"/construction/constructs/id/"+item.id'>
          <div class="img">
            <img :src="item.img">
          </div>
          <span class="title">{{ item.title }}</span>
          <span class="time">{{ item.time }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
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
    }
  };
</script>

<style  lang="stylus" rel="stylesheet/stylus">
  .my-wrapper
    .wrapper-content
      .wrapper-rig
        .construction-items
          padding: 0 0 30px 20px
          .construction-item
            margin-bottom:10px;
            padding: 20px 4px 4px 4px;
            position :relative
            border-bottom: 1px dashed #eee;
            .img
              padding :3px
              width:100px;
              height:100px;
              display: inline-block;
              img
                width :100%
                height :100%
            .title
              margin-left :30px
              vertical-align :top
            .time
              position :absolute
              right :30px
</style>
