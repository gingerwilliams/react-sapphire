import React, { Component } from "react";
import classNames from 'classnames';

class Button extends Component {
    constructor(props) {
        super(props);
        
      }
    
    render() {
        // const classes = classNames(
        //     className
        // );
        
        return (
            // <button className="button button_box button__center button_theme">
            <button className={this.props.classname}>
                <span className="button_text button_theme__text">{this.props.children}</span>
            </button>  
        );
    }
}
export default Button;
