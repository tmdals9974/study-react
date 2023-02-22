# 프로젝트2: 집단지성을 이용한 담당자찾기 서비스

- [프로젝트 원본 소스 보기](https://github.com/landvibe/inflearn-react-project/tree/master/whois)
- 회사 내 업무에 대한 담당자를 찾는 서비스

## 실행 방법

```bash
# client
npm start
```

```bash
# server
cd ./server
npm start
```

## 프로젝트 사용 방법

- 회원가입 자유 (인증 필요 없음)
- 로그인 시 비밀번호 필요 없음 (아무거나 입력)

## 강의 내용 메모
- ### Props Type 체크 방식 (추천: 1>2>3)
  1. typescript
  2. jsdoc: 컴파일타임에 타입체크 
  3. prop-types: 런타임에 타입체크