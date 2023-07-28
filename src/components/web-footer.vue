<template>
  <div class="bgColor">
    <div class="bg">
      <div class="content">
        <div class="footerTitle">
          <span class="bigTextColor">{{ footerTitle }}</span>
          <div class="footerMain">
            <div class="footerRight">
              <div class="footerBody smallTextColor">
                {{ footerDes }}
              </div>
              <div class="footerBottom smallTextColor footerBody">
                {{ footerBottom }}
              </div>

            </div>
            <div class="footerLeft">
              <div class="contactInformation bigTextColor" v-for="(item, i) in contactInformation" :key="i">{{
                  item.title
                }}
              </div>
            </div>

          </div>


        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "web-footer",
  data() {
    return {
      footerTitle: 'Premium Features',
      footerDes: 'Creating awesome mobile apps that help you reach your goals, create good habits, stay hydrated, focus and improve your life!',
      footerBottom: "Check out our apps at: FunnMedia.com",
      contactInformation: [{
        title: "Instagram"
      }, {
        title: "Twitter"
      }, {
        title: "Facebook"
      }]
    }
  },
}
</script>

<style scoped lang="less">
.bgColor {
  background: #47954c;
}

.bg {
  height: auto;
  padding-bottom: 20px;
}

.footerMain {
  display: flex;
}

.footerTitle {
  font-size: 38px;
  font-weight: 400;
  letter-spacing: 1.08px;
  line-height: 70px;
  text-align: left;
  vertical-align: top;
  margin: 30px 0px;
}

.footerBody {
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.42px;
  line-height: 20px;
  text-align: left;
  vertical-align: top;
  margin-top: 20px;
  width: 80%;


}

.footerMain {
  .bigTextColor {
    font-size: 20px !important;
  }
}

.footerBottom {
  margin-top: 30px;
  width: 80%;
}

.contactInformation {
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 1.08px;
  line-height: 24px;
  text-decoration-line: underline;
  text-align: left;
  vertical-align: top;
  margin-top: 10px;
}

.bigTextColor {
  color: white;

}

.smallTextColor {
  color: white;
}

@media (max-width: 992px) {
  .footerTitle {
    font-size: 38px !important;
  }
}
</style>