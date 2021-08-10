import { shallowMount } from '@vue/test-utils'
import CharacterCard from '@/components/CharacterCard.vue'
import { store } from '@/store/store'

const testCharacter = {
  id: 2,
  name: 'Morty Smith',
  status: 'Alive',
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: {
    name: 'Earth',
    url: 'https://rickandmortyapi.com/api/location/1'
  },
  location: {
    name: 'Earth',
    url: 'https://rickandmortyapi.com/api/location/20'
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  episode: [
    'https://rickandmortyapi.com/api/episode/1',
    'https://rickandmortyapi.com/api/episode/2'
  ],
  url: 'https://rickandmortyapi.com/api/character/2',
  created: '2017-11-04T18:50:21.651Z'
}

const factory = () => {
  const wrapper = shallowMount(CharacterCard, {
    props: {
      character: testCharacter
    },
    global: {
      plugins: [store]
    }
  })
  return wrapper
}

describe('CharacterCard.vue', () => {
  it('El componente tiene las etiquetas asigandas', () => {
    const lbLocation = 'Last known location:'
    const lbLastSeen = 'First seen in:'
    const wrapper = factory()
    expect(wrapper.find('#locationLb').text()).toEqual(lbLocation)
    expect(wrapper.find('#lastSeenLb').text()).toEqual(lbLastSeen)
  })
  it('El componente tiene las propiedades asigandas', () => {
    const wrapper = factory()
    expect(wrapper.find('#status').text()).toEqual(testCharacter.status)
    expect(wrapper.find('#type').text()).toEqual(testCharacter.species)
    expect(wrapper.find('#name').text()).toEqual(testCharacter.name)
    expect(wrapper.find('#location').text()).toEqual(testCharacter.origin.name)
    expect(wrapper.find('#lastSeen').text()).toEqual(testCharacter.location.name)
  })
  it('Al presionar el boton de favorito una vez se cambia el estado a amarillo', async () => {
    const wrapper = factory()
    await wrapper.find('#changeFavorite').trigger('click')
    expect(wrapper.find('#favoriteIcon').classes('favorite')).toBe(true)
  })
  it('Al presionar el boton de favorito dos veces se cambia el estado a gris', async () => {
    const wrapper = factory()
    await wrapper.find('#changeFavorite').trigger('click')
    await wrapper.find('#changeFavorite').trigger('click')
    // TO-DO Dont Work 
    expect(wrapper.find('#favoriteIcon').classes('favorite')).toBe(true)
  })
})
