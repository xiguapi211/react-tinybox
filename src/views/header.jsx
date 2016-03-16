'use strict';

import React, { Component } from 'react';

import AppBar from 'material-ui/lib/app-bar';

export default class Header extends Component {
    constructor (props, context) {
        super(props, context);
        this.state = {
            name: this.props.name
        }    
    };
    
    render () {
        let name = this.state.name;
        return (
            <AppBar title="Title"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
        );
    };
}
