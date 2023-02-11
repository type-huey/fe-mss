<!-- 헤더 -->

![header](https://capsule-render.vercel.app/api?type=slice&color=auto&height=200&section=header&text=MUSINSA&desc=FE%20과제&fontSize=60&rotate=14&fontAlignY=25&fontAlign=75&descAlignY=43&descAlign=80&&animation=twinkling)

<div align=center>

## <img align="center" width="40" src="https://user-images.githubusercontent.com/75469131/213887734-1f8f0fb6-4395-4aa6-b828-3b44b96d8f0f.gif" /> 무신사 사전 과제 링크

[과제 배포 링크](https://frabjous-dodol-73a16b.netlify.app/)

<br/><br/>

## Tool :four_leaf_clover:

| stack                                                                                                  | 설명                                                                                      |
| ------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| <img src="https://img.shields.io/badge/React-0099E5?style=flat&logo=React&logoColor=white"/>           | DOM 조작과 상태 변화 관리, 랜더링 과정을 최소화 하기 위해 사용하였습니다                  |
| <img src="https://img.shields.io/badge/Recoil-003791?style=flat&logo=Atom&logoColor=white"/>           | 상태 관리 용이성과 selector는 readonly 반환으로 side-effects를 줄이기 위해 사용하였습니다 |
| <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=TypeScript&logoColor=white"/> | 컴파일 단계에서 오류 확인과 타입지정으로 가독성과 디버깅을 쉽게 하기위해 사용하였습니다.  |
| <img src="https://img.shields.io/badge/Vite-646CFF?style=flat&logo=Vite&logoColor=white"/>             | 빌드 속도와 프로젝트를 빠르게 설정할 수 있어 사용하였습니다                               |
| <img src="https://img.shields.io/badge/Netlify-00C7B7?style=flat&logo=Netlify&logoColor=white"/>       | 프로젝트 배포 용이(CD)                                                                        |

## other

<img src="https://img.shields.io/badge/storybook-FF3399?style=flat&logo=StoryBook&logoColor=white"/>
<img src="https://img.shields.io/badge/styled components-DB7093?style=flat&logo=styled-components&logoColor=white"/>
<img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white" />
<img src="https://img.shields.io/badge/Axios-5A29E4?style=flat&logo=Axios&logoColor=white"/>
<img src="https://img.shields.io/badge/Sass-CC6699?style=flat&logo=Sass&logoColor=white"/>

<br/><br/>

## 구동방법 🛠

<div align=left>

```javascript
        /* 클론 */
        $ git clone https://github.com/type-huey/fe-mss.git

        /* 패키지 설치 */
        $ yarn insall

        /* .env 파일 추가 */
        VITE_API_BASE_URL = 'https://static.msscdn.net/musinsaUI/homework'
        VITE_API_IMAGE_SERVER = 'https://image.msscdn.net/musinsaUI/homework'

        /* 실행 */
        $ yarn dev
```

</div>

 <br/>
 <br/>

## 고민 사항 / 핵심 기술 사용 🤔

고민했던 부분을 가감 없이 자유롭게 전달하기 위해 편하게 음슴체(?)로 작성했습니다. 불편하시다면 죄송합니다!

### 1. 프로젝트 시작 전 TMI

하필 왜 과제를 할 때 일이 바빠지는지... 수요일부터 집중해서 시작하였다. <br/>
시간이 여유롭지 않았지만 하고 싶은건 많았고, 특히 프로젝트 환경설정에 욕심이 앞섰다. 🔥 <br/>
react18+, recoil, storybook, vite 평소 사용해 보고 싶었던 스택 위주로 해보려고 했다. (결국 소스 코드보다 프로젝트 환경설정이 더 오래 걸렸다...) <br/>

### 2. Header

필터 기능을 개발하기 전 필터 옵션으로 들어가는 태그(?)들을 재사용할 수 있을 듯 했다.<br/>

처음으로 UI에서는 round 형식과 react 형식으로 나누어서 활성화와 필터링 되었을 때 스타일을 입혀주면 되겠다고 생각하고 작업했다.<br/>

기능적으로는 태그를 클릭 시 어떻게 분기해줄지에 대해 고민 했다.(action에 따라 switch로 나눠줄까..?)<br/>

***✨curring 기법✨***을 사용하면 좋을것 같았다 (키워드가 있는지) => (세일인지) => (단독인지) => (품절인지) => **필터링된 상품리스트!**

필터 옵션이 되는 리스트와 필터링된 태그 리스트도 같은 컴포넌트를 사용해야겠다는 생각이 들었다.<br/>

### 3. Goods

첫 번째로 데이터 형식을 보기 위해 api 요청으로 응답 값을 받았는데, 웬걸.. 응답 값에 페이징 처리를 위한 값이 없었다. <br/>

또한 api가 json 형식이라 요청 시 Params를 받지 못해 필터링된 모든 데이터를 바로 볼 수 없고 받은 데이터만 필터링 해야 했다. <br/>

데이터를 가져온 다음 무한 스크롤링부터 테스트했다. <br/>

무한스크롤 훅을 만들고 ***✨intersection Observer✨***로 마지막 엘리먼트가 화면에 렌더링 될 때 다음 페이지를 요청해주었다.<br/>

상품 리스트를 렌더링 하면서 필터링을 바로 적용하기 위해 코드의 간결함을 위해 recoil selectorFamily를 사용하여 필터링에 <br/>

필요한 옵션을 전달 후 처음 데이터는 그대로 가지고 있고 readonly만 되도록 관리하여 사이드 이펙트를 줄여주었다. <br/>

상품을 랜더링한 다음 모바일 환경이 아닌 웹 환경에서 보니 반응형이 필요하다고 생각되어 **_media query_**를 적용해주었다. <br/>

### 4. 자동완성 + 추가기능(필터 리셋 버튼)

일단 input이 있으면 debounce 부터 생각하게 된다 <br/>

setTimeout으로 직접 구현하지 않고 ***✨useDeferredValue✨***를 이용하여 검색 키워드를 넘겨주어 이벤트를 최소화해주었다. <br/>

검색으로 인한 키워드는 여러 개를 필터링할 수 있게 할까 하다가 재 검색시 이전 키워드를 수정해주는 방식을 사용했다.<br/>
        
또한 상품명 전체를 입력하지 않아도 입력한 키워드가 포함 되어있다면 상품을 랜더링 시켜주었다. <br/>

추가로 리셋 아이콘이 있었는데 기능 구현 사항에 내용이 없어 무신사 사이트 참고결과 모든 필터링을 제거해주는 기능이여서 추가했다.<br/>

### 5. 기타

vite 빌드 환경에서 storybook을 세팅해 보고 싶었다 (...지옥의길) <br/>
다양한 이슈들이 괴롭혔다 <br/>
unsupportted <br/>
Failed to fetch dynamically imported module (alias issue) <br/>
svg declear <br/>
다행히 오류는 잡혔고 노션 정리도 하면서 좋은 경험이 되었다<br/>
![스크린샷 2023-02-12 오전 12 19 12](https://user-images.githubusercontent.com/20451074/218266474-6fbcc575-d71e-4f47-b4d6-a75c3be35691.png)

![Footer](https://capsule-render.vercel.app/api?type=waving&color=auto&height=200&section=footer)
