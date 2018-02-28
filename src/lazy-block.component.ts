import { Component, ViewEncapsulation, ChangeDetectionStrategy, TemplateRef, ViewChild, Host, ViewContainerRef, Inject, forwardRef } from '@angular/core';

import { LazyPageComponent } from './lazy-page.component';

@Component({
    selector: 'lazy-block',
    styles: ['lazy-block {display:block}'],
    template: '<ng-template #tpl><ng-content></ng-content></ng-template>',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class LazyBlockComponent {
    page: LazyPageComponent;
    isRender = false;
    @ViewChild('tpl') tplRef: TemplateRef<any>;
    @ViewChild('tpl', { read: ViewContainerRef }) tplVcRef: ViewContainerRef;
    constructor(
        @Host()
        @Inject(forwardRef(() => LazyPageComponent))
        page: LazyPageComponent
    ) {
        this.page = page;
    }
    render() {
        this.tplVcRef.createEmbeddedView(this.tplRef);
        this.isRender = true;
        requestAnimationFrame(() => {
            this.page.render();
        });
    }
}
