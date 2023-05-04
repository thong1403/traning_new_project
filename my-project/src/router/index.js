import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import ProfileUser from '../components/ProfileUser.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/login',
      component: Login
    },
    {
      path: `/:id`,
      component: ProfileUser
    }
  ]
})
