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
    @Input() grid: number = 6;

    toggle(thing) {
        if (this.single_only) {
            let og = thing.value
            for (let t of this.list) {
                t.ctrl.setValue(false)
            }
            if (og == thing.value) {
                thing.setValue(!thing.value)
            }
        }
        else {
            thing.setValue(!thing.value)
        }
    }
}