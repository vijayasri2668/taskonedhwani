import React from "react";

class InputFild extends React.Component {
    render() {
        return (
        <input
            type="tel"
            name={this.props.name}
            maxLength={this.props.length}
            onChange={this.props.handleChange}
            onPaste={this.props.copiedData}
            value={this.props.value}
            size={5}
            id='need'
        ></input>
        );
    }
    }

export default InputFild;