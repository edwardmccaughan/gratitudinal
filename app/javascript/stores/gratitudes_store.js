import axios from 'axios';

export default {
  namespaced: true,
  state: {
    gratitudes: [],
    gratitude: {}
  },
  mutations: {
    many(state,payload) {
      state.gratitudes = payload
    },
    one(state, payload){
      state.gratitude = payload
    }
  },
  actions: {
    index(context, query) {
      const url =  'gratitudes.json'
      axios.get(url).then(response => {
        context.commit('many', response.data);
      })
    },
    show(context, id) {
      const url =  `gratitudes/${id}.json`
      axios.get(url).then(response => {
        context.commit('one', response.data);
      })
    }
  }
}