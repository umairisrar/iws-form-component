/******************************************************************************\
 DEPENDENCIES
\******************************************************************************/

import formatFieldClass from './../utilities/formatFieldClass.js';
import Label from './../Label/Label.js';

/******************************************************************************\
 CONFIG: COMPONENT DECLARATION, PROPTYPES, DEFAULT PROPS, & COMPONENT STATE
\******************************************************************************/

class Checkbox extends React.Component {

  static propTypes = {
    className: React.PropTypes.string,
    id: React.PropTypes.string.isRequired,
    label: React.PropTypes.oneOfType([
      React.PropTypes.bool,
      React.PropTypes.string
    ]),
    onChange: React.PropTypes.func,
    value: React.PropTypes.oneOf([ true, false ]),
    validate: React.PropTypes.bool
  };

  static defaultProps = {
    className: '',
    label: true,
    onChange: () => {},
    value: false,
    error: false,
    validate: true
  };

  state = { value: this.props.value };


/******************************************************************************\
 LIFECYCLE METHODS
\******************************************************************************/

  componentWillReceiveProps({ disabled }) { this.setState({ disabled }); }

/******************************************************************************\
 EVENT HANDLERS
\******************************************************************************/

  handleOnChange = () => this.setState(({ value }) => ({ value: !value }))

/******************************************************************************\
 COMPONENT METHODS
\******************************************************************************/

  clear() {
    const { value } = this.props;
    this.setState({ value });
  }

  validate(value) {
    if(this.props.validate) {
      this.setState({error: !value});
      return !value; // Returns true/fase
    } else {
      return false;
    }
  }

/******************************************************************************\
 COMPONENT VIEW
\******************************************************************************/

  render() {

    const { className, disabled, id, label } = this.props;
    const { value, error } = this.state;

    return (
      <div className={ formatFieldClass(className, false, error, 'checkbox') }>
        <div className="form__field-inner">
          <Label
            id={ id }
            label={ label }
            onChange={ this.handleOnChange }
            placeholder={ false }
            useFor={ false }
            value={ value } />
          <div className="form__field__input-container">
            <input
              className="form__input"
              checked={ value }
              disabled={ disabled }
              id={ id }
              onChange={ this.handleOnChange }
              type="checkbox" />
          </div>
        </div>
      </div>
    );
  }
}

/******************************************************************************\
 EXPORTS
\******************************************************************************/

export default Checkbox;
