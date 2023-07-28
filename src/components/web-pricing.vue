<template>
  <div class="bg" id="pricing">
    <div class="content">
      <div class="pricingTip">
        <div class="pricingContent one">
          <div class="bigTextColor">
            {{ title }}
          </div>
          <div class="smallTextColor" v-html="describe">

          </div>
        </div>
      </div>
      <div class="pricingFree">
        <div class="pricingContent two">
          <div class="bigbigTextColor">
            Basic
          </div>
          <div class="smallTextColor">
            Best value for small businesses & freelancers
          </div>
          <div class="detailedCharges">
            Free
          </div>
          <div class="smallTextColor">
            <el-icon>
              <CircleCheckFilled/>
            </el-icon>
            Limited Food Image Recognition, 2/day
          </div>
          <div class="smallTextColor">
            <el-icon>
              <CircleCloseFilled/>
            </el-icon>
            Long-term Health Tracking
          </div>
          <div class="smallTextColor">
            <el-icon>
              <CircleCloseFilled/>
            </el-icon>
            Weekly Health Report
          </div>

        </div>
      </div>
      <div class="pricingCharge">
        <div class="pricingContent three">
          <div></div>
          <div class="bigbigTextColor">
            Premium
          </div>
          <div class="smallTextColor">
            Best value for small businesses & freelancers
          </div>

          <div class="detailedCharges">
            $ 49.99<span>/yr</span>
            <span> (58% OFF) </span>

          </div>

          <div class="smallTextColor" style="font-weight: 600;font-size: 20px">
            <span>Compare to</span> 9.99<span>/mo</span>
          </div>
          <div class="smallTextColor">
            <el-icon>
              <CircleCheckFilled/>
            </el-icon>
            Unlimited Food Image Recognition
          </div>
          <div class="smallTextColor">
            <el-icon>
              <CircleCheckFilled/>
            </el-icon>
            Long-term Health Tracking
          </div>
          <div class="smallTextColor">
            <el-icon>
              <CircleCheckFilled/>
            </el-icon>
            Weekly Health Report
          </div>
          <div class="smallTextColor">
            <el-icon>
              <CircleCheckFilled/>
            </el-icon>
            Nutrition Widget
          </div>
          <div class="smallTextColor">
            <el-icon>
              <CircleCheckFilled/>
            </el-icon>
            Tailored Diet Advice
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "web-pricing",
  data() {
    return {
      title: "Premium",
      describe: "Free 7-day trial<br />" +
                "Cancel anytime",
    }
  },

  methods: {},
}
</script>

<style scoped lang="less">
.content {
  margin-top: 120px;
  margin-bottom: 120px;
  display: flex;
  width: 80%;

  .bigbigTextColor {
    margin-bottom: 20px;
    line-height: 40px;
    font-size: 30px;
  }

  .smallTextColor {
    margin-top: 20px;
  }

  .pricingTip, .pricingFree, .pricingCharge {
    flex: 1;
    height: 600px;
    padding: 50px 20px;
    width: calc(100% - 40px);
    margin: auto;
    min-width: 340px;
  }

  .detailedCharges {
    margin-top: 20px;
    font-size: 50px;

    span {
      font-size: 20px;
    }
  }

  .one {
    background: url("./../assets/pricingBg.png") no-repeat;
    height: calc(100% - 100px);
    background-size: 350px;
    background-position: left bottom;
    padding: 50px 50px;


  }

  .two {
    border: 1px solid rgba(218, 218, 218, 1);
    height: calc(100% - 100px);
    text-align: left;
    padding: 50px 50px;
    background: rgba(204, 204, 204, 0.4);

    svg {
      position: relative;
      top: 2px;
    }
  }

  .three {
    background: url("./../assets/threeBg.png") no-repeat center;
    height: calc(100% - 100px);
    background-size: 100% 100%;
    padding: 50px 50px;
    text-align: left;
    color: white !important;

    svg {
      position: relative;
      top: 2px;
    }

    .smallTextColor {
      color: white !important;
    }
  }

}

@media (max-width: 992px) {
  .content {
    margin: 30px 30px 0px 30px;
    text-align: center;
    display: inline-block;

    .one, .two, .three {
      margin: auto;
    }

    .detailedCharges {
      font-size: 40px;
    }
  }
}
</style>