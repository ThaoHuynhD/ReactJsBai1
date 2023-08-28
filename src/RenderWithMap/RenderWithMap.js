import React, { Component } from 'react'
import { itemArr } from './Data';
export default class RenderWithMap extends Component {
    renderList = () => {
        return itemArr.map((item) => {
            return (
                <div className='col-md-4 p-0'>
                    <div className="item">
                        <div className="icon"><i className={item.iconClass}></i></div>
                        <h5>{item.title}</h5>
                        <p>{item.desc}</p>
                    </div>
                </div>
            )
        });
    };
    render() {
        return (
            <div className='row'>{this.renderList()}</div>
        )
    }
}
