//빈칸 퀴즈

1. 콘솔에서 REPL로 들어가는 명령어는 (  node  ),
노드를 통해 파일을 실행하는 명령어는 (  node [파일 경로]    )이다.
2. 노드에서는  (  CommonJS  )와  ( ECMAScript ) , 두 가지 형식의 모듈을 사용한다. 
3. CommonJS 형식에서 (  require   ) 함수로 모듈을 불러올 수 있다.
4. ES 모듈에서는 __filename과 __dirname을 사용할 수 없는 대신 (  import.meta.url  )로 경로를 가져온다.



//Programming Quiz

//1번

import { name, number } from './var.mjs';

function getInfo() {
    return `${name} ${number} Team`;
}

export default getInfo;