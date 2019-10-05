import axios from 'axios';
import headers from '../services/csrf_headers.js'

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
    index_today(context, query) {
      const url =  'gratitudes.json?today=true'
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
  },
  getters: {
    split_gratitudes_by_date(state) {
      return state.gratitudes.reduce(function(accumulator, currentValue, currentIndex, array) {
        const date = currentValue.created_at.split("T")[0]
        if (accumulator[date] === undefined ) {
          accumulator[date] = [currentValue]
        } else {
          accumulator[date].push(currentValue)
        }
        return accumulator
      }, {});
    }
  }
}