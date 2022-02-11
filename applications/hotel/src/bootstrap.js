/*
* @Author: Just be free
* @Date:   2021-12-23 10:23:17
* @Last Modified by:   Just be free
* @Last Modified time: 2022-01-07 11:17:51
* @E-mail: justbefree@126.com
*/
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
const app = createApp(App)
app.use(router)
app.mount('#app')