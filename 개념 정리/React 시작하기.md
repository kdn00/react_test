# React란?
- 웹페이지에서 눈에 보이는 영역인 프론트엔드에 특화된 언어
- 코드 이식성과 재활용성이 높고 화면 출력 속도가 빠르다는 장점이 있다.
- 화면을 구성하는 코드를 컴포넌트 단위로 나누고 필요한 부분에 이식해 사용할 수 있다.

# Component
- 특정 코드 뭉치를 다른 부분에 이식하거나, 재사용하기 위해 사용하는 코드 블록 단위
- component를 파일 단위로 작성한 후, 필요한 위치에서 임포트해 사용할 수 있다.

# 생명주기
- component의 생성, 변경, 소멸과정을 뜻한다.
- ``render()``, ``constructor()``, ``getDerivedStateFormProps()``, ``componentDidMount()`` 함수들은 component의 **생성** 과정에 속한다.

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
// R003.js
static getDerivedStateFromProps(props, state){
    console.log('2. getDerivedStateFromProps Call : '+ props.prop_value);
    return {};
}
```