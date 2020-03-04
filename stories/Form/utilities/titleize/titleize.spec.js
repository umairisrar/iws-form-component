import titleize from './titleize'

describe('titleize()', () => {

  test('Any valid string should be titleized ( All punctuation removed and each word capitalized ).', () => {
    expect(titleize('this is a test string.')).toEqual('This Is A Test String')
    expect(titleize('this-is-a-test-string.')).toEqual('This Is A Test String')
    expect(titleize('This%is%a%test%5tring.')).toEqual('This Is A Test 5tring')
  })

  test('Passing in anything but a valid string should log the following: "[ function titleize(str: string) : string ]: You passed in a(n) ${ typeof str }. Please pass in a valid string."', () => {

    console.error = jest.fn()

    titleize(/(.)*/)
    titleize([])
    titleize({})
    titleize(new Date())
    titleize(() => {})
    titleize(-1.1)
    titleize(-1)
    titleize(0)
    titleize(1)
    titleize(1.1)
    titleize('')
    titleize(false)
    titleize(null)
    titleize(undefined)
    titleize()

    const { calls } = console.error.mock

    calls.forEach(([ error ]) => expect(error).toMatch(/Please pass in a valid string./))
  })
})
