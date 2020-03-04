/******************************************************************************\
 DEPENDENCIES
\******************************************************************************/

import regex from './regex.js';
import Text from './../Text/Text.js';

/******************************************************************************\
 CONFIG: COMPONENT DECLARATION, PROPTYPES, DEFAULT PROPS, & COMPONENT STATE
\******************************************************************************/

class Email extends Text {

  static defaultProps = {
    errorMessage: true,
    label: true,
    onChange: () => {},
    onError: () => {},
    type: 'email',
    validate: false,
    validateInline: true,
    value: ''
  };

/******************************************************************************\
 COMPONENT METHODS
\******************************************************************************/

  handleOnChange = (e) => {
    const { value } = e.target;
    this.setState({ value }, () => {
      if(this.props.validateInline || this.state.error)
        this.validate(value);

      this.props.onChange({ value });
      this.togglePlaceholder({ type: 'blur' });
    });
  };

  validate(value) {
    const { validate } = this.props;
    let error = false;
    if (validate) {
      if (typeof validate === 'boolean') {
        error = !(value && regex.test(value));
      } else { error = validate(value); }
    }
    this.setState({ error });
    return error;
  }
}

/******************************************************************************\
 EXPORT
\******************************************************************************/

export default Email;
