import React, { Component } from "react";

class ArrowFunction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrowFuc: "React200",
      num: 3,
    };
  }

  componentDidMount(){
    Function1(1);
    this.Function2(1,1);
    this.Function3();
    this.Function4();
    this.Function5(0, 2, 3);

    function Function1(num1){
        return console.log(num1+ '. Es5 함수');
    }
}

    Function2 = (num1, num2) => {
        let num3 = num1 + num2;
        console.log(num3+'. 화살표 함수 : '+this.state.arrowFuc);
    }

    Function3() {
        var this_bind = this;
        setTimeout(function() {
            console.log(this_bind.state.num+'. Es5 콜백 함수 noBind : ');
            // 콜백함수 내부에서 this는 window 객체이기 때문에 this로 state 변수에 접근하면 underfinde에러가 발생한다.
            // console.log(this.state.arrowFuc);
            console.log(this_bind.state.arrowFuc);
        }, 100);
    }

    Function4() {
        setTimeout(function(){
            console.log('4. Es5 콜백함수 Bind : ' + this.state.arrowFuc);
        }.bind(this), 100);
    }

    Function5 = (num1, num2, num3) => {
        const num4 = num1 + num2 + num3;
        setTimeout(() => {
            console.log(num4+'. 화살표 콜백 함수 : ' + this.state.arrowFuc);
        }, 100);
    }
  
  render(){
    return(
        <h2>[ 화살표 함수 예제입니다. ]</h2>
    )
  }
}

export default ArrowFunction; 