![](https://velog.velcdn.com/images/newbie_1761/post/39221953-e26a-48f5-b8ca-da53307516ad/image.png)

post안에 cookie를 선언하고 token값을 담는다

![](https://velog.velcdn.com/images/newbie_1761/post/ad2cb278-8889-498b-9919-5535ae557af0/image.png)

POSTMAN에서 실행해보면 쿠키에 value값에 토큰이 담겨져 있는것을 볼 수 있다.

---

**http**
https(ecure) : http에서 암호화를 한번 더 적용시킨다.

![](https://velog.velcdn.com/images/newbie_1761/post/df6b3697-489b-4f22-b25b-e4e3396d279c/image.png)
![](https://velog.velcdn.com/images/newbie_1761/post/602ecdc6-a4dc-4a59-82da-539f147795c8/image.png)
httpOnly : XSS 공격 (프론트엔드 공격 : 웹 브라우저 js 접근 => 자바스크립트 코드를 활용한 공격)
httpOnly를 true 값으로 할 경우 세션 API만 호출하기에 프론트엔드에서 javascript 공격으로 인해 cookie값이 영향받지 않는다

---

JWT 시간 설정
JWT 세션을 한번 인증후 영원히 유지 시킬수는 없기에 일정시간이 지나면 세션을 만료를 시켜야한다.

![](https://velog.velcdn.com/images/newbie_1761/post/ba1f72f8-490d-4c95-830c-666dc76dfb05/image.png)
![](https://velog.velcdn.com/images/newbie_1761/post/759cddee-f2ff-4246-9b3d-a9fad6e68648/image.png)

expiresIn을 이용하여 세션 유지시간을 지정해준다
issuer 토큰을 발급한 사람을 나타낸다
console로 찍혀져 나온 token을 jwt.io 사이트에 가서 조회하면
설정해둔 값들이 나온다
iat는 생성된 시간, exp는 만료시간, iss는 요청자 이름이다.
