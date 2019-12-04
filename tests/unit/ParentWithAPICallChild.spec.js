import { shallowMount, mount } from '@vue/test-utils'
import ParentWithAPICallChild from '@/components/ParentWithAPICallChild'
import ComponentWithAsyncCall from '@/components/ComponentWithAsyncCall'

describe('ParentWithAPICallChild', () => {
  it('renders with mount and does initialize API call', () => {
    // const wrapper = mount(ParentWithAPICallChild, {
    //   stubs: {
    //     ComponentWithAsyncCall: true
    //   }
    // })
    const wrapper = shallowMount(ParentWithAPICallChild)

    expect(wrapper.find(ComponentWithAsyncCall).exists()).toBe(true)
  })
})
