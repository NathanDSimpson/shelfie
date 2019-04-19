import React, { Component } from 'react';
import Product from '../Product/Product'


export default class Dashboard extends Component {

    render(){
        return(
            <div>
                {this.props.products.map(p => {
                    return <Product 
                            key={p.id} 
                            name={p.name} 
                            price={p.price} 
                            imgUrl={p.image}
                            />
                    })
                }
            </div>
        )
    }
}