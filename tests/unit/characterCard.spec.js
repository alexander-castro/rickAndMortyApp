import { shallowMount } from '@vue/test-utils'
import CharacterCard from '@/components/CharacterCard.vue'
import { store } from '@/store/store'

const character = {
  "id": 2,
  "name": "Morty Smith",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Male",
  "origin": {
    "name": "Earth",
    "url": "https://rickandmortyapi.com/api/location/1"
  },
  "location": {
    "name": "Earth",
    "url": "https://rickandmortyapi.com/api/location/20"
  },
  "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  "episode": [
    "https://rickandmortyapi.com/api/episode/1",
    "https://rickandmortyapi.com/api/episode/2",
  ],
  "url": "https://rickandmortyapi.com/api/character/2",
  "created": "2017-11-04T18:50:21.651Z"
}

const factory = (values = {}) => {
  const wrapper = shallowMount(CharacterCard, {
    global: {
      plugins: [store]
    }
  })
  wrapper.setProps(values)
  return wrapper
}

describe('CharacterCard.vue', () => {
  it('El componente tiene las etiquetas asigandas', () => {
    const lbLocation = 'Last known location:'
    const lbLastSeen = 'First seen in:'
    const wrapper = factory(character)
    expect(wrapper.find('#locationLb').text()).toEqual(lbLocation)
    expect(wrapper.find('#lastSeenLb').text()).toEqual(lbLastSeen)
  })
  it('El componente tiene las propiedades asigandas', () => {
    const wrapper = factory(character)
    expect(wrapper.find('#status').text()).toEqual(status)
    expect(wrapper.find('#type').text()).toEqual(type)
    expect(wrapper.find('#name').text()).toEqual(name)
    expect(wrapper.find('#location').text()).toEqual(location)
    expect(wrapper.find('#lastSeen').text()).toEqual(lastSeen)
  })
})
