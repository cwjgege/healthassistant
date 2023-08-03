<template>
  <div class="bgColor">
    <div class="bg">
      <div class="content">
        <div class="footerTitle">

          <div class="footerMain">
            <div class="footerRight">
              <span class="bigTextColor">{{ footerTitle }}</span>
              <div class="footerBody smallTextColor" v-html="footerDes">
              </div>
              <div class="footerBottom smallTextColor footerBody" v-html="footerBottom">
              </div>

            </div>
            <div class="footerLeft">
              <div class="_contactInformation">
                <div class="contactInformation bigTextColor" v-for="(item, i) in contactInformation" :key="i">
                  <a :href="item.src" style="color: white">{{
                      item.title
                    }}</a>

                </div>
              </div>

            </div>

          </div>


        </div>
        <div class="_footerBottom">
          <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Use</a> | &nbsp;&nbsp;<span>© 2023 Aivocado Inc All Rights Reserved</span>
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
      footerTitle: 'Contact Us',
      footerDes: 'Feel free to contact us via <a href="mailto:support@aivocado.online" style="color: white">Email</a> if you have some feedback' +
                 ' Twitter ' +
                 'Instagram',
      footerBottom: "",
      contactInformation: [
        {
          title: "Reddit",
          src: ''
        },
        {
          title: "Discord",
          src: ''
        },
        {
          title: "Twitter",
          src: 'https://twitter.com/AivocadoApp'
        },
        {
          title: "Instagram",
          src: ''
        }
      ]
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

.footerRight, .footerLeft {
  position: relative;
  flex: 1;
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

.footerLeft {

  .bigTextColor {
    font-size: 20px !important;
  }

}

.footerBottom {
  margin-top: 30px;
  width: 80%;
}

._contactInformation {
  width: auto;
  position: absolute;
  right: 0px;
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
  width: 100%;
}

.bigTextColor {
  color: white;

}

.smallTextColor {
  color: white;
}

._footerBottom {
  text-align: center;
  color: white;

  a {
    color: white;
    padding: 0px 20px;
  }
}

@media (max-width: 992px) {
  .footerTitle {
    font-size: 38px !important;
  }
}
</style>