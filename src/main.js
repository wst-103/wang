import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import siAxios from './siAxios'

Vue.config.productionTip = false

Vue.prototype.$siAxios = siAxios

import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

router.beforeEach((to,from,next) =>{
   if(to.path != "/login"){
     if(!window.sessionStorage.getItem("name")){
       next({path:"/login"})
       return;
     }
   }
   next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
