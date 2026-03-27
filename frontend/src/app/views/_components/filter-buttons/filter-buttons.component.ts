import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';

@Component({
    templateUrl: 'filter-buttons.component.html',
    selector: 'filter-buttons',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [...CommonImports],
})
export class FilterButtonsComponent {
    @Input() list: { ctrl: any, icon: string, activeColor?: string }[] = [];
    @Input() svg: string;
    @Input() single_only: boolean = false;
    @Input() extra_class: string = '';

    toggle(thing) {
        const og = thing.value
        if (this.single_only) {

            for (const t of this.list) {
                t.ctrl.setValue(false)
            }
        }
        thing.setValue(!og)
    }
}