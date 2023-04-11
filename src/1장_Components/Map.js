import React, { Component } from "react";

class Map extends Component {

    componentDidMount() {
        let Map_Arr = [3, 2, 8, 8];
        let Map_newArr = Map_Arr.map(x => x);
        console.log(`1. Map_newArr : [${Map_newArr}]`);

        let Map_mulitiArr = Map_Arr.map(x => x*2);
        console.log(`2. Map_mulitiArr : [${Map_mulitiArr}]`);

        let ObjArray = [{key:'react', value: '200'}, {key:'리액트', value: 'TwoHundred'}];
        
        // 배열 안의 객체를 순서대로 가져와 콜백 함수를 실행하는데, 가져온 값을 obj라는 변수에 저장한다.
        let Map_objArr = ObjArray.map((obj, index) => {
            console.log(`Map_objArr[${index}]. obj : ${JSON.stringify(obj)}`);

            // 새로운 객체를 선언한다.
            let Obj = {};
            // 기존 객체의 key, value 값을 새로운 객체의 key, value값으로 저장한다.
            Obj[obj.key] = obj.value;
            // 모든 반복이 끝나면 Map_objArr 변수에 반환 값들을 저장한다.
            return Obj;
        });
        console.log(`5. Map_objArr : ${JSON.stringify(Map_objArr)}`);

    }

    render(){
        return(
            <h2>[ Map() 함수 ]</h2>
        )
    }

}

export default Map; 