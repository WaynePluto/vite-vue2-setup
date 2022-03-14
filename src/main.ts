import Vue from 'vue'
import App from './App.vue'
import VueCompositionAPI, { createApp, h } from '@vue/composition-api'
import { router } from './router'
Vue.config.productionTip = false
Vue.use(VueCompositionAPI)
const app = createApp({
  router,
  render: () => h(App),
})
app.mount('#app')
