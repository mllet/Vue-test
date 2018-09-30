<template>
  <div class="wrapper-rig">
    <h2>客户案例<span></span></h2>
    <div class="cases-items" v-for="item in cases" :key="item.id">
      <router-link :to='"/cases/case/id/"+item.id'>
        <div class="cases-item">
          <div class=img>
            <img :src="item.img">
          </div>
          <span class=title>{{ item.title }}</span>
          <span class=time>{{ item.time }}</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  const ERR_OK = 0;
  export default {
    data() {
      return {
        cases: [
          {
            id: '1',
            title: '室内除甲醛',
            img: '../../../static/imges/case_01.jpg',
            time: '2018-09-10',
            discription: '室内除甲醛'
          }, {
            id: '2',
            title: '家居除甲醛',
            img: '../../../static/imges/case_02.jpg',
            time: '2018-09-08',
            discription: '家居除甲醛'
          }, {
            id: '3',
            title: '办公室除甲醛',
            img: '../../../static/imges/case_03.jpg',
            time: '2018-09-05',
            discription: '办公室除甲醛'
          }, {
            id: '4',
            title: '家居除甲醛',
            img: '../../../static/imges/case_06.jpg',
            time: '2018-08-21',
            discription: '家居除甲醛'
          }
        ]
      };
    },
    created() {
      this.$http.get('/cases').then((response) => {
        response = response.data;
        if (response.errno === ERR_OK) {
          this.cases = response.data;
        }
      });
    }
  };
</script>

<style lang="stylus">
  .wrapper-rig
    .cases-items
      padding: 0 0 30px 20px
      .cases-item
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
