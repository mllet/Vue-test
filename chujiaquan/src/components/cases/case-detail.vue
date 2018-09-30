<template>
  <div class="wrapper-rig">
    <h2>客户案例<span></span></h2>
    <div class="cases-items" >
      <h5>{{ cases[this.$route.params.id-1].title }}</h5>
      <div class="img-del">
        <img :src="cases[this.$route.params.id-1].img">
      </div>
      <p>{{ cases[this.$route.params.id-1].description }}</p>
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

<style lang="stylus" rel="stylesheet/stylus">
  .wrapper-rig
    h5
      height: 28px;
      line-height: 28px;
      color: #333;
      text-align :center
      font-size: 22px;
    .cases-items
      padding: 0 0 30px 20px
      .img-del
        width: 400px;
        margin: 20px auto;
        img
          height :200px
          width :400px;
</style>
