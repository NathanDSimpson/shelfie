import React, { Component } from 'react';

export default class Product extends Component {

    render(){
        return(
            <div key={this.props.key}>
                <img src={this.props.imgUrl} alt={this.props.name}/>
                <section>
                    {this.props.name}
                    ${this.props.price}
                </section>
            </div>
        )
    }
}