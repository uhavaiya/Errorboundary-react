import React, { Component } from 'react'

export default class ErrorBund extends Component {
    constructor() {
        super()

        this.state = {
            error: null
        }
    }
    static getDerivedStateFromError() {
        return { error: true };
    }

    render() {
        return (
            <div>
                {
                    this.state.error ? <h1>Custom Page for error</h1> : this.props.children
                }
            </div>
        )
    }
}
