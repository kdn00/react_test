import React, {Component} from 'react';

class ClassPrototype extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount() {
        // ES5 prototype : ES5에서는 객체를 prototype으로 선언한다.
        let ExamCountFunc = (function () {

            // 생성자 함수를 실행하는데, 파라미터로 전달받은 num 변수의 값(200)을 객체 변수 number에 저장한다.
            function ExamCount(num) {
                this.number = num;
            }
            ExamCount.prototype.showNum = function() {
                console.log('1. react_' + this.number);
            };
            return ExamCount;
        }());

        // ExamCountFunc() 함수(객체)를 실행한 후, return이 되는 결과값을 cnt 변수에 저장한다.
        let cnt = new ExamCountFunc('200');

        // 객체 안에 선언된 showNum() 함수를 실행한다.
        cnt.showNum();

        // ES6 class : ES6에서는 객체를 class로 선언한다.
        class ExamCountClass {
            // constructor()라는 생성자 함수가 실행되고 파라미터로 전달받은 num2라는 변숫값(2hundred)을 객체 변수 number2에 저장한다.
            constructor(num2){
                this.number2 = num2;
            }
            showNum(){
                console.log(`2. react_${this.number2}`);
            }
        }

        let cnt2 = new ExamCountClass('2hundred');
        cnt2.showNum();
    }

    render() {
        return(
            <h2>[ THIS IS Class ]</h2>
        )
    }
}

export default ClassPrototype;