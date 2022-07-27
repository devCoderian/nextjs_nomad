import Navbar from "../components/NavBar";

export default function about(){
    return  <>
    <Navbar/>
    <h1>about</h1>
</>
}

// 페이지에 파일로 추가할 때 주의점은 export default가 리액트 컴포넌트 파일이어야 한다.
// url이 파일명이 된다.

// react VS next

// useState같이 Hooks를 쓸 경우를 제외하고는 react를 임포트 할 필요가 없다.

/*
    next.js는 앱에 있는 페이지들이 미리 렌더링 된다. => 정적 생성

    React로 만든 앱
    client-side render => 브라우저가 유저가 보는 UI를 만드는 모든것을 한다는 의미
    react.js로 렌더링해준 뷰 => 유저가 보는 HTML 소스 코드 안에 들어가 있지 않다.
    div id가 root라는 걸 제외하곤 모두 다 자바스크립트이다.
    브라우저가 react.js를 다운받고 너의 코드를 다운받았을 때
    그 때 react.js는 다른 모든 것들을 렌더링하고 유저는 네비게이션 바를 비롯한 나머지를 볼 수 있다.
    브라우저가 자바스크립트를 가져와서 UI단을 구현 => 유저가 볼 수 있는 HTML 태그 <div id = "root"></div> => 사실상 비어있는 div, 자바스크립트를 비활성화 하면 보이지 안흔다.
    noscript는 유저가 브라우저에서 자바스크립트를 비활성화했을 때만 볼 수 있는 태그
    브라우저가 js, react등 모든 것을 패치한 후에만 UI를 만들 수 있다.

    Next.js로 만든 앱
    Next.js는 자바스크립트를 비활성화해도 동작한다. 또한 실제 HTML이 들어있는 걸 확인할 수 있다.
    느린 연결을 하더라도 적어도 설정해놓은 프리렌더링, 즉 어떠한 HTML을 볼 수 있다.
    API렌더링이 바로 보이지 않도라도 적어도 유저는 톡정한 정보는 접할 수 있다.
    
    pre-rendering
    페이지를 열면 HTML을 볼 수 있다.
    react.js 는 hydration으로 동작
    유저는 js와 react.js가 로딩되지 않았더라도 콘텐츠를 볼 수 있게 된다.
    react.js가 로딩되었을 때, 기본적으로 이미 존재하는 것들과 연결 되어서 일반적인 리액트앱이된다.

    유저가 웹사이트에 가면, 초기 상태의 component로 미리 생성된 HTML 페이지를 보게 되고
    상호작용이 일어나면 react.js는 그걸 받아서 동작한다.

    => 이작업은 SEO에 좋다(검색엔진)
    react.js를 프론트엔드 안에서 실행시키는것 => 하이드레이션
    next.js는 react.js를 백엔드에서 동작시켜서 이 페이지를 미리 만들고 이게 component들을 렌더링 시킨다.

*/