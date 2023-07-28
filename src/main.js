import {createApp} from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import GSignInButton from "vue-google-signin-button"
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import animate from 'animate.css'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}
app.use(ElementPlus)
app.use(GSignInButton)
app.use(animate)
app.mount('#app')


