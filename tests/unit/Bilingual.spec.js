import { shallowMount } from '@vue/test-utils'
import VueTestUtils from '@vue/test-utils'
import Bilingual from '@/components/Bilingual'
import translations from '@/translations.js'

const locale = 'ja'

VueTestUtils.config.mocks['$t'] = msg => translations[locale][msg]

describe('Bilingual', () => {
  it('renders successfully', () => {
    const wrapper = shallowMount(Bilingual)

    console.log(wrapper.html())

    expect(wrapper.find('.hello').text()).toBe('こんにちは、世界！')
  })
})
