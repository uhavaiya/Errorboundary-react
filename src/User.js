import React, { Component } from 'react'

export default class User extends Component {
    render() {
        if(true){
            throw new Error("Something Want's to wrong")
        }
        return (
            <div>
                <h1>User Component</h1>
            </div>
        )
    }
}
