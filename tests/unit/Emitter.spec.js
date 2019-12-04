import Emitter from '@/components/Emitter'
import { shallowMount } from '@vue/test-utils'

describe('Emitter', () => {
  it('emits an event with two arguments', () => {
    const wrapper = shallowMount(Emitter)

    wrapper.vm.emitEvent()

    console.log(wrapper.emitted)
  })
})
