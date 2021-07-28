# vue-scroll-progressBar

- [Docs](#docs)
- [Screeenshot](#screenshot)



## Docs

#### register global component
```typescript
import { createApp } from "vue";
import ProgressBarSpinner from "<YOUR DIR>/scrollProgressBar.ts";

export function createMyApp() {
  const app = createApp(App);
  // ...
  app.component("v-loader", ProgressBarSpinner);

  // ...
  return app;
}
```

#### use in template
```vue
<template>
    <v-loader />
    <div class="wrapper">
      <Component1 />
      <Component2 />
    </div>
</template>
```



#### props
| Propery      | Type | Default | Required? |
| ----------- | ----------- | ----------- | ----------- |
| bgColor      | String       | #df1e2 | false |
| width   | String        | "0%" | false |
| height   | String        | "5px" | false |

## Screeenshot

![Demo Image](https://i.imgur.com/9MlXM7Q.png)
