안녕하세요. 이번에는 Svelte를 이용하여 간단하게 물건 판매 페이지 제작하며 Svelte를 배워보도록 합시다.

## 📜 시작하기 전

JS 기본문법 (es6)과 Typescript를 익히고 보시면 좋습니다.  
인터넷에 널린게 JS,TS 강좌니 아직 모르시는 분들은 익히고 와주시면 감사하겠습니다.

## 🤖 프로젝트 생성

먼저 `vite`를 이용해 프로젝트를 제작하겠습니다.  
자세한 `vite` 프로젝트 생성 방법은 [이곳을](/#/link/1) 참고해주세요.

```bash
$ yarn create vite # svelte, typescript를 선택해주세요.
$ cd {Project Name}
$ yarn
$ yarn dev
```

## 🎠 프로젝트 생성

먼저, `src/App.svelte`를 수정해주세요.

```html
<script lang="ts">
  // 데이터 타입
  interface dataType {
    name: string;
    author: string;
    price: string;
  }

  // 데이터
  let data: dataType[] = [{ name: "📕 Book", author: "John", price: "5000" }];
</script>

<p>데이터 : { JSON.stringify(data) }</p>
```

잘 작동합니다.

![img](/static/images/img-learn-svelte-1.png)

Svelte에서는 `{}`를 이용하여 안에 값을 넣을 수 있습니다.

위 코드를 바닐라 JS로 다시 제작하여 비교해보겠습니다. (Typescript가 지원된다고 가정했을 때)

```html
<!--생략-->
<body>
  <p>데이터 : <span id="result"></span></p>

  <script lang="ts">
    // 데이터 타입
    interface dataType {
      name: string;
      author: string;
      price: string;
    }

    // 데이터
    let data: dataType[] = [{ name: "📕 Book", author: "John", price: "5000" }];

    // 값 집어넣기
    document.getElementById("result").innerHTML = JSON.stringify(data);
  </script>
</body>
<!--생략-->
```

같은 결과지만 코드량이 매우 다릅니다. 이렇게 Svelte는 `{}`를 이용하여 안에 값을 넣을 수 있습니다.

다음으로 data를 예쁘게 정리해서 결과를 출력하는 것을 구현해보겠습니다.

```html
<script lang="ts">
  // 데이터 타입
  interface dataType {
    name: string;
    author: string;
    price: string;
  }

  // 데이터
  let data: dataType[] = [{ name: "📕 Book", author: "John", price: "5000" }];
</script>

{#each data as d}
<div>
  <h3>{d.name}</h3>
  By {d.author}, {d.price}원
</div>
{/each}
```

![img](/static/images/img-learn-svelte-2.png)

`each`는 JS에 `forEach`와 비슷한 문법입니다.  
이번에는 `React`와 비교해보겠습니다.

```tsx
import ReactDOM from "react-dom";
import React from "react";

// 데이터 타입
interface dataType {
  name: string;
  author: string;
  price: string;
}

// 데이터
let data: dataType[] = [{ name: "📕 Book", author: "John", price: "5000" }];

data.map((d) => (
  <>
    <div>
      <div>
        <h3>{d.name}</h3>
        By {d.author}, {d.price}원
      </div>
    </div>
  </>
));

ReactDOM.render(<>{data}</>, document.getElementById("root"));
```

역시 이번에도 Svelte쪽이 더 간단했습니다.

## ✨ 스타일 적용하기

이제 나름 페이지처럼 꾸며보도록 합시다.

그리고 데이터가 한 개만 있으면 허전하니 데이터도 늘려봅시다.

```svelte
<script lang="ts">
  // 데이터 타입
  interface dataType {
    name: string;
    author: string;
    price: string;
  }

  // 데이터
  let data: dataType[] = [
    { name: "📕 Book", author: "John", price: "5000" },
    { name: "🚀 Rocket", author: "John2", price: "10000" },
    { name: "🤖 Robot", author: "John3", price: "3000" },
  ];
</script>

<div class="container">
  {#each data as d}
    <div class="card">
      <h3>{d.name}</h3>
      By {d.author}, {d.price}원
    </div>
  {/each}
</div>

<style>
  .container {
    display: flex;
  }
  .card {
    margin: 25px 7px;
    padding: 5px 15px;
    width: 225px;
    height: 350px;
    border: solid 1px #dbdbdb;
    border-radius: 5px;
  }
</style>

```

![img](/static/images/img-learn-svelte-3.png)

원하는 결과가 나옵니다.

## 🔧 마무리

이번 포스트에서는 간단한 틀을 잡아보았습니다.  
다음 시간에는 상품 자세히 보기 및 여러 기능을 구현해보도록 하겠습니다.
