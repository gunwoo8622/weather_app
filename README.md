# weather_app

Learning React native by building weather app

노마더코더 : https://nomadcoders.co/react-native-fundamentals

- node(10버전 이상), npm(6버전 이상) 설치  
  npm은 node설치되면 자동으로 설치됨  
  (bash) node -v, npm -v  
  
  
  
- 안드로이드 폰 테스트하려면 Android Studio 설치  
  설치하기 싫으면 폰에 expo앱 다운 **폰으포 테스트 가능**
- expo 설치  
  (bash) npm install --global expo-cli
- expo는 create-react-app 과 비슷하다  
  react native위한 설정 파일들이 없는 형식으로  
  모든 것이 셋업되어 있다.
- Documents에서 폴더 생성  
  (bash) expo init projectname  
  blank or blank (TypeScript) or tabs (TypeScript)등등 나옴  
  <img src="https://user-images.githubusercontent.com/63627481/100422996-a2f08500-30ce-11eb-9dde-68a8ad7dee1a.PNG" width="500" height="220">  
  blank 선택해서 처음부터 다 만들거다.  
  (bash) Enter  
  Your project is ready! 생성됨  
  <img src="https://user-images.githubusercontent.com/63627481/100422994-a1bf5800-30ce-11eb-84b5-325a41fbc92e.PNG" width="500" height="220">  
  나머지는 expo가 자동생성을 할 수 있다.
- 일단 깃헙에서 repo생성 projectname과 동일하게 만든다(README.md 체크).
- vscode로 weather_app 오픈
  (bash) cd weather_app  
  (bash) code .
- **vscoede 터미널에서**  
  (bash) git remote add origin 깃헙주소https://github.com/gunwoo8622/weather_app
- 깃헙에 있는 README.md 파일을 추가해준다.  
  (bash) git pull origin main --allow-unrelated-histories  
  셋업 끝!
- (bash) npm start  
  새 창 열림 폰expo앱에 qr코드 찍으면 화면 바뀜  
  폰 앱으로 확인할 거라 Run on Android device/emulator 클릭  
  하면 vscode에서 building bundle 되고 앱에서 시작가능  
  **같은 wifi**에서 작업하자  
  <img src="https://user-images.githubusercontent.com/63627481/100425103-f2848000-30d1-11eb-977e-42e8b1a4341f.PNG" width="500" height="220">
- live load  
  저장하면, 자동으로 리프레쉬되고, 변경된 사항 확인 가능
- 폰을 한 번 흔들면 개발자 메뉴가 열린다.  
  여러가지를 확인할 수 있다.ㅎㅎ
- react native는 js를 이용해 ios, android엔진에게  
  메세지를 보내준다. **브릿지처럼**
- native의 component에 대해  
  view 는 div 같은 것 view 안에 다 넣어야한다.  
  웹에서 text를 넣을 때 span 을 쓰지만  
  native에서 text 를 쓴다.
- 리액트 네이티브에서 레이아웃 규칙  
  웹사이트에서 flex 디폴트는 row(가로)지만  
  __네이티브에서는 flex 디폴트는 column(세로)__이다.  
  폰에서는 대부분 서로 아래로 되어있기 때문이다.  
  flex는 네이티브에서 작동하는 방식. 공간?을 의미
