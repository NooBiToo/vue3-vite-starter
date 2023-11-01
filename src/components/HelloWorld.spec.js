import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import HelloWorld from './HelloWorld.vue'
import { useCounterStore } from '@/store/modules/counter'

beforeEach(() => {
  setActivePinia(createPinia())
  useCounterStore()
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
