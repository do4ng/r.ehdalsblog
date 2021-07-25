오늘은 요즘 핫한 번들러 Vitejs를 이용해서 Svelte 프로젝트를 생성해보도록 하겠습니다.

## Svelte, Vite?

Svelte랑 Vite가 뭘까요?

### 🤔 Vite?

[Vite](https://github.com/vitejs/vite)는 프랑스어로 "빠른"라는 뜻을 가지고 있습니다. 말그대로 Vite는 정말 빠른 핫 모듈 리로드를 제공합니다. [Dev.to](https://dev.to/alvarosaburido/vite-2-a-speed-comparison-in-vue-1f5j)에 속도를 비교해주신 분이 있으니 참고하시면 되겠습니다.  
원래 vite는 vue를 위해 만들어졌지만 플러그인을 통해 svelte, react도 가능해졌다고 하죠.

### 🧐 그래서 Svelte는?

그래서 Svelte가 뭘까요?

[홈페이지](https://svelte.dev/)를 잠시 둘러보니 대충

> Svelte는 React와 Vue와 같은 기존 프레임워크와 달리 앱을 빌드할 때 발생하는 **"컴파일"** 단계에서 작업을 수행한다. 코드를 프레임워크가 없는 바닐라 자바스크립트로 컴파일해 앱을 빠르게 시작하고 유지할 수 있다.

라고 하네요. (오역이 있을 수 있습니다)

![img](./static/images/img-svelte-npm-download.PNG)

> Svelte Npm 위클리 다운로드 수 입니다. Svelte가 점점 유명세를 타고있다는것을 알 수 있습니다.

## 🚀 프로젝트 생성

이제 vite 앱을 생성해봅시다.

```bash
$yarn create vite
```

첫 번째로 프로젝트 이름을 물어보는데 원하는 이름으로 해주시면 됩니다.

![img](./static/images/img-vite-svelte-1.PNG)

다음으로 프레임워크를 물어보는데 여기서 **svelte**를 선택해주시면 됩니다.

![img](./static/images/img-vite-svelte-2.PNG)

이건 typescript를 사용하길 원하면 `svelte-ts`를, 원치 않으면 `svelte`를 선택해주시면 됩니다.

프로젝트 생성이 완료되었다고 뜨면 아래 명령어를 입력해주세요.

```bash
$cd {프로젝트 이름}
$yarn # npm install
$yarn dev # npm run dev
```

이제 localhost:{포트}로 들어가면..

![img](./static/images/img-vite-svelte-3.PNG)

잘 작동하네요!

## 📜 마무리

이번 포스트에서는 vite + svelte 조합을 알아보았습니다.  
궁금하신 점이나 오타는 댓글로 알려주시면 감사하겠습니다.
