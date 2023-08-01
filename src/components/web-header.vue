<template>
  <component :is="`script`" src="https://accounts.google.com/gsi/client"></component>
  <div class="header" :class="headerActive?'showdown':''">
    <div class="bg">
      <div class="content">
        <el-row>
          <el-col :span="4">
            <div class="logo">
              Aivocado
            </div>
          </el-col>
          <el-col :span="14" class="PC">
            <div class="menu">
              <ul>
                <li v-for="(item,i) in menu" :key="i">
                  <a :href="item.url" class="turn">{{ item.title }}</a>
                </li>
              </ul>
            </div>
          </el-col>
          <el-col :span="6" class="PC">
            <div class="login">
              <div class="g_id_signin" id="g_id_signin"></div>
              <!--            <el-button class="sign" type="primary">{{ sign }}</el-button>-->
            </div>
          </el-col>
          <el-col :span="16" class="phone">

          </el-col>
          <el-col :span="4" class="phone">
            <div class="_menu">

              <el-button color="#47944c" @click="showMenu==true?showMenu=false:showMenu=true">
                <el-icon>
                  <Menu/>
                </el-icon>
              </el-button>

            </div>
          </el-col>
        </el-row>
      </div>
      <div class="_menuDiv" :style="{height:showMenu?'220px':'0px'}">
        <div class="menuDiv" v-for="(item,i) in menu" :key="i">
          <a :href="item.url" @click="showMenu=false" class="turn">{{
              item.title
            }}</a>
        </div>
        <div class="menuDiv">
          <div class="g_id_signin" id="g_id_signin"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {login} from "@/api";
import {isMobileDevice} from "@/js";

export default {
  name: "web-header",
  data() {
    return {
      menu: [
        {title: "Home", url: "#intro"},
        {title: "Features", url: "#demo"},
        {title: "Start From Today", url: "#tryItNow"},
        {title: "Premium", url: "#pricing"}
      ],
      showMenu: false,
      headerActive: false,
      GOOGLE_CLIENT_ID: "42950959280-v3k7onnpje9prf59vv6h583mpodcnqvd.apps.googleusercontent.com"
    }
  },
  created() {
    // 使用谷歌登录的api
    console.log(isMobileDevice())
    let GOOGLE_CLIENT_ID = this.GOOGLE_CLIENT_ID;
    window.addEventListener('load', () => {
      window.google.accounts.id.initialize({
        // 主要就是填写client_id
        client_id: GOOGLE_CLIENT_ID,
        auto_select: false,
        callback: this.handleCredentialResponse,
      });
      // 设置按钮的样式等
      window.google.accounts.id.renderButton(
          document.getElementById("g_id_signin"),
          {
            theme: "filled_blue",
            size: 'large',
            // width:'320',
            type: 'standard',
            text: 'signin_with'
          }
      );
    })
  },
  mounted() {
    let that = this;
    window.addEventListener('scroll', function () {
      var y = window.pageYOffset;
      if (y > 72) {
        that.headerActive = true
      } else {
        that.headerActive = false
      }
    });
  },
  methods: {
    async handleCredentialResponse(response) {
      // 获取回调响应的凭证数据 然后拿这个凭证给后台，后台jwt进行解析获取登录信息
      let code = response.credential
      login(code).then(res => {
        localStorage.setItem('tokens', res.data.result.my_token)
      })
    },
  }
}
</script>

<style scoped lang="less">
.header {
  width: 100%;
  margin: auto;
  color: rgba(18, 18, 18, 1);
  position: fixed;
  top: 0px;
  z-index: 9;
  transition: all 0.5s;
  background: #CDE2C9;
}

.showdown {
  box-shadow: 55px 10px 50px rgba(0, 0, 0, 0.06);
}

._menuDiv {
  width: 100%;
  height: 220px;
  background: #fcfcfc;
  transition: all 0.5s;


  .menuDiv {
    width: 200px;
    margin: auto;
    height: 40px;
    line-height: 40px;
    text-align: center;

    a {
      text-decoration: none;
      color: rgba(0, 0, 0, 0.46);
    }
  }
}

.headerActive {
  background-color: #fcfcfc;
  box-shadow: 0 0 2px rgba(50, 50, 50, 0.4);
}

.phone {
  display: none;
}

.bg {
  height: auto !important;
  margin: auto;
  position: relative;
}

.login {
  position: relative;
  top: 15px;
  width: 80%;
}

.logo {
  min-width: 80px;
  height: 70px;
  line-height: 80px;
  font-size: 24px;
  font-weight: 600;

  img {
    width: 100%;
    height: 100%;
  }
}

.turn {
  color: #819686;
  font-weight: 600;
  font-size: 18px;
  line-height: 30px;
}


.turn:hover {
  color: #0f2420;
  transition: all 0.1s;
}

.menu {
  height: 70px;
  width: 420px;
  margin: auto;
}

._menu {
  margin-top: 17px;
}

.menu ul {
  list-style: none;
  width: 420px;
  height: 70px;

  li {
    float: left;
    margin: 10px 20px;
    font-size: 12px;
  }

  a {
    text-decoration: none;
  }
}

.content {
  height: 70px;
  margin-top: 10px;
  margin-bottom: 10px;
}

@media (max-width: 992px) {
  .PC {
    display: none;
  }

  .content {
    margin-top: 0px;
    margin-bottom: 0px;
  }

  .phone {
    display: block;
  }

  .header {
    background-color: #fcfcfc;
    box-shadow: 0 0 2px rgba(50, 50, 50, 0.4);
  }
}

</style>