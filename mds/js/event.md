# Event

[Event reference | MDN](https://developer.mozilla.org/en-US/docs/Web/Events)

## Capturing and Bubbling

한 요소에 이벤트가 발생하면 해당 이벤트 요소를 찾아가고(Capturing), 해당 요소부터 조상 요소까지 돌아가는 과정에서 핸들러를 발생(Bubbling)하게 됩니다.

![https://adeveloperlab.com/wp-content/uploads/2022/10/bubbling-and-capturing-min.png](https://adeveloperlab.com/wp-content/uploads/2022/10/bubbling-and-capturing-min.png)

## Event delegation

요소마다 핸들러를 할당하지 않고 **공통된 부모 요소에만 할당하여 여러 요소를 한번에** 다루게 됩니다.
