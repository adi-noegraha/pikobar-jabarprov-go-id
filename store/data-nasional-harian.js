import axios from 'axios'

export const state = () => ({
  items: null
})

export const mutations = {
  setItems (state, items) {
    state.items = items
  }
}

export const actions = {
  async getItems ({ commit }, options) {
    const { data } = await axios.get('https://indonesia-covid-19.mathdro.id/api/harian')
    commit('setItems', data.data)
  }
}

export const getters = {
  itemsMap (state) {
    return state.items
  }
}
