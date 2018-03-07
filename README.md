# angular-lazy-render [![angular-lazy-render](https://img.shields.io/npm/v/angular-lazy-render.svg)](https://www.npmjs.com/package/angular-lazy-render)

renderng page by block

## Installation

```bash
npm install angular-lazy-render --save
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


wrap your page with `<lazy-page>`, and then block your page, wrap each page block with `<lazy-block>`


```html
<lazy-page index="1">
    <lazy-block>
        section-0<h1>{{title}}</h1>
    </lazy-block>
    <section>
        <lazy-block>
            section-1 first render
        </lazy-block>
        <lazy-block>
            section-2
        </lazy-block>
    </section>
    <lazy-block>
        <footer>section-3</footer>
    </lazy-block>
</lazy-page>
```

`index`: mark the first rendering block, default `0`

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
