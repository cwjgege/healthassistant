<template>
  <div>
    <router-view></router-view>
  </div>

</template>

<script>


export default {
  name: 'App',


}
</script>

<style lang="less">
:root {
  --el-loading-spinner-size: 100px;
  --el-font-size-large: 25px;
}

@bgColor: #fff;
@bigTextColor: #0F2420;
@smallTextColor: #6e8374;
@font-face {
  font-family: "Roboto";
  src: url("./assets/fonts/font.woff2") format('truetype');
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0px;
  margin: 0px;
  color: #2c3e50;
  font-family: 'Roboto', sans-serif;
}

.examples svg {
  width: 30px !important;
  height: 30px !important;
}

.examples .el-loading-spinner {
  margin-top: -15px;
}

body {
  --backgroundColor: "#f5f6fa";
  padding: 0px;
  margin: 0px;
  background: @bgColor;
}

.bigTextColor {
  color: @bigTextColor;
  font-size: 60px;
  letter-spacing: 0.1em !important;
}

.smallTextColor {
  color: @smallTextColor;
  font-size: 14px;
  letter-spacing: 0.1em !important;
}

.components {
  position: relative;
}

.loading {
  position: absolute;
  z-index: 999;
  width: 100%;
  top: 90px;
  height: calc(100vh - 90px);
}

.el-loading-spinner .path {
  stroke: #47944c !important;;
}

.el-dialog {
  border-radius: 10px !important;
}

.content {
  width: 60%;
  margin: auto;
}

/* 媒体查询 */
@media (max-width: 1348px) {
  .content {
    width: calc(100% - 60px);
    margin: auto;
  }
}

@media (max-width: 768px) {
  .content {
    width: calc(100% - 60px);
    margin: auto;
  }
}

.bg {
  width: 100%;
  height: auto;
  overflow: hidden;
  position: relative;
  max-width: 1700px;
  margin: auto;
}


.upupup {
  height: 100%;
  width: 100%;
  background-color: var(--el-bg-color-overlay);
  box-shadow: var(--el-box-shadow-lighter);
  text-align: center;
  line-height: 40px;
  color: @bigTextColor;
  border-radius: 10px;
}

.animateLeft {
  animation-name: fadeInLeft;
  animation-duration: 1s;
}

.animateRight {
  animation-name: fadeInRight;
  animation-duration: 1s;
}

.fadeIn {
  animation-name: fadeIn;
  animation-duration: 1s;
}

.fadeOut {
  animation-name: fadeOut;
  animation-duration: 1.5s;
}

@media (max-width: 992px) {
  .bigTextColor {
    font-size: 40px;
    letter-spacing: 0.1em !important;
  }

  .smallTextColor {
    font-size: 14px;
    letter-spacing: 0.1em !important;
  }

  .el-dialog {
    border-radius: 0px !important;
  }
}
</style>
