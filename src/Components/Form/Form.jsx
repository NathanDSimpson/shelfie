import React, { Component } from 'react';

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
                    <button>Add To Inventory</button>
                </div>
            </form>
        )
    }
}