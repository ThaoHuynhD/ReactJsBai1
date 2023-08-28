import React, { Component } from 'react'

export default class BannerLayout extends Component {
    render() {
        return (
            <section id="Banner" className="container">
                <div className="content">
                    <h3>A warm welcome!</h3>
                    <p>Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
                    <button type="button" className="btn btn-primary">Call to action</button>
                </div>
            </section>
        )
    }
}
