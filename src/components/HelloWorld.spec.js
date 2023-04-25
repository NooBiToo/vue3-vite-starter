import { mount } from '@vue/test-utils'
import { expect, it, describe, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useCounterStore } from '@/store/modules/counter'
import HelloWorld from './HelloWorld.vue'

beforeEach(() => {
  setActivePinia(createPinia())
  useCounterStore();
})

describe('HelloWorld', () => {
  it('renders a message', () => {
    const msg = 'Hello World'
    const wrapper = mount(HelloWorld, {
      props: { msg },
    })
    expect(wrapper.text()).toContain(msg)
  })
})