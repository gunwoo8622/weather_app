# weather_app
Learning React native by building weather app
  
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
  blank 선택해서 처음부터 다 만들거다. (bash) Enter  
  Your project is ready! 생성됨
  나머지는 expo가 자동생성을 할 수 있다.  
- 일단 깃헙에서 repo생성 projectname과 동일하게 만든다(README.md 체크).  
- vscode로 weather_app 오픈
  (bash) cd weather_app  
  (bash) code .  
- **vscoede 터미널에서**  
  (bash) git remote add origin 깃헙주소https://github.com/gunwoo8622/weather_app  
- README.md 파일이 추가된다.
  (bash) git pull origin main --allow-unrelated-histories  
  셋업 끝!
- (bash) npm start  
  새 창 열림 폰expo앱에 qr코드 찍으면 화면 바뀜  
  폰 앱으로 확인할 거라 Run on Android device/emulator 클릭  
  하면 vscode에서 build되고 앱에서 시작가능 
  
