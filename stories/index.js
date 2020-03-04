import React, { Component } from 'react'
import Checkbox from './Form/Checkbox/Checkbox'
import CreditCard from './Form/CreditCard/CreditCard'
import Email from './Form/Email/Email'
import File from './Form/File/File'
import Hidden from './Form/Hidden/Hidden'
import Number from './Form/Number/Number'
import Phone from './Form/Phone/Phone'
import Radio from './Form/Radio/Radio'
import Text from './Form/Text/Text'
import Textarea from './Form/Textarea/Textarea'
import { action, storiesOf, linkTo } from '@kadira/storybook'
import { withKnobs, text, boolean, number } from '@kadira/storybook-addon-knobs'

const stories = storiesOf('IWS Form Component', module)
stories.addDecorator(withKnobs);

class Form extends Component {

  static defaultProps = { value: '' }

  constructor(props) {
    super(props)
    this.state = { error: false }
  }

  handleOnChange = ({ error, value }) => {
    this.setState({ error, value })
    action(`\nstate: ${ JSON.stringify({ error, value }, null, 2) }\nJSON`)({ error, value })
  }

  render() {

    const { children } = this.props

    return React.cloneElement(children, {
      error: this.state.error,
      onChange: this.handleOnChange,
      value: this.state.value || children.props.value
    })
  }
}

stories.addWithInfo('<Checkbox />',() => (
  <Form>
    <Checkbox
      className={ text('className', 'checkbox') }
      id={ text('id', 'checkbox') }
      label={ boolean('label', true) } />
  </Form>
), { propTables: [ CreditCard ], inline: true })

stories.addWithInfo('<CreditCard />',() => (
  <Form>
    <CreditCard
      className={ text('className', 'credit-card') }
      id={ text('id', 'credit-card') }
      label={ boolean('label', true) }
      placeholder={ boolean('placeholder', true) }
      required={ boolean('required', true) } />
  </Form>
), { propTables: [ CreditCard ], inline: true })

stories.addWithInfo('<Email />', () => (
  <Form>
    <Email
      className={ text('className', 'email') }
      id={ text('id', 'email') }
      label={ boolean('label', true) }
      placeholder={ boolean('placeholder', true) }
      required={ boolean('required', true) } />
  </Form>
), { propTables: [ Email ], inline: true })

stories.addWithInfo('<File />', () => (
  <Form>
    <File
      className={ text('className', 'file') }
      id={ text('id', 'file') }
      label={ boolean('label', true) }
      placeholder={ boolean('placeholder', true) }
      required={ boolean('required', true) } />
  </Form>
), { propTables: [ File ], inline: true })

stories.addWithInfo('<Hidden />', () => (
  <Form>
    <Hidden
      id="hidden"
      value="hidden" />
  </Form>
), { propTables: [ Hidden ], inline: true })

stories.addWithInfo('<Number />', () => (
  <Form>
    <Number
      className={ text('className', 'number') }
      id={ text('id', 'number') }
      label={ boolean('label', true) }
      placeholder={ boolean('placeholder', true) }
      required={ boolean('required', true) } />
  </Form>
), { propTables: [ Number ], inline: true })

stories.addWithInfo('<Phone />', () => (
  <Form>
    <Phone
      className={ text('className', 'phone') }
      id={ text('id', 'phone') }
      label={ boolean('label', true) }
      mask={ text('mask', '(999) 999-9999') }
      onChange={() => {}}
      placeholder={ text('placeholder', '(___) ___-____') }
      required={ boolean('required', true) } />
  </Form>
), { propTables: [ Phone ], inline: true })

stories.addWithInfo('<Radio />', () => (
  <Form>
    <Radio
      className={ text('className', 'radio') }
      id={ text('id', 'radio') }
      label={ boolean('label', true) }
      options={ [{
        label: 'One',
        value: 'one'
      },{
        label: 'Two',
        value: 'two'
      },{
        label: 'Three',
        value: 'three'
      }] } />
  </Form>
), { propTables: [ Phone ], inline: true })






const TextStories = storiesOf('<Text />', module)
TextStories.addDecorator(withKnobs);

TextStories.addWithInfo('Basic Usage', () => (
  <Form>
    <Text id={ text('id', 'text') } />
  </Form>
), { propTables: [ Text ], inline: true })

TextStories.addWithInfo('Explicit Label', () => (
  <Form>
    <Text
      id={ text('id', 'text') }
      label={ text('label', 'My Text') } />
  </Form>
), { propTables: [ Text ], inline: true })

TextStories.addWithInfo('No Label', () => (
  <Form>
    <Text
      id={ text('id', 'text') }
      label={ boolean('label', false) } />
  </Form>
), { propTables: [ Text ], inline: true })

TextStories.addWithInfo('With Placeholder', () => (
  <Form>
    <Text
      id={ text('id', 'text') }
      label={ boolean('label', false) }
      placeholder={ boolean('placeholder', true) } />
  </Form>
), { propTables: [ Text ], inline: true })

TextStories.addWithInfo('With Explicit Placeholder', () => (
  <Form>
    <Text
      id={ text('id', 'text') }
      label={ boolean('label', false) }
      placeholder={ text('placeholder', 'My Placeholder') } />
  </Form>
), { propTables: [ Text ], inline: true })








stories.addWithInfo('<Textarea />', () => (
  <Form>
    <Textarea
      className={ text('className', 'textarea') }
      id={ text('id', 'textarea') }
      label={ boolean('label', true) }
      placeholder={ boolean('placeholder', true) }
      required={ boolean('required', true) } />
  </Form>
), { propTables: [ Textarea ], inline: true })
