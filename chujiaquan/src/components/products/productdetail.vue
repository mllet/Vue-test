<template>
  <div class="my-wrapper">
    <div class="banner"><img src="../../../static/imges/about-banner.jpg"/></div>
    <div class="wrapper-content">
      <LeftList :products="products"></LeftList>
      <div class="products-rig">
        <h2>产品展示</h2>
        <div class="product-detail">
          <div class="title">{{ products[$route.params.id].name }}</div>
          <img :src="products[$route.params.id].imgs">
          <div v-if="products[$route.params.id].description" class="description">
            <h5>【产品描述】</h5>
            <p v-html="products[$route.params.id].description"></p>
          </div>
          <div v-if="products[$route.params.id].func" class="description">
            <h5>【产品功能】</h5>
            <p v-html=" products[$route.params.id].func "></p>
          </div>
          <div v-if="products[$route.params.id].application" class="description">
            <h5>【应用】</h5>
            <p v-html="products[$route.params.id].application"></p>
          </div>
          <div v-if="products[$route.params.id].useMethod" class="description">
            <h5>【使用方法】</h5>
            <p v-html="products[$route.params.id].useMethod"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import leftlist from '../../components/advertising/leftlist.vue';
  export default {
    data() {
      return {
        products: [
          {
            id: '0',
            imgs: '../../../static/imges/pro_zh.png',
            name: 'NG-I 二氧化钛（综合治理产品）',
            description: ' 纳米二氧化钛吸收光能后会释放电子。空气中的水分子捕获电子形成氢氧自由基（-HO），氧分子捕获电子形成负氧离子（O2-）。氢氧自由基与负氧离子具有强大的氧化分解能力，能将空气中的有机化合物氧化分解成无害的二氧化碳和水，并能氧化分解病菌的细胞膜与蛋白质。 ',
            func: '1、 杀菌功能：能杀死大肠杆菌、黄色葡萄球菌等细菌，同时分解细菌死体上释放的有害复合物；<br>2、 自洁功能：纳米二氧化钛具有超亲水性，能防止油烟、汽车尾气等吸附；<br>3、 净水功能：能降解水中的有机有害物质，从而净化水质；<br>4、 净化空气功能：能降解与消除空气中所有的有机污染物及部分无机物；<br>5、 释放负氧离子功能：纳米二氧化钛在光照下会产生负氧离子，如同森林中的空气更清新。',
            application: '1、适用于家居、汽车、酒店、学校、写字楼等场所的空气净化。<br>2、医院、实验室、无尘车间等空气净化与物件表面的病菌杀灭。',
            useMethod: ' 1.本品可喷涂于墙体、木器、皮革、塑料、布料、陶瓷、玻璃、汽车内部等表面，为保证良好效果，建议使用雾化效果好的喷枪进行喷涂，产品用量：35㎡/500ml；<br>2.喷涂前，清洁被涂表面，将不宜喷涂物遮盖，喷枪距被涂物30—45㎝为宜；<br>3.涂膜自然干燥时间约10分钟，完全固化需24小时，未完全固化前勿大力擦洗。'
          }, {
            id: '1',
            name: 'NG-C 二氧化钛（汽车专用）',
            imgs: '../../../static/imges/pro_qc.png',
            description: ' 车用纳米二氧化钛是上海黛龙纳米二氧化钛系列产品之一，针对汽车内的空气污染和病菌交叉感染等研制而成，可以持续、全面、安全、高效地净化车内环境。',
            func: ' 1、有效降解车内甲醛、苯、氨、TVOC等毒害气体，预防呼吸道类疾病产生；<br>2、全面灭菌，预防流行病菌交叉感染；<br>3、有效去除烟、酒、汗等异味；<br>4、保护基材表面，防止老化；<br>5、高效吸收紫外线，使用车内环境更健康更清爽；<br>6、释放负离子，清新空气。',
            application: '',
            useMethod: '1、使用0.5毫米口径喷枪和3.5公斤压力空压机作为施工工具2、喷涂时，无需喷涂的部位应用挡板遮盖。<br>3、喷涂时喷嘴与被喷涂物体基面要保持大约25cm左右的垂直距离。<br>4、建议车体喷涂面：座椅、后台、车门内饰、窗帘、车内顶棚、装饰品、仪表台、地毯、后备箱等。如有必要，抱 枕、饰物等皆可喷涂。<br>5、若误喷未干时，可以用湿毛巾抹去；若误喷部位已干，可以用细软的湿毛巾加少许牙膏仔细抹去。<br>6、 喷涂后建议打开车门、车窗并把地毯拿到阳光下晒，喷涂后需要自然干燥30分钟方可使用。'
          }, {
            id: '2',
            name: 'NG-Y 二氧化钛（孕婴专用）',
            imgs: '../../../static/imges/pro_yy.png',
            description: ' 孕婴型的复合式纳米二氧化钛采用磷灰石被覆二氧化钛纳米式结构，具有催化、分解、去除、无毒的特质。较传统纳米二氧化钛，此款纳米二氧化钛作用不受光线影响，有光无光下皆可作用。',
            func: '',
            application: '',
            useMethod: ''
          }, {
            id: '3',
            name: 'NG-B 二氧化钛（布艺专用）',
            imgs: '../../../static/imges/pro_by.png',
            description: '去除布艺产品的甲醛、苯、TVOC、氨气等有害气体；净化空气、释放负氧离子；可以将各种有机污染物分解为二氧化碳和水，对各种细菌、病毒、真菌产生强烈杀灭作用。',
            func: '',
            application: '',
            useMethod: ''
          }, {
            id: '4',
            name: '除醛剂',
            imgs: '../../../static/imges/pro_cq.png',
            description: '',
            func: '',
            application: '1.用于胶合板、细目工板、密度板、刨花板等人造板进行甲醛清除，可从根本上解决装修结束后甲醛污染问题；常见于家具中的底板和背板，如床、沙发、 柜体等的底板及背板，以及各种复合地板的接缝处。<br>2.用于未油漆的家具进行甲醛处理。',
            useMethod: '1.先清洁需要喷涂的污染源，去除表面灰尘；<br>2.使用毛刷均匀涂刷或使用喷枪，将甲醛清除剂均匀地 喷涂在污染源表面；<br>3.一般喷涂或刷两遍即可，重度污染三遍，每遍喷洒表面自然风干即可再次喷洒，一般间隔时间约为30-60分钟；<br>4.涂刷量：20-40毫升/平方米，可根据污染程度调整用量；<br>5.处理结束后，保持通风状态；对于通风状态不好的空 间可人为采取通风措施；6.建议室内空气治理工作5-7天后再进行日常清洁， 以使产品发挥最佳效果。'
          }, {
            id: '5',
            name: '除苯剂',
            imgs: '../../../static/imges/pro_cb.png',
            description: '1、本品由天然材料研制而成，不含有害物质；<br>2、本品对苯系物有明显的清除能力，可以迅速去除油漆味，清除率达90%；<br>3、本品使用方便，适合涂料厂、装修、空气污染治理.',
            func: '',
            application: '1、用于清除空气中的苯系物；<br>2、用于清除已油漆板材和家具内外表面的苯系物。',
            useMethod: '1、用于清除已油漆装修板材和家俱内外表面的苯氨时，清洁被施工表面并屏蔽不需要处理的部分，将本品均匀喷涂在被施工表面；<br>2、苯系物污染严重的场所，可以在两周后再处理一次.'
          }, {
            id: '6',
            name: '高温熏蒸液',
            imgs: '../../../static/imges/pro_gw.png',
            description: ' 高温熏蒸液是高温除醛熏蒸机的配套用品，产品以纯天然可净化空气、杀菌、消毒、清除污染的多种植物提取液为原料，经高科技工艺萃取提纯研制而成。',
            func: '可提升新装修室内潜藏着的甲醛、苯、氨、TVOC等污染物的释放率。在熏蒸的过程中，高温熏蒸液对释放出的有毒污染物可起到边熏蒸边清除的作用。熏蒸后再经后续操作，可使室内有毒污染物清除的更彻底，效果更稳定持久。',
            application: '',
            useMethod: ' 使用时，将本品溶液1:16稀释后灌入熏蒸机内，经高温熏蒸雾化进行熏蒸操作。'
          }, {
            id: '7',
            name: 'NGCTVOC去除剂',
            imgs: '../../../static/imges/pro_tovc.png',
            description: '本品是针对室内家具油漆、粘合剂和纺织类等缓慢释放的总挥发性有机物（TVOC）的共性问题，引进德国先进纳米合成复合技术研发的新一代全效TVOC净化剂。',
            func: '',
            application: '',
            useMethod: '1、先清洁需要喷涂的污染源，去除表面灰尘；<br>2、使用喷枪，将产品均匀地喷涂在污染源表面；<br>3、重度污染三遍，每遍喷洒表面自然风干即可再次喷洒，一般间隔时间约为30-60分钟；4.处理结束后，保持通风状态；对于通风状态不好的空间可人为采取通风措施；<br>5、建议室内空气治理工作5-7天后再进行日常清洁，以使产品发挥最佳效果。'
          }
        ]
      };
    },
    components: {
      LeftList: leftlist
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/base.styl";
  .my-wrapper
    .wrapper-content
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
        .product-detail
          margin-bottom :30px
          .title
            width: 100%;
            margin: 15px auto;
            font-size: 25px;
            color: #333333;
            text-align: center;
          img
            height :300px
            width :300px
            display :block
            margin: 15px auto;
          .description
            padding :0 30px 20px 30px
            h5
              line-height: 1.5;
              font-weight :bold
              font-size: 14px
            p
              line-height :2
              font-size :14px
</style>
