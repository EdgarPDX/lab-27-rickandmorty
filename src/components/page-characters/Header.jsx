import React, { Component } from 'react'
import {
    Link,
} from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <>
            <h1>Dimension C-137</h1>
            <Link to = '/'>
                <span>Home</span>
            </Link>
            </>
        )
    }
}
