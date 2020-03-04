import handleOnChange from './handleOnChange'

describe('handleOnChange()', () => {

  test('Should pass the correct value to the onChange handler for strings.', () => {
    const str = 'This is a test.'
    const event = { target: { value: str } }
    const onChange = ({ value }) => expect(value).toBe(str)
    handleOnChange({ onChange })(event)
  })

  test('Error should be false when a valid string is passed.', () => {
    const str = 'This is a test.'
    const event = { target: { value: str } }
    const onChange = ({ error }) => expect(error).toBe(false)
    handleOnChange({ onChange })(event)
  })

  test('Error should be false when a valid string is passed and required is true.', () => {
    const str = 'This is a test.'
    const required = true
    const event = { target: { value: str } }
    const onChange = ({ error }) => expect(error).toBe(false)
    handleOnChange({ onChange, required })(event)
  })

  test('Error should be false when an empty string is passed.', () => {
    const str = ''
    const event = { target: { value: str } }
    const onChange = ({ error }) => expect(error).toBe(false)
    handleOnChange({ onChange })(event)
  })

  test('Error should be true when an empty string is passed and required is true.', () => {
    const str = ''
    const required = true
    const event = { target: { value: str } }
    const onChange = ({ error }) => expect(error).toBe(true)
    handleOnChange({ onChange, required })(event)
  })

  test('Should pass the correct value to the onChange handler for checkbox inputs.', () => {
    const checked = true
    const event = { target: { type: 'checkbox', checked } }
    const onChange = ({ value }) => expect(value).toBe(checked)
    handleOnChange({ onChange })(event)
  })

  test('Should pass the correct value to the onChange handler for file inputs.', () => {
    const files = [{ name: 'test-file.pdf' }]
    const event = { target: { type: 'file', files } }
    const onChange = ({ value }) => expect(value).toBe(files[0])
    handleOnChange({ onChange })(event)
  })

  test('Error should be false when a valid file is passed and required is true.', () => {
    const files = [{ name: 'test-file.pdf' }]
    const event = { target: { type: 'file', files } }
    const onChange = ({ error }) => expect(error).toBe(false)
    handleOnChange({ onChange })(event)
  })

  test('Error should be false when a valid file is passed and required is true.', () => {
    const files = [{ name: 'test-file.pdf' }]
    const required = true
    const event = { target: { type: 'file', files } }
    const onChange = ({ error }) => expect(error).toBe(false)
    handleOnChange({ onChange, required })(event)
  })

  test('Error should be false when a file is not passed.', () => {
    const files = []
    const event = { target: { type: 'file', files } }
    const onChange = ({ error }) => expect(error).toBe(false)
    handleOnChange({ onChange })(event)
  })

  test('Error should be true when a file is not passed and required is true.', () => {
    const files = []
    const required = true
    const event = { target: { type: 'file', files } }
    const onChange = ({ error }) => expect(error).toBe(true)
    handleOnChange({ onChange, required })(event)
  })
})
