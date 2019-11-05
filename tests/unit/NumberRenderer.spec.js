import { shallowMount } from '@vue/test-utils'
import NumberRenderer from '@/components/NumberRenderer'

describe('NumberRenderer', () => {
  it('renders even numbers', () => {
    const wrapper = shallowMount(NumberRenderer, {
      propsData: {
        even: true
      }
    })

    expect(wrapper.text()).toBe('2, 4, 6, 8')
  })

  // The test result is different from the tutorial
  // https://lmiller1990.github.io/vue-testing-handbook/computed-properties.html#testing-with-call
  it('renders odd numbers', () => {
    const localThis = { even: false }

    expect(NumberRenderer.computed.numbers.call(localThis)).toBe('1, 3, 5, 7, 9')
    // expect(NumberRenderer.computed.numbers()).toBe('1, 3, 5, 7, 9')
  })
})
