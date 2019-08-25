import axios from 'axios';

// TODO: this could be in a global helper
const headers = () => {
  const token = document.querySelector('[name="csrf-token"]') || {content: 'no-csrf-token'}
  return { 
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': token.content 
        }
}

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
    new(context, id){
      const url =  'gratitudes/new'
      axios.get(url).then(response => {
        context.commit('one', response.data);
      })
    },
    create(context, form){
      const url =  'gratitudes.json'
      return axios.post(url, {gratitude: form}, {headers: headers()} )
    },
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