import React from 'react'
import Text from './Text'
import { shallow } from 'enzyme'

describe('<Text />', () => {

  describe('General Rendering', () => {

    test('Should provide the following warning: "Warning: Failed prop type: Required prop `id` was not specified in `Text`"', () => {
      console.error = jest.fn()
      shallow(<Text />)
      const [[ error ]] = console.error.mock.calls
      expect(error).toMatch(/Warning: Failed prop type: Required prop `id` was not specified in `Text`/)
    })

    test('Should render successfully.', () => { shallow(<Text id="text" />) })
  })

  describe('className Tests', () => {

    const text = shallow(<Text id="text" />)

    test('Should have the "field" className.', () => expect(text.hasClass('field')).toBe(true))

    test('Should have the "field--text" className.', () => expect(text.hasClass('field--text')).toBe(true))

    test('Should have the "field--has-label" className.', () => {
      text.setProps({ label: true })
      expect(text.hasClass('field--has-label')).toBe(true)
    })

    test('Should\'t have the "field--has-label" className.', () => {
      text.setProps({ label: false })
      expect(text.hasClass('field--has-label')).toBe(false)
    })

    test('Should have the "field--has-placeholder" className.', () => {
      text.setProps({ placeholder: true })
      expect(text.hasClass('field--has-placeholder')).toBe(true)
    })

    test('Shouldn\'t have the "field--has-placeholder" className.', () => {
      text.setProps({ placeholder: false })
      expect(text.hasClass('field--has-placeholder')).toBe(false)
    })

    test('Should have the "field--has-validation" className.', () => {
      text.setProps({ validate: () => false })
      expect(text.hasClass('field--has-validation')).toBe(true)
    })

    test('Shouldn\'t have the "field--has-validation" className.', () => {
      text.setProps({ validate: undefined })
      expect(text.hasClass('field--has-validation')).toBe(false)
    })

    test('Should have the "field--has-validation" className.', () => {
      text.setProps({ validate: /(.)*/ })
      expect(text.hasClass('field--has-validation')).toBe(true)
    })

    test('Should have the "field--has-error" className.', () => {
      text.setProps({ error: true })
      expect(text.hasClass('field--has-error')).toBe(true)
    })

    test('Shouldn\'t have the "field--has-error" className.', () => {
      text.setProps({ error: false })
      expect(text.hasClass('field--has-error')).toBe(false)
    })

    test('Should have the "field--is-required" className.', () => {
      text.setProps({ required: true })
      expect(text.hasClass('field--is-required')).toBe(true)
    })

    test('Shouldn\'t have the "field--is-required" className.', () => {
      text.setProps({ required: false })
      expect(text.hasClass('field--is-required')).toBe(false)
    })

    test('Should have the "test-class" className.', () => {
      text.setProps({ className: 'test-class' })
      expect(text.hasClass('test-class')).toBe(true)
    })

    test('Shouldn\'t have the "test-class" className.', () => {
      text.setProps({ className: '' })
      expect(text.hasClass('test-class')).toBe(false)
    })
  })
})
