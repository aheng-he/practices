import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Input extends Component {
    constructor(props) {
        super(props)

        this.state = {
            focus: false,
            innerValue: ''
        }
    }
    static propTypes = {
        value: PropTypes.string,
        onChange: PropTypes.func,
    }

    static defaultProps = {
        onChange: () => { }
    }

    get value() {
        if (this.isControl) {
            return this.props.value
        } else {
            return this.state.innerValue
        }
    }
    get isControl() {
        return 'value' in this.props
    }

    componentDidMount() {
        this.setState({
            innerValue: this.props.defaultValue
        })
    }

    render() {
        const { value } = this.state
        return (
            <div>
                <input type="text" value={value} onChange={(e) => {
                    if (!this.isControl) {
                        this.setState({
                            innerValue: e.target.value
                        })
                    }
                    this.props.onChange(e)
                }} />
            </div>
        )
    }
}

export default Input