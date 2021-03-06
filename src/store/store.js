import { createStore } from 'vuex'
import axios from 'axios'

export const store = createStore(
  {
    state () {
      return {
        visible: false,
        page: 1,
        list: [],
        gender: '',
        name: '',
        favoriteList: [],
        isFavoriteFilter: false
      }
    },
    actions: {
      async loadList ({ commit, getters }) {
        let endpoint = '/character/?'
        try {
          if (getters.getGender !== '') {
            endpoint += 'gender=' + getters.getGender + '&'
          }
          if (getters.getName !== '') {
            endpoint += 'name=' + getters.getName + '&'
          }
          const { data } = await axios.get(process.env.VUE_APP_ROOT_API + endpoint)
          commit('setList', data.results)
        } catch (error) {
          commit('setList', [])
        }
      }
    },
    mutations: {
      setList (state, list) {
        state.list = list
      },
      setPage (state, page) {
        state.page = page
      },
      setGender (state, gender) {
        state.gender = gender
      },
      setVisible (state) {
        state.visible = true
      },
      setName (state, name) {
        state.name = name
      },
      dismiss (state) {
        state.visible = false
      },
      changeFavorite (state, character) {
        const index = state.favoriteList.findIndex(element => element === character)
        if (index >= 0) {
          state.favoriteList.splice(index, 1)
        } else {
          state.favoriteList.push(character)
        }
      },
      changeFilter (state) {
        state.isFavoriteFilter = !state.isFavoriteFilter
      },
      removeFilters (state) {
        state.gender = ''
        state.name = ''
        state.isFavoriteFilter = false
      }
    },
    getters: {
      getList (state, getters) {
        if (state.isFavoriteFilter) {
          return state.list.filter(character => getters.isFavorite(character.id))
        }
        return state.list
      },
      getGender (state) {
        return state.gender
      },
      getName (state) {
        return state.name
      },
      isFavorite: (state) => (id) => {
        return state.favoriteList.findIndex(element => element === id) >= 0
      },
      isFavoriteActive (state) {
        return state.isFavoriteFilter
      }
    }
  })
