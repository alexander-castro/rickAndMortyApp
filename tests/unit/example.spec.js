import { shallowMount } from '@vue/test-utils'
import CharacterCard from '@/components/CharacterCard.vue'

const factory = (values = {}) => {
  return shallowMount(Foo, {
    data: { ...values  }
  })
}

describe('CharacterCard.vue', () => {
  it('Tiene las etiquetas correspondientes', () => {
    const lbLocation = 'Last known location:'
    const lbLastSeen = 'First seen in:'
    const wrapper = factory()
    expect(wrapper.find('.location').text()).toEqual(lbLocation)
    expect(wrapper.find('.lastSeen').text()).toEqual(lbLastSeen)
  })
})
