# React란?
- 웹페이지에서 눈에 보이는 영역인 프론트엔드에 특화된 언어
- 코드 이식성과 재활용성이 높고 화면 출력 속도가 빠르다는 장점이 있다.
- 화면을 구성하는 코드를 컴포넌트 단위로 나누고 필요한 부분에 이식해 사용할 수 있다.

# Component
- 특정 코드 뭉치를 다른 부분에 이식하거나, 재사용하기 위해 사용하는 코드 블록 단위
- component를 파일 단위로 작성한 후, 필요한 위치에서 임포트해 사용할 수 있다.

# 생명주기
[TestComponent.js 파일과 함께 보기](https://github.com/kdn00/react_test/blob/main/src/1장_Components/TestComponent.js)
- component의 생성, 변경, 소멸과정을 뜻한다.

# 생명주기_생성
- `render()`, `constructor()`, `getDerivedStateFormProps()`, `componentDidMount()` 함수들은 component의 **생성** 과정에 속한다.
## render()
- return되는 html형식의 코드를 화면에 그려주는 함수
- 화면 내용이 변경돼야 할 시점에 자동으로 호출된다.

## constructor(props)
- constructor(props) 함수는 생명주기 함수 중 ``**가장 먼저 실행되며**``, 처음 한 번만 호출된다.
- component 내부에서 사용되는 변수(state)를 선언하고, 부모 객체에서 전달받은 변수(props)를 초기화할 때 사용한다.
- super() 함수는 가장 위에 호출해야 한다.

## getDerivedStateFormProps(props, state)
- getDerivedStateFormProps(props, state) 함수는 constructor() 함수 다음으로 실행된다.
- 컴포넌트가 새로운 props를 받게 됐을 때 state를 변경해준다.
- App.js에서 prop_value라는 변수를 props.prop_value로 접근해 값을 가져올 수 있다.
```javascript
// App.js
function App() {
  return (
    <>
    <div className="App">
      <h1>Start React 200!</h1>
      <p>css 적용하기</p>
      <TestComponent prop_value = 'FromApp.js' />
    </div>
    </>
  );
}
// TestComponent.js
static getDerivedStateFromProps(props, state){
    console.log('2. getDerivedStateFromProps Call : '+ props.prop_value);
    return {};
}
```

## componentDidMount()
- 생성 단계의 함수들 중 가장 마지막으로 실행된다.
- render() 함수가 return되는 html 형식의 코드를 화면에 그려준 후 실행한다.
- 화면이 모두 그려진 후에 실행돼야하는 이벤트 처리, 초기화 등에 가장 많이 활용된다.

# 생명주기_변경
- 변경이란, props나 state의 변경을 말한다.

## shouldComponentUpdate()
- shouldComponentUpdate() 함수는 component의 **변경** 과정에 속한다.
- return 값이 true일 경우에 render() 함수를 한 번 더 호출한다.
- state 변경이 발생하면 변경 단계의 생명주기 함수 shouldComponentUpdate()를 호출한다.

---

# 템플릿 문자열 사용하기
[ES6.js 파일과 함께 보기](https://github.com/kdn00/react_test/blob/main/src/1장_Components/ES6.js)
- ES(ECMA 스크립트)는 표준화된 스크립트 언어이고, ES 뒤에 붙은 숫자는 버전을 의미한다.
- 2011년부터 사용된 ES5가 웹 표준처럼 사용되고 있고, 2015년에 발행된 ES6는 많은 유용한 기능이 추가됐고 JS는 이 기술 규격을 따른다.
- react도 JS 기반의 언어이기 때문에 ES6의 모든 기능을 사용할 수 있다.
   
- 문자열과 변수를 합치기 위해서는 문자열을 작은 따옴표(또는 큰 따옴표)로 감싸고 +로 연결한다.
- 따옴표가 아닌 백틱(`)으로 전체 문자열과 변수를 묶어 사용할 수 있다. 변수는 ${변수명} 형태로 넣고, 코드상에서 줄바꿈을 하면 개행 문자 없이도 사용할 수 있다.
- startsWith(), endsWith(), includes()는 ES6에 추가된 String 함수들이다.
## startsWith()
- 변수 앞에서부터 일치하는 문자열이 있는지 찾는다.
- 함수 조건에 부합하면 true, 부합하지 않으면 false를 반환한다.

## endsWith()
- 변수 뒤에서부터 일치하는 문자열이 있는지 찾는다.
- 함수 조건에 부합하면 true, 부합하지 않으면 false를 반환한다.

## includes()
- 위치에 상관없이 변수에 특정 문자열이 포함됐는지 판단한다.
- 함수 조건에 부합하면 true, 부합하지 않으면 false를 반환한다.
```javascript
let LongString = "ES6에 추가된 String 함수들입니다.";
console.log('startsWith : ' + LongString.startsWith("ES6에 추가"));
console.log('endsWith : ' + LongString.endsWith("함수들입니다."));
console.log('includes : ' + LongString.includes("추가된 String"));
// 콘솔 로그는 아래 이미지에서 확인
```
![image](https://user-images.githubusercontent.com/89984853/231040027-13477ddc-cc26-47f7-859d-74bcdc8705cf.png)

---

# 변수
[Variable.js 파일과 함께 보기](https://github.com/kdn00/react_test/blob/main/src/1장_Components/Variable.js)
- 데이터(data)를 저장하기 위해 프로그램에 의해 이름을 할당받은 메모리 공간을 의미합니다.
- 즉, 변수란 데이터(data)를 저장할 수 있는 메모리 공간을 의미하며, 이렇게 저장된 값은 변경될 수 있습니다.

## react(JS)의 변수 종류
- ES5에서는 var, ES6에는 let, const가 추가로 있다.
### var
- 이미 선언한 var 변수를 다시 선언했을 때는 `'varName' is already defined no-redeclare`라는 경고 메시지가 콘솔 로그에 출력된다.
- 하지만 var 변수는 재선언, 재할당을 허용하기 때문에 경고 메시지가 출력돼도 페이지가 정상적으로 표시된다.

### let
- 이미 선언한 let 변수를 다시 선언했을 때는 ` Parsing error: Identifier 'letName' has already been declared. (18:12)`라는 경고 메시지가 콘솔 로그에 출력된다.
- let 변수는 재선언을 허용하지 않기 때문에 에러 페이지가 표시된다.
```javascript
let letName = 'react';
console.log('letName1 : ' + letName);
// let letName = '200'; --> 재선언 에러 발생
letName = 'react200';
console.log('letName2 : ' + letName);
```
- 재선언은 허용하지 않지만, 재할당은 허용한다.

### const
- 이미 선언한 const 변수의 constName을 다시 선언했을 때 `Parsing error: Identifier 'constName' has already been declared. (24:14)`라는 에러 메시지가 콘솔 로그에 출력된다.
- const 변수는 재할당을 허용하지 않기 때문에 새로운 값을 할당하면 `Uncaught TypeError: Assignment to constant variable.`라는 에러 코드와, 에러 페이지가 표시된다.
```javascript
const constName = 'react';
console.log('constName : ' + constName);
// const constName = '200'; --> 재선언 에러
// constName = 'react200'; --> 재할당 에러
```

---

# 전개 연산자
[SpreadOperator.js 파일과 함께 보기](https://github.com/kdn00/react_test/blob/main/src/1장_Components/SpreadOperator.js)
- 배열이나 객체 변수를 좀 더 직관적이고 편리하게 합치거나 추출할 수 있게 도와주는 문법이다.
- 변수 앞에 ...(마침표 3개)를 입력해 사용한다.

## 배열을 합칠 때 전개 연산자 사용
- 기존 ES5에서 배열 2개를 합치기 위해서는 배열 각각의 인덱스로 접근해 값을 가져오거나, concat 함수를 사용한다.   
예시 : `var sumVarArr = [].concat(varArray1, varArray2);`   

- ES6에서는 전개 연산자 ...(마침표 3개)를 배열명 앞에 붙여 여러 개의 배열을 합칠 수 있다.
```javascript
// 전개 연산자 사용법
let sumLetArr = [...varArray1, ...varArray2];
console.log('2. sumLetArr : ' + sumLetArr);
const [sum1, sum2, ...remain] = sumLetArr;
console.log('3. sum1 : ' + sum1 + ', sum2 : ' + sum2 + ', remain : ' + remain);
```

## 객체를 합칠 때 전개 연산자 사용
- 기존 ES5에서 객체 2개를 합치기 위해서는 Object.assign() 함수를 이용해야 한다. 첫번째 인자 {}는 함수의 return값이고, 뒤의 인자에 객체들을 ,(콤마)로 연결해 나열하면 여러 개의 객체를 합칠 수 있다.
```javascript
// js Object
var sumVarObj = Object.assign({}, varObj1, varObj2);
console.log('4. sumVarObj : ' + JSON.stringify(sumVarObj));
```

- ES6에서는 ...(전개 연산자)를 객체명 앞에 붙여 여러 개의 객체를 합칠 수 있다.
```javascript
// ES6 Object
var sumLetObj = { ...varObj1, ...varObj2 };
console.log('5. sumLetObj : ' + JSON.stringify(sumLetObj));

// 객체의 키와 값을 추출해 키와 동일한 명칭의 개별 변수에 넣는다. 나머지는 마지막에 전개 연산자 처리된 ...others 변수에 넣는다.
var {key1, key3, ...others} = sumLetObj;
console.log('6. key1 : ' + key1 + ', key3 : ' + key3 + ', others : ' + JSON.stringify(others));
```

### ※ JSON.stringify(value[, replacer[, space]]) 란?
[설명 참고](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
- JS의 값이나 객체를 JSON 문자열로 변환한다.
- 선택적으로, `replacer`를 함수로 전달할 경우 변환 전 값을 변형할 수 있고, 배열로 전달할 경우 지정한 속성만 결과에 포함합니다.   

- `value(필수)` : JSON문자열로 변환할 값이다.
- `replacer(선택)` : 함수 또는 배열이 될 수 있다. 이 값이 null이거나 제공되지 않으면, 객체의 모든 속성들이 JSON 문자열 결과에 포함된다.

---

# Class
[ClassPrototype.js 파일과 함께 보기](https://github.com/kdn00/react_test/blob/main/src/1장_Components/ClassPrototype.js)
- 기존 ES5 JS에서는 객체를 구현하기 위해 prototype을 사용한다.
- 객체는 상속을 통해 코드를 재사용할 수 있게 해준다.
- ES6에서 등장한 class는 prototype과 같은 개념인데, 쉽게 읽고 표현하기 위해 고안된 문법이다.

#### ※ JS에서는 함수를 객체로 사용할 수 있다.

## prototype
- `생성자 함수명.prototype.함수명` 형태로 선언해주면, 객체 외부에서 함수(cnt.showNum();)를 실행해 객체 내부에 선언된 함수로 사용할 수 있다.
- 함수가 실행되면, 생성자 함수에서 '200'으로 할당된 객체 변수 number를 사용한다.
```javascript
// ES5 prototype : ES5에서는 객체를 prototype으로 선언한다.
let ExamCountFunc = (function() {
  // 생성자 함수를 실행하는데, 파라미터로 전달받은 num 변수의 값(200)을 객체 변수 number에 저장한다.
  function ExamCount(num) {
    this.number = num;
    }

    ExamCount.prototype.showNum = function() { // 생성자 함수명.prototype.함수명 형태
      console.log('1. react_' + this.number);
      };

      return ExamCount;
  } ());
  
// ExamCountFunc() 함수(객체)를 실행한 후, return이 되는 결과값을 cnt 변수에 저장한다.
let cnt = new ExamCountFunc('200');
  // 객체 안에 선언된 showNum() 함수를 실행한다.
  cnt.showNum();
```

## class
- ES6에서는 객체를 class로 선언한다.
```javascript
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
```
- constructor()라는 생성자 함수가 실행되고 파라미터로 전달받은 num2라는 변숫값 (2hundred)을 객체 변수 number2에 저장한다.
- 객체에 접근할 때 실행할 함수(showNum)는 class의 {} 괄호(scope) 안에 간단하게 선언할 수 있다.
- 함수가 실행되면, 생성자 함수에서 '2hundred'로 할당된 객체 변수 number2를 사용한다.

---

# 함수

## 화살표 함수
[ArrowFunction.js 파일과 함께 보기](https://github.com/kdn00/react_test/blob/main/src/1장_Components/ArrowFunction.js)
- function 대신 => 문자열을 사용하며, return 문자열을 생략할 수도 있다.
- 따라서 기존 ES5 함수보다 간략하게 선언할 수 있다.
- 또 화살표 함수에서는 콜백 함수에서 this를 bind해야 하는 문제도 발생하지 않는다.
   
- 함수를 function 문자열 대신 =>로 선언
```javascript
Function2 = (num1, num2) => {
  let num3 = num1 + num2;
  console.log(num3+'. 화살표 함수 : '+this.state.arrowFuc);
}
```   
- 콜백 함수 내부에서는 컴포넌트에 this로 접근할 수 없기 때문에 접근할 수 있는 변수에 this를 백업한다.
- 백업된 변수인 this_bind를 이용해 컴포넌트의 state 변수에 접근할 수 있다.
```javascript
Function3() {
  var this_bind = this;
  setTimeout(function() {
    console.log(this_bind.state.num+'. Es5 콜백 함수 noBind : ');
    // 콜백 함수 내부에서 this는 window 객체이기 때문에 this로 state 변수에 접근하면 underfinde에러가 발생한다.
    console.log(this.state.arrowFuc);
    }, 100);
}
```
- 콜백 함수에 함수 밖의 this를 bind 해주면, this를 컴포넌트로 사용할 수 있다.
```javascript
Function4() {
  setTimeout(function(){
    console.log('4. Es5 콜백함수 Bind : ' + this.state.arrowFuc);
    }.bind(this), 100);
}
```
- 화살표 함수에서는 this를 bind해주지 않아도 this를 컴포넌트로 사용해 state 변수에 접근할 수 있다.
```javascript
Function5 = (num1, num2, num3) => {
  const num4 = num1 + num2 + num3;
  setTimeout(() => {
    console.log(num4+'. 화살표 콜백 함수 : ' + this.state.arrowFuc);
    }, 100);
}
```

## forEach() 함수
[ForEach.js 파일과 함께 보기](https://github.com/kdn00/react_test/blob/main/src/1장_Components/ForEach.js)
- 배열 함수 forEach()는 for문에서 사용하던 순번과 배열의 크기 변수를 사용하지 않는다.
- 배열의 처음부터 마지막 순번까지 모두 작업하는 경우 forEach()문을 사용하는 것이 간편하다.
- 하지만 특정 순번에서만 배열 값을 사용하거나, 변경해야 하는 상황이라면 for문을 사용해야 한다.
```javascript
// for문 사용
let For_Arr = [3, 2, 8, 8];
let For_newArr = [];
for(let i = 0; i< For_Arr.length; i++){
  For_newArr.push(For_Arr[i]);
}
```

- forEach() 함수에서는 순번과 배열의 크기 정보를 사용하지 않는다.
- 0부터 배열의 크기만큼 반복하며 순서대로 배열 값을 반환한다.
```javascript
// forEach() 함수 사용
let ForEach_Arr = [3, 3, 9, 8];
let ForEach_newArr = [];
// 반복문이 실행될 때마다 콜백 함수로 결괏값을 받아 새로운 함수에 넣는다.
ForEach_Arr.forEach((result) => {
  ForEach_newArr.push(result);
})
```