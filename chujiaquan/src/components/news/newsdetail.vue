<template>
  <div class="newdetail">
    <h2>{{ newslist[0].title }}</h2>
    <div v-html="newslist[0].artical"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
        return {
            newslist: [
              {
                  id: '9',
                  title: '室内甲醛检测七大误区',
                  artical: '<p>新房装修完后最重要的工作之一就是除甲醛，治理室内的污染问题。因为装修完成后或多或少都会产生一定的污染，人们会使用各种方法去除室内的甲醛等污染，但是很多时候容易走进误区，如果不能采取有效的方法治理的话，会导致治理工作徒劳无功，那么到底在此过程中容易走进那些误区呢?</p>' +
                  '<p><strong>误区一、用达标材料就避免污染</strong>现在市场上所谓的达标材料是指有害物质释放量低于国家标准的，但是并不是没有有害物质，如果在一定面积内使用大量的相同材料的话，那么有害物质还是有一定的积累的，因此刚装修完的室内难免会有超标的有害物质存在，单纯的从材料方面杜绝几乎是不可能的。</p>' +
                  '<p><strong>误区二、治理室内污染就是消除甲醛</strong>一般情况下甲醛是来自人造板材、家具和装修中使用的黏合剂以及地毯等合成织物中，如果人吸入的甲醛浓度超标的话就会引起恶心、呕吐、咳嗽、胸闷、气喘甚至肺气肿等问题，因为大家公认为甲醛是室内污染的“头号杀手”。许多消费者认为消除室内污染就是消除甲醛，其实不然。除了甲醛之外，来自建筑装修材料中使用的大量化工材料，如涂料、溶剂、稀释剂、胶黏剂的苯系物，如苯、甲苯、二甲苯等，长期吸入苯浓度较高的空气易引起苯的慢性中毒，引发过敏性皮炎、喉头水肿及血小板下降，严重的还可能导致再生障碍性贫血。</p>' +
                  '<p><strong>误区三、过分依赖植物</strong>用来点缀居室环境的绿色植物，是净化室内空气的一件利器。有些人喜欢在居室中摆上几盆花卉，不仅起到美化环境的作用，也能让人身心愉悦。例如，常青藤、铁树可吸收苯和有机物，吊兰、芦荟等植物可吸收甲醛。但是要知道的是，用花卉绿植治理空气的特点是速度慢、时间长，而且吸附分解量有限，对于装修量大的居室来说，其效果微乎其微。因此过分依赖植物来治理室内空气并不是明智之举。</p>' +
                  '<p><strong>误区四、单靠通风来降低室内污染</strong>通风的目的就是为了空气置换，因此室内外空气置换速率越高，室内的污染物浓度就越低，加强通风换气的确是可以让室外的新鲜空气代替室内的污染空气，从而达到一定的降低污染物的目的，但是并不能从根本上去除污染物，一旦关闭窗户，室内的污染物还会慢慢散发出来的。</p>'
              }
            ]
        };
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .newdetail
    max-width :1000px
    margin :0 auto
    border :1px solid #eee
    padding: 20px 20px 50px;
    h2
      font-size :22px
      font-weight :bold
      height :32px
      line-height :32px
      text-align :center
      color :#53290c
    p
      font-size :14px
      line-height :1.5
      color :#333
      letter-spacing :0.2rem
      &:nth-child(1)
        padding-top :15px
      strong
        display :block
        font-weight :bold
        padding :20px 0 8px 0
</style>
