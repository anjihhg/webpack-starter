# Webpack Frontend Starterkit

A lightweight foundation for your next webpack based frontend project.

### 할 일

- Clone or Download 버튼을 눌러서 zip 파일을 내려 받아 압축을 풉니다.
- Visual Studio Code 로 폴더를 열어서 **ctrl + `** 키를 눌러 터미널을 띄웁니다.
- 혹은, 메뉴바의 **보기(view) -> 통합터미널(Integrated Terminal)**을 선택합니다.
- 그런 다음 아래 명령어를 입력합니다.

```
npm install
```

### 개발 서버 띄우기

```
npm run dev
```

### 배포용 빌드 만들기

```
npm run build
```

### Features:

- **TweenMax, jQuery, Normalize**
- ES6 Support via [babel-loader](https://github.com/babel/babel-loader)
- SASS Support via [sass-loader](https://github.com/jtangelder/sass-loader)
- Linting via [eslint-loader](https://github.com/MoOx/eslint-loader)

When you run `npm run build` we use the [extract-text-webpack-plugin](https://github.com/webpack/extract-text-webpack-plugin) to move the css to a separate file and included in the head of your `index.html`, so that the styles are applied before any javascript gets loaded. We disabled this function for the dev version, because the loader doesn't support hot module replacement.
