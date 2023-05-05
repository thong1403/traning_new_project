import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import ProfileUser from '../components/ProfileUser.vue'
import CheckUser from '../components/CheckUser.vue'
import EditUser from '../components/EditUser.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
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
    },
    {
      path: `/`,
      component: CheckUser
    },
    {
      path: `/edit`,
      component: EditUser
    }
  ]
})
