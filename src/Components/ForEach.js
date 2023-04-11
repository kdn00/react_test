import React, { Component } from "react";

class ForEach extends Component {

    componentDidMount() {
        let For_Arr = [3, 2, 8, 8];
        let For_newArr = [];

        for(let i = 0; i< For_Arr.length; i++){
            For_newArr.push(For_Arr[i]);
        }
        console.log(`1. For_newArr : [${For_newArr}]`);

        let ForEach_Arr = [3, 3, 9, 8];
        let ForEach_newArr = [];
        ForEach_Arr.forEach((result) => {
            ForEach_newArr.push(result);
        })
        console.log(`2. ForEach_newArr : [${ForEach_newArr}]`);
    }

    render(){
        return(
            <h2>[ forEach() 함수 예제입니다. ]</h2>
        )
    }

}

export default ForEach; 