import Vue from 'vue'
import Vuex from 'vuex'
import {CHARACTERS_BY_PAGE} from "../api/routes";
import instance from "../api/api";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    characters: {},
    pages: 0
  },
  mutations: {
    setCharacters: (state, {page, characters}) => {
      state.characters[page] = characters
    },
    setPages: (state, pages) => {
      state.pages = pages
    }
  },
  actions: {
    getApiCharacter({commit}, page) {
      return instance.get(CHARACTERS_BY_PAGE(page)).then(res => {
        const {info, results} = res.data
        console.log(res.data)
        commit('setCharacters', {page, characters: results})
        commit('setPages', info.pages)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  getters: {}

})
