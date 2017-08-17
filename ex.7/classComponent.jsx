import React, { Component } from 'react'

export default class ClassCoponent extends Component {
    render() {
        return (
            <h1>{this.props.value}</h1>
        )
    }
}