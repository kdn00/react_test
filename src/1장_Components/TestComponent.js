import React, { Component } from "react";

class TestComponent extends Component{
    // getDerivedStateFormProps(props, state) 함수는 constructor() 함수 다음으로 실행된다.
    static getDerivedStateFromProps(props, state){
        console.log('2. getDerivedStateFromProps Call : '+ props.prop_value);
        return {tmp_state:props.prop_value};
    }

    // constructor(props) 함수는 생명주기 함수 중 가장 먼저 실행되며, 처음 한 번만 호출된다.
    constructor(props){
        super(props);
        this.state = {};
        console.log('1. constructor Call');
    }

    // 생성 단계의 함수들 중 가장 마지막으로 실행된다.
    // 화면이 모두 그려진 후에 실행돼야하는 이벤트 처리, 초기화 등에 가장 많이 활용된다.
    componentDidMount() {
        console.log('4. componentDidMount Call');
        console.log('5. tmp_state : ' + this.state.tmp_state);
        // state 변경이 발생했기 때문에 변경 단계의 생명주기 함수 shouldComponentUpdate()가 실행된다.
        this.setState({tmp_state2:true});
    }

    shouldComponentUpdate(props, state){
        // boolean 유형의 데이터를 반환하는데, return 값이 true일 경우에 render() 함수를 한 번 더 호출한다.
        console.log('6. shouldComponentUpdate Call / tmp_state2 = ' + state.tmp_state2);
        return state.tmp_state2
    }

    render(){
        console.log('3. render Call');
        return(
            <h2>[ THIS IS IMPORTED COMPONENT ]</h2>
        )
    }
}

export default TestComponent;