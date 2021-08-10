import { shallowMount } from '@vue/test-utils'
import CharacterList from '@/components/CharacterList.vue'
import { createStore } from 'vuex'

const mockStoreData = createStore({
  getters: {
    getList(){
      return [
          {
            "id": 1,
            "name": "Rick Sanchez",
            "status": "Alive",
            "species": "Human",
            "type": "",
            "gender": "Male",
            "origin": {
              "name": "Earth (C-137)",
              "url": "https://rickandmortyapi.com/api/location/1"
            },
            "location": {
              "name": "Earth (Replacement Dimension)",
              "url": "https://rickandmortyapi.com/api/location/20"
            },
            "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            "episode": [
              "https://rickandmortyapi.com/api/episode/1",
              "https://rickandmortyapi.com/api/episode/2",
              "https://rickandmortyapi.com/api/episode/3",
              "https://rickandmortyapi.com/api/episode/4"
            ],
            "url": "https://rickandmortyapi.com/api/character/1",
            "created": "2017-11-04T18:48:46.250Z"
          },
          {
            "id": 2,
            "name": "Morty Smith",
            "status": "Alive",
            "species": "Human",
            "type": "",
            "gender": "Male",
            "origin": {
              "name": "Earth (C-137)",
              "url": "https://rickandmortyapi.com/api/location/1"
            },
            "location": {
              "name": "Earth (Replacement Dimension)",
              "url": "https://rickandmortyapi.com/api/location/20"
            },
            "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
            "episode": [
              "https://rickandmortyapi.com/api/episode/1",
              "https://rickandmortyapi.com/api/episode/2",
              "https://rickandmortyapi.com/api/episode/3",
              "https://rickandmortyapi.com/api/episode/4"
            ],
            "url": "https://rickandmortyapi.com/api/character/2",
            "created": "2017-11-04T18:50:21.651Z"
          }
      ]
    },
    isFavoriteActive(){
      return false
    }
  },
  actions: {
    loadList(){}
  }
})

const mockStoreEmpty = createStore({
  getters: {
    getList(){
      return []
    },
    isFavoriteActive(){
      return false
    }
  },
  actions: {
    loadList(){}
  }
})

const factory = (store) => {
  const wrapper = shallowMount(CharacterList, {
    global: {
      mocks: {
        $store: store
      }
    }
  })
  return wrapper
}

describe('CharacterList.vue', () => {
  it('El componente tiene las etiquetas asigandas', () => {
    const lbFavorites = 'Mostrar favoritos:'
    const wrapper = factory(mockStoreData)
    expect(wrapper.find('#lbFavorites').text()).toEqual(lbFavorites)
  })
  it('El componente muestra el mensaje de lista vacia', () => {
    const wrapper = factory(mockStoreEmpty)
    expect(wrapper.findComponent({ name: 'no-result-card' }).exists()).toBe(true)
  })
  it('El componente muestra la lista', () => {
    const wrapper = factory(mockStoreData)
    expect(wrapper.findComponent({ name: 'character-card' }).exists()).toBe(true)
  })
})
