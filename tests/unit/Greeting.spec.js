import { mount } from '@vue/test-utils'
import Greeting from '@/components/Greeting'

describe('Greeting', () => {
  it('renders a greeting', () => {
    const wrapper = mount(Greeting)

    expect(wrapper.text()).toMatch('Vue and TDD')
  })
})
