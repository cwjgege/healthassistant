<template>
  <div id="components">
    <webHeader/>
    <div :style="{display: isloading?'none':''}">
      <webIntro/>
      <webDemo/>
      <webTry/>
      <webPricing/>
      <webFooter/>
    </div>
    <div class="loading" v-loading="isloading" :class="!isloading?'fadeOut':''" :style="{display: !isDelete?'none':''}"
         :element-loading-spinner="svg"
         element-loading-svg-view-box="-10, -10, 50, 50">

    </div>
  </div>
  <el-backtop :bottom="100">
    <div class="upupup">
      UP
    </div>
  </el-backtop>

</template>

<script>
import webHeader from '@/components/web-header'
import webIntro from '@/components/web-intro'
import webDemo from '@/components/web-demo'
import webTry from '@/components/web-try'
import webPricing from '@/components/web-pricing'
import webFooter from '@/components/web-footer'

export default {
  name: "index",
  components: {
    "webHeader": webHeader,
    "webIntro": webIntro,
    "webDemo": webDemo,
    "webTry": webTry,
    "webPricing": webPricing,
    "webFooter": webFooter
  },
  data() {
    return {
      svg: `  <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>`,
      isloading: true,
      isDelete: true
    }
  },
  mounted() {
    let that = this

    window.onload = function () {

      that.isloading = false
      setTimeout(() => {
        that.isDelete = false
      }, 1500)
    }
    setTimeout(() => {
      that.isloading = false
      setTimeout(() => {
        that.isDelete = false
      }, 1500)
    }, 4000)
  }
}
</script>

<style scoped>

</style>