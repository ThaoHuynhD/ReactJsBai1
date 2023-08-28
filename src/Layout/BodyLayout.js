import React, { Component } from 'react'
import BannerLayout from './BannerLayout'
import RenderWithMap from '../RenderWithMap/RenderWithMap'

export default class BodyLayout extends Component {
    render() {
        return (
            <div className='Web__body'>
                <BannerLayout />
                <div id='Item__content'>
                    <div className='container'>
                        <RenderWithMap />
                    </div>
                </div>
            </div>
        )
    }
}
