import { mount } from '@vue/test-utils'
import { expect, it } from 'vitest'
import HelloWorld from './HelloWorld.vue'

it('renders a message', () => {
  const msg = 'Hello World'
  const wrapper = mount(HelloWorld, {
    props: { msg },
  })
  expect(wrapper.text()).toContain(msg)
})
