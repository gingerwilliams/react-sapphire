import React, { Component } from "react";
import classNames from 'classnames';

class Button extends Component {
    
    render() {
        const classes = classNames(
            className
        );
        
        return (
            <button className="button button_box button__center button_themeZ">
                <span className="button_text button_theme__text">Button Base</span>
            </button>
        );
    }
}
export default Button;
