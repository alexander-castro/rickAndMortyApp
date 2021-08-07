import { shallowMount } from '@vue/test-utils'
import CharacterCard from '@/components/CharacterCard.vue'

const factory = (values = {}) => {
  const wrapper = shallowMount(CharacterCard)
  wrapper.setProps(values)
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
    const status = 'Alive'
    const type = 'Human'
    const name = 'Morty Smith'
    const location = 'Story Train'
    const lastSeen = 'Never Ricking Morty'
    const wrapper = factory({name: name})
    expect(wrapper.find('#status').text()).toEqual(status)
    expect(wrapper.find('#type').text()).toEqual(type)
    expect(wrapper.find('#name').text()).toEqual(name)
    expect(wrapper.find('#location').text()).toEqual(location)
    expect(wrapper.find('#lastSeen').text()).toEqual(lastSeen)
  })
})
