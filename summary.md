# 정리

## 좌우 버튼을 클릭하면 컨텐츠가 바뀜

## 컨텐츠 트랜지션을 자연스럽게 주고 싶음

## AccumulativeShadows 쓸 때 주의점

- 그림자를 표현하고 싶은 메쉬에 contactshadow를 적용해야함

```tsx
<AccumulativeShadows position={[-3, -1.33, 2]} frames={100} alphaTest={0.7} scale={10}>
  <RandomizedLight amount={6} radius={3} ambient={0.5} position={[1, 5, -1]} />
</AccumulativeShadows>
```

## three custom shader material을 쓸 때 주의점

- roughmap과 metalmap은 shader로 tex를 보내지 않아도 적용됌
- colormap은 shader로 tex를 보내야 적용됌
- shader에서 colormap을 tex로 쓰면 색이 날라간 것처럼 보임
- color.rgb에 적당한 값을 빼서 원래색을 찾아오면 됌

## 애니메이션 순서

- 처음에 시작하면 0 ~ 1로 나타난다
- 좌우버튼을 클릭하면 A가 1 ~ 0으로 사라진다
- A가 사라진 후에 B가 - ~ 1로 나타난다
- 반복

## react, ts glsl파일 설정

- vite-plugin-glsl 설치
- vite.config.ts plugins에 glsl()추가

- index.d.ts 파일 생성
- glsl, vert, frag 파일명에 대한 타입 선언

- tsconfig.json include에 index.d.ts 파일 추가

## three.js loading system

```tsx
const loadingManager = new LoadingManager();

loadingManager.onStart = function (url, item, total) {
  console.log("start", url, item, total);
};
loadingManager.onProgress = function (url, loaded, number) {
  console.log("progress", url, loaded, number);
};
loadingManager.onLoad = function () {
  console.log("onload");
};

const gltfLoader = new GLTFLoader(loadingManager);
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath("https://unpkg.com/three@0.164.1/examples/jsm/libs/draco/");
gltfLoader.setDRACOLoader(dracoLoader);

const assets = [
  "./models/viking.glb",
  "./models/ferrisWheel.glb",
  "./models/swing.glb",
  "./models/vintageCar.glb",
  "./models/walkman.glb",
];

assets.forEach((url) => {
  const t = {};
  gltfLoader.load(url, (d) => {
    console.log(d);
  });
});
```

## 트랜지션 상태를 추가

- 버튼을 클릭하면 트랜지션이 일어난다(이전 상태는 사라지고 다음 상태는 나타난다)
- model에는 in, out을 알려줘야함
