import React, { Component } from "react";

class R003 extends Component{
    constructor(props){
        super(props);
        this.state = {};
        console.log('1. constructor Call');
    }
    
    render(){
        console.log('3. render Call');
        return(
            <h2>[ THIS IS IMPORTED COMPONENT ]</h2>
        )
    }
}

export default R003;