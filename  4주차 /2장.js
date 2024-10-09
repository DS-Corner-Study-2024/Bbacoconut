//빈칸 퀴즈

1. 아래 코드에서 첫 번째 this는 함수 ( relationship )을, 두 번째 this는 함수 ( relationship )을 가리킨다. 

const relationship = {
    name : 'zero',
    friends : ['nero', 'hero', 'xero'],
    logFriends() {this.friends.forEach(friend => console.log(this.name, friend))}
};

2. ( Promise.all )을 이용하면 프로미스 여러 개를 한 번에 실행할 수 있고,
(  Promise.allSettled  )를 이용하면 어떤 프로미스가 reject 되었는지 알 수 있다.

3. async 함수 내에서 프로미스가 resolve될 때까지 기다리기 위해 사용하는 키워드는 (   await  ) 이다.

4. 옵셔널 체이닝 연산자 (?.)는 (  null ) 이나 (   undefined   ) 의 속성을 조회하는 경우 에러가 발생하는 것을 막는다.

5. 널 병합 연산자(??)를 사용한 코드 1의 실행 결과는 (  0   ), 코드 2의 실행 결과는 (   3  )이다.

const c = 0;
const d = c ?? 3; 
console.log(d);		// 코드 1

const e = null;
const f = e ?? 3;
console.log(f); 	// 코드 2

6. ( AJAX  ) 는 비동기적 웹 서비스를 개발할 때 사용하는 기법으로,
페이지 이동 없이 서버에 요청을 보내고 응답을 받을 수 있게 한다.



//Programming Quiz

//1번

const {getChoco, status : {count}} = chocoMachine;


//2번

const arr = [1, 3, 2, 7, 2, 6, 3, 5];

// 배열의 중복 요소 제거
const s = new Set(arr);    

// set을 배열로 되돌리기
const result = Array.from(s);