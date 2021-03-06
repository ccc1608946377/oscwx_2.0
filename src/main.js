import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/Home'
import NewsDetail from './components/NewsDetail.vue'
import MySettings from './components/MySettings.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Home
  },
  {
  path: '/newsdetail',
  component: NewsDetail
  },
  {
    path: '/mysettings',
    component: MySettings
  }
]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
