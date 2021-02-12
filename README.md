# remotto

sns application project like instagram

![chrome-capture](https://user-images.githubusercontent.com/72514247/107004317-72654f80-67d1-11eb-8d5a-ae071d93c163.gif)

전반적인 개발 프로세스를 되짚어보고 공부하기위해 만든 인스타그램형식의 sns toy project.

## Skills

### Front

`Bootstrap` `EJS (Templete engine)`

### Back

`NODEJS` `Express` `Mongoose (ODM)`

### Server & DB

`Mongo DB` `Cloudinary(img upload)` `Heroku`

### link

https://morethanmin-remotto.herokuapp.com/

(헤로쿠로 배포했기 때문에 처음 접속시 동면상태인 경우 20초정도 걸릴 수 있습니다.)

## Features

- session기반의 로그인 인증 기능 구현
- 이미지 기반 게시글 작성, 삭제, 수정 기능
- cloudinary를 이용한 image uploading
- user 게시글 작성, 수정 및 삭제 권한 부여

MVC 디자인 패턴을 적용하여 좀 더 생산적인 코드 작성을 노력하였습니다.

Mongo Injection, XSS(Cross Site Scripting) 같은 일반적인 보안문제에 대응하여 제작했습니다.

