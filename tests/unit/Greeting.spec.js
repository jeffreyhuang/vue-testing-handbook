import Vue from 'vue'
import { mount, shallowMount } from '@vue/test-utils'
import Greeting from '@/components/Greeting'

const Child = Vue.component('Child', {
  name: 'Child',
  template: '<div>Child component</div>'
})

const Parent = Vue.component('Parent', {
  name: 'Parent',
  template: '<div><Child /></div>'
})

describe('Greeting.vue', () => {
  it('renders a greeting', () => {
    // const mountWrapper = mount(Parent)
    // console.log(mountWrapper.html())

    const shallowWrapper = shallowMount(Parent)
    console.log(shallowWrapper.html())

    // console.log(wrapper.html())
    // expect(wrapper.text()).toMatch('Vue without TDD')
  })
})
