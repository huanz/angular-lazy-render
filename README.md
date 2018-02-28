# angular-lazy-render

## Installation

To install this library, run:

```bash
$ npm install angular-lazy-render --save
```

## Usage

Once you have installed, you can import in your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LazyRenderModule } from 'angular-lazy-render';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LazyRenderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

```html
<!-- You can now use your library component in app.component.html -->
<h1>
  {{title}}
</h1>
<lazy-page index="1">
    <lazy-block>section-0</lazy-block>
    <lazy-block>section-1 first render</lazy-block>
    <lazy-block>section-2</lazy-block>
</lazy-page>
```

`index`: mark the block index which will first to render

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [angular-lazy-render](mailto:yhz1219@gmail.com)
