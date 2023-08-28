import React, { Component } from 'react'

export default class ItemLayout extends Component {
    render() {
        return (
            <div className='col-md-4 p-0'>
                <div className="item">
                    <div className="icon"><i className="fa-solid fa-download" /></div>
                    <h5>Fresh new layout</h5>
                    <p>With Bootstrap 5, we've created a fresh new layout for this template!</p>
                </div>
            </div>
        )
    }
}
