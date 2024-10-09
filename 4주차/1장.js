//빈칸 퀴즈

1. (           서버        )는 네트워크를 통해 클라이언트에 정보나 서비스를 제공하는 컴퓨터 또는 프로그램이다.

2. 이벤트 기반 시스템에서는 (   이벤트 리스너   )에 (      콜백 함수      )를 등록한다.

3. (    이벤트루프    )는 콜백 함수들을 관리하고 호출된 콜백 함수의 실행 순서를 결정한다.

4, 블로킹 코드를 논블로킹으로 만들기 위해 사용되는 기법은 ( setTimeout(콜백, 0) )이다.

5. 프로세스와 스레드 중 (        스레드        )는 부모 프로세스의 자원을 공유한다.

6. 노드는 (    JavaScript    ) 언어를 사용하여 개발 생산성이 높다.

7. 노드 기반으로 돌아가는 데스크톱 개발 도구 중 가장 대표적인 도구는 (          일렉트론         )이다.


//Programming Quiz

//1번

function heavyTask() {
    console.log('수학은 할 게 가장 많다');
}

function littleHeavyTask() {
    console.log('국어는 할 게 두 번째로 많다.');
}

setTimeout(heavyTask, 0);
console.log('영어는 할 게 제일 적다.');
setTimeout(littleHeavyTask, 0);