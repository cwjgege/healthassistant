<template>
  <div class="bgColor">
    <div class="bg" id="intro">
      <div class="content">

        <div class="introContent animateLeft">
          <div class="introTitle">
            <span class="bigTextColor">{{ title }}</span>
          </div>
          <div class="introDescibe">
            <span class="smallTextColor">{{ describe }}</span>
          </div>
        </div>

        <div class="imgContent animateRight">
          <img :src="describeImage" alt="">
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "web-intro",
  data() {
    return {
      title: "Your Smart & Tailored Health Tracker",
      describe: "Easiest way to track your diet and health",
      describeImage: require("./../assets/home.png"),
    }
  },

  methods: {},
}
</script>

<style scoped lang="less">
.bgColor {
  background: #CDE2C9;
}


.bg {
  margin-top: 90px;
  height: 500px;

  .introContent {
    flex: 4;
  }


  .content {
    height: 100%;
    margin-top: 0px;
    display: flex;
  }

  .introTitle {
    height: 190px;
    text-align: left;
    vertical-align: top;
    padding-top: 130px;
    width: 600px;

    span {

      letter-spacing: 1.08px;
      line-height: 70px;
    }
  }

  .introDescibe {
    width: 400px;
    margin-top: 30px;

    span {

      line-height: 20px;
      text-align: left;
      vertical-align: top;
    }
  }

  .imgContent {
    position: relative;
    width: 100%;
    height: 100%;
    flex: 3;


    img {
      position: absolute;
      top: 50px;
      right: 0px;
      z-index: 2;
      width: 100%;
      max-width: 260px;
      height: auto;
      object-fit: contain;
      max-height: 100%;
    }
  }
}

@media (max-width: 992px) {
  .content {
    display: inline-block !important;
  }


  .bg {
    margin-top: 70px;
    height: auto !important;
  }

  .content {
    width: 100%;
    text-align: center;
  }

  .introContent {
    padding: 0px 40px;
    margin-bottom: 30px;
  }

  .introTitle {
    padding-top: 50px !important;
    max-width: 400px;
    margin: auto;
    height: auto !important;
    width: 100% !important;
    text-align: center !important;

    span {
      line-height: 50px !important;
    }
  }

  .introDescibe {
    margin-top: 40px;
    width: 100% !important;
  }


  .imgContent {
    max-width: 150px !important;
    margin: auto;

    img {
      max-height: 500px !important;
      position: relative !important;
      top: 20px !important;
    }
  }
}

</style>