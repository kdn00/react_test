# props
[Props.js 파일 같이 보기]()
- 부모 컴포넌트가 자식 컴포넌트에 데이터를 전달할 때 사용한다.
- props를 전달받은 자식 컴포넌트에서는 데이터를 수정할 수 없다.
- 데이터를 변경하기 위해서는 컴포넌트 내부에서만 사용하는 변수에 값을 넣어 사용해야 한다.

```javascript
render() {
    // - this.props 뒤에 상위 컴포넌트에서 전달받은 props 변수명을 붙이면, 해당 데이터를 사용할 수 있다.
    // 데이터를 수정해야 할 경우, props 자체가 아닌 컴포넌트 내부 변수에 옮겨 가공한다.
    let props_value = this.props.props_value;

    // App.js에서 넘겨받은 문자열 뒤에 새로운 문자열을 붙인다.
    props_value += 'from App.js';
    return(
        <div> {props_value} </div>
    )
}
```