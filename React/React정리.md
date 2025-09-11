## 1. React(리액트)란?
- UI(User Interface: 사용자 인터페이스)를 생성하기 위한 자바스크립트 라이브러리
- Meta(FaceBook)에서 2013년도 오픈 소스로 공개, 2015년도에 React Native 공개
- 2019년도 함수형 기반으로 업제이트됨, 이전에는 클래스기반 이었음
- 2022년도 SSR(Sever Side Rendering : 서버사이드 랜더링)을 지원함
- React(UI) + Node(Sever) + DB

## 2. React의 장점
- 빠른 업데이트와 렌더링 속도 : React DOM
- 컴포넌트의 재사용성 : 함수기반의 컴포넌트 생성
- 든든한 지원군 : Mata(facebook)의 support
- 활발한 지식 공유 & 거대한 커뮤니티(NPM)
- 모바일 앱 개발 가능 : 2015년 React Native 출시

## 3. React의 단점
- 방대한 학습량 : Html, Css, JavaScript, SCSS, SASS 등을 학습하여야 효율적이다.
- 상태 관리 복잡성 : React Hooks를 통한 상태 관리, 비동기식 처리

## 4. React 프로젝트 생성
- 리액트 사이트 : https://reactjs.org ---> https://react.dev
- CSR (Client-Side Rendering)
- SPA (Single Page Apps)
- SSG (Static-Site Generation)
- SSR (Sever-Side Rendering)
- 프로젝트 생성 : 리액트 프로젝트 or NEXT.JS 프레임 워크 : 리액트 프로젝트 + SSR
- React 프로젝트 생성
- 형식 : npx create-react-app@lastest [프로젝트명]
- <예> npx create-react-app@5.1.0 basic-app
- 프로젝트 실행 : cd basic-app -> npm start

npm run build, npm test, npm run eject

## 5. React App 실행 순서
- npm start > src/index.js : 출력되는 App 선택 > App.js - SSG(Html 미리 생성)
 -> React DOM(Virtual Dom) -> 브라우저 DOM

 cat package.json cmd에 바로 확인 하는 명령어

 ## 6. 컴포넌트(Component)
 - UI를 구성하는 함수 컴포넌트
 - 첫 글자는 대문자로 정의
 - return 키워드 다음은 반드시 ()묶어준다.
 - return 코드는 하나로 그룹핑되어 반환된다.
    예 <div> ~ </div>, <>~</>...
 - 로직을 포함하는 코드는 {}로 묶어준다.
 - return () 에서 사용되는 문법을 JSX (JavaScript Extension)이다
 - 자동완성 명령 - rface

## 7. 프롭스(Props)
- 부모 컴포넌트가 자식 컴포넌트에게 데이터를 전달하는 방식
- 전달하는 객체는 Object Literal({property:valye...}) 타입
- 자식은 참조객체변수 혹은 구조분해 할당 형식으로 데이터를 매핑
- porps는 읽기 전용 객체로 자식이 수정할 수 없음
- 부모 --> 자식 : 단방향 작업만 가능(One-way data flow)
- 부모 <-- 자식 : 이벤트 콜백함수 형태로 전달함

## 8. 컴포넌트 구성 및 네이밍 규칙
- public 폴더 : 이미지, 데이터파일(.json), 정적 파일 저장
- public > images : 이미지 파일 네이밍 규칙 정의
  예) 소문자-비지니스로직명.확장자 : icon-search.jpg, icon-login.jpg...
- src 폴더 : 컴포넌트 파일, 공통 모듈 파일...
- src > components > commons : 최소의 컴포넌트, 재사용성 높음
- src > components > shared : 최소 컴포넌트 + 비지니스 로직 ..
- src > utils > 공통 모듈 : 자바스크립트 형식의 함수, 컴포넌트에서 재사용, 확장자는 .js를 사용