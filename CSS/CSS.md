## 1. CSS - HTML로 생성된 틀에 모양, 스타일을 입히는 속성
- HTML 태그에 속성으로 추가하거나, 별도의 파일로 분리하여 생성

## 2. 사용법
- Inline 방식 : HTML 태그에 style 속성을 추가하여 작성
    syntax> style = "프로퍼티 : 값;"
- Internal 방식 : HTML 파일의 head 태그에 페이지에서 호출되는 style 속성 정리
- *(선호) External 방식 : style 속성을 별도의 파일로 생성하여 호출
- [적용 속도는 Internal 방식이 빠르다]

## 3. Internal, External 방시의 문법
- 형식 : 선택자(Selecter) {프로퍼티{Property} : 값(value);};
- selecter 종류 : HTML 태그명, Class(.), Id(#)
- All selecter(Universal Selector) : * - body 안의 모든 태그들을 선택, 전체 폰트 타입, 레이아웃 사이즈, 여백 조정..
- Tag Selector : HTML 태그를 선ㅌ택하여 스타일 정의
- Class Selector : HTML 태그에 class 속성을 추가하여 스타일 정의, style 태그에서는 dot(.) 으로 선택
- Id Selector : HTML 태그에 id 속성을 추가하여 스타일 정의, style 태그에서는 sharp(#) 으로 선택
- Descendant(자손) selector : HTML 태그의 포함관계를 통해 부모 자식 태그로 구분하여 선택, 부모와 자식을 공백으로 구분
- Child(자식) Selector : HTML 태그의 포함관계를 통해 부모 자식 태그로 구분하여 선택, 부모와 (>)으로 구분
- Sibling(인접한 형제 선택자) Selector : HTML 태그의 포함관계 중 같은 레벨에 있는 태그들을 형제로 구분, 시작태그 + 형제(인접한) 태그 선택,
  시작태그 ~ 형제 태그, (모든 형제 태그를 의미함)
- Attribute Selector (속성 선택자) : 태그의 속성값을 구분하여 스타일을 적용
- Pseudo Calss Selector : 정해진 이벤트적 요소를 실행하면서 스타일 적용, :pseudo 클래스명, :hover, :focus...

## 4. 단위 - pixel, %, em, rem,...
- pixel은 고정딘 기이로 설정, 화면 크기가 변경되어도 사이즈가 유지
- %는 상대적 크기로, 화면 크기가 변경되면 그 크기에 따라 퍼센트에 맞춰 사이즈가 조정
- 부모의 크기가 픽셀로 고정되어 있는 경우, 자식은 퍼센트로 설정하여 크기 조정
- 부모의 크기가 퍼센트이면 자식도 화면 크기 변경시 화면 크기게 맞춰 사이즈가 조정