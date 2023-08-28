import React, { Component } from 'react'
import BannerLayout from './BannerLayout'
import ItemLayout from './ItemLayout'

export default class BodyLayout extends Component {
    render() {
        return (
            <div className='Web__body'>
                <BannerLayout />
                <div id='Item__content'>
                    <div className='container'>
                        <div className='row'>
                            <ItemLayout />
                            <ItemLayout />
                            <ItemLayout />
                            <ItemLayout />
                            <ItemLayout />
                            <ItemLayout />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
