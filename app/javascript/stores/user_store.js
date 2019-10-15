import axios from 'axios'
import headers from '../services/csrf_headers.js'

export default {
  namespaced: true,
  state: {
    user: {}
  },
  mutations: {
    one(state, payload){
      state.user = payload
    }
  },
  actions: {
    show(context, id) {
      const url = `user.json`
      axios.get(url).then(response => {
        context.commit('one', response.data)
      })
    },
    update(context, user) {
      const url = `user.json`
      axios.put(url, user, {headers: headers()} ).then(response => {
        context.commit('one', response.data)
      })
    }
  }
}