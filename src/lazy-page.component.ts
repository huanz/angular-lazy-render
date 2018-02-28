import { Component, OnChanges, SimpleChange, Input, AfterContentInit, ChangeDetectionStrategy, ContentChildren, QueryList } from '@angular/core';

import { LazyBlockComponent } from './lazy-block.component';

@Component({
    selector: 'lazy-page',
    template: '<ng-content></ng-content>',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LazyPageComponent implements OnChanges, AfterContentInit {
    @Input() index: number = 0;
    @ContentChildren(LazyBlockComponent, { descendants: true }) blocks: QueryList<LazyBlockComponent>;
    constructor() {}
    ngOnChanges(changes: { index: SimpleChange }) {
        if (changes.index && changes.index.currentValue) {
            this.index = +changes.index.currentValue;
        }
    }
    ngAfterContentInit() {
        let initBlock = this.blocks.find((item, index) => index === this.index);
        if (initBlock) {
            initBlock.render();
        } else {
            this.blocks[0].render();
            this.index = 0;
        }
    }
    render() {
        let child = this.blocks.find(child => !child.isRender);
        if (child) {
            child.render();
        }
    }
}
