import { mount } from '@vue/test-utils'

import MyComponent from './MyComponent.vue'

test('test', () => {
  const b: number = 2

  expect(2 + b).toEqual(4)
})

test('component test', () => {
  const wrapper = mount(MyComponent)

  expect(wrapper.text()).toContain('this is a test component')
})
