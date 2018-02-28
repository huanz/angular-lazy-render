import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { LazyRenderModule } from 'angular-lazy-render';

@Component({
    selector: 'app',
    template: `<lazy-page>
                <lazy-block>section-0 first render</lazy-block>
                <lazy-block>section-1</lazy-block>
                <lazy-block>section-2</lazy-block>
            </lazy-page>`
})
class AppComponent {}

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent],
    imports: [BrowserModule, LazyRenderModule]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
