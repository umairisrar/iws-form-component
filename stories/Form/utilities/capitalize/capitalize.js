const capitalize = str => typeof str === 'string'
  ? str.replace(/\b\w/g, char => char.toUpperCase())
  : console.error(`[ function capitalize(str: string) : string ]: You passed in a(n) ${ typeof str }. Please pass in a valid string.`)

export default capitalize
