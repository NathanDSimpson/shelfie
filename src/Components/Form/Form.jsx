import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {
    state = {
        name: '',
        price: 0,
        imgUrl: ''
    }

    handleChange = event => {   // might need multiple of these - one for each input field
        let {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    postProduct = () => {   //post to the database, not the front end
        axios.post('/api/product', {
            name: this.state.name,
            price: this.state.price,
            imgUrl: this.state.imgUrl
        })
        .then(() => {
            this.props.getInventory()
        }).catch( err => console.log('We have a problem in our componentDidMount: ',err))

    }

    clearInputs = (event) => {   // clears the input fields and resets state
        document.getElementById("logger").reset();
        // this.setState({
        //     name: '',
        //     price: 0,
        //     imgUrl: ''
        // })

    }



    render(){
        return(
            <form id='logger'>
                <img src="" alt=""/>
                <header>Image URL:</header>
                <input type="text" onChange={this.handleChange} name='imgUrl' placeholder='ex: http://wwww.thisiswheremyphotoislocatedontheinternet.com'/>
                <header>Product Name:</header>
                <input type="text" onChange={this.handleChange} name='name' placeholder='ex: Shoes'/>
                <header>Price:</header>
                <input type="text" onChange={this.handleChange} name='price' placeholder='ex: 29 (do not include decimal or dollar signs)'/>
                <div>
                    <button onClick={this.clearInputs} >Cancel</button>
                    <button onClick={this.postProduct} >Add To Inventory</button>
                </div>
            </form>
        )
    }
}