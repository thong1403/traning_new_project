
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 10,
    users: []
  },
  mutations: {
    increment (state) {
      state.count++
    },
    SET_DATA (state, data) {
      state.users = data
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    },
    api ({commit}) {
      axios.get('http://localhost:3000/user')
        .then(data => {
          commit('SET_DATA', data.data)
        })
        .catch(err => console.log(err))
    }
  },
  getters: {
    getData: state => state.data
  }
})

export default store
