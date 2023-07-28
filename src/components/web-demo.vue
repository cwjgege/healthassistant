<template>
  <div class="bgColor">
    <div class="bg" id="demo">
      <div class="content" v-for="(item, i) in describes" :key="i">
        <div class="imgContent" v-if="i%2==0">
          <img :src="item.demoImage.src" alt="">
        </div>
        <div class="showtext">
          <div class="describes" :style="{marginTop:i==1?'280px':''}">
            <div class=" bigTextColor">{{ item.title }}</div>
            <div class=" smallTextColor">{{ item.describe }}</div>
          </div>
        </div>
        <div class="imgContent" v-if="i%2!=0">
          <img :src="item.demoImage.src" alt="">
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "web-demo",
  data() {
    return {
      describes: [{
        title: "Easiest Way to Track Meals",
        describe: "Snap and grab it! \n" +
                  "BodyCompass will provide a nutrition analysis and diet advice based on the photo. Make every meal a step towards your health goals",
        demoImage: {src: require("./../assets/function1.png")},
      }, {
        title: "Your Tailored Health Expert",
        describe: "Your health, intelligently managed with personalized tracking and tailored advice. Navigate your diet and fitness, one bite and step at a time.",
        demoImage: {src: require("./../assets/function2.png")},
      }],

    }
  },
  mounted() {

  },
  methods: {},
}
</script>

<style scoped lang="less">
.bgColor {
  opacity: 1;
  background: linear-gradient(180deg, rgba(205, 226, 201, 1) 0%, rgba(243, 250, 252, 1) 10%, rgba(255, 255, 255, 1) 20%);
}

.content {
  height: 100%;
  display: flex;



  .imgContent {
    width: 100%;
    height: 100%;
    margin-top: 130px;

    flex: 3;

    img {
      width: 100%;
      max-width: 400px;
      height: auto;
      -o-object-fit: contain;
      object-fit: contain;
      max-height: 100%;
    }
  }


  .showtext {
    flex: 4;
  }

  .describes {
    width: 500px;
    margin-top: 200px;
  }

}

@media (max-width: 992px) {
  .content {
    display: inline-block;
    width: 100%;
  }


  .imgContent {
    max-width: 260px;
    margin: auto;
    height: auto !important;
    padding: 0px !important;
    margin-top: 80px !important;

    img {
      margin: auto;
      position: relative;
      left: 10px;
    }
  }

  .showtext {
    max-width: 400px;
    margin: auto;
    font-size: 20px;
    padding: 40px;
  }


  .Carousel {
    max-height: 100% !important;
    width: 100% !important;
    margin: auto;
    transform: scale(1.5);
  }

  .describes {
    width: 100% !important;
    text-align: center;
    margin-top: 70px !important;

    .smallTextColor {
      margin-top: 30px;
    }
  }
}

</style>