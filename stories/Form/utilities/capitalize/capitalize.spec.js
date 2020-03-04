import capitalize from './capitalize'

describe('capitalize()', () => {

  test('Passing in any valid string should capitalize only the first letter of each word.', () => {
    expect(capitalize('this is a test string.')).toEqual('This Is A Test String.')
    expect(capitalize('this-is-a-test-string.')).toEqual('This-Is-A-Test-String.')
    expect(capitalize('This is a test 5tring.')).toEqual('This Is A Test 5tring.')
  })

  test('Passing in anything but a valid string should log the following: "[ function capitalize(str: string) : string ]: You passed in a(n) ${ typeof str }. Please pass in a valid string."', () => {

    console.error = jest.fn()

    capitalize(/(.)*/)
    capitalize([])
    capitalize({})
    capitalize(new Date())
    capitalize(() => {})
    capitalize(-1.1)
    capitalize(-1)
    capitalize(0)
    capitalize(1)
    capitalize(1.1)
    capitalize('')
    capitalize(false)
    capitalize(null)
    capitalize(undefined)
    capitalize()

    const { calls } = console.error.mock

    calls.forEach(([ error ]) => expect(error).toMatch(/Please pass in a valid string./))
  })
})
