import capitalize from './../capitalize/capitalize'

const titleize = str => typeof str === 'string'
  ? capitalize(str.replace(/[\W\_]/g, ' ').trim())
  : console.error(`[ function titleize(str: string) : string ]: You passed in a(n) ${ typeof str }. Please pass in a valid string.`)

export default titleize
