import React, { Component } from 'react';
import $ from 'jquery';

class Jquery extends Component {

    input_alert = (e) => {
        let input_val = $('#inputId').val();
        alert(input_val);
    }

    render(){
        return(
            <>
            <h2>[ Jquery 사용 코드 ]</h2>
            <input id="inputId" name="inputName" />
            <button id="buttonId" onClick={e => this.input_alert(e)}>Jquery Button</button>
            </>
        )
    }
}

export default Jquery;