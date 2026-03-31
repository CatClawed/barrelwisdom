import { Component, inject } from '@angular/core';
import { FilterButtonsComponent } from '@app/views/_components/filter-buttons/filter-buttons.component';
import { FilterListComponent } from '@app/views/_components/filter-list/filter-list.component';
import { Property } from '@app/views/games/A16/_services/a16.interface';
import { A16Service } from '@app/views/games/A16/_services/a16.service';
import { CommonImports, MaterialFormImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { DialogUseComponent } from '@app/views/games/_prototype/dialog-use.component';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { A16PropertyComponent } from './a16-property.component';

@Component({
    templateUrl: 'a16-propertylist.component.html',
    imports: [...CommonImports, ...MaterialFormImports, FilterListComponent,
        A16PropertyComponent, FilterButtonsComponent]
})
export class A16PropertylistComponent extends DialogUseComponent {
  protected a16service = inject(A16Service);
  filteredProperties: Observable<Property[]>;

  constructor() {
    super();
    this.component = A16PropertyComponent;
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
      bomb: false,
      heal: false,
      weapon: false,
      armor: false,
      accessory: false,
    })
  }

  changeData() {
    this.gameService(this.a16service, 'properties');
    this.genericSettings(this.a16service.properties_translation[this.language],
      `The list of properties in ${this.gameTitle}.`);
    this.pageForm.reset();
    return this.a16service.getPropertyList(this.language);
  }
  override afterAssignment(): void {
    this.filteredProperties = this.pageForm.valueChanges.pipe(
      startWith(null as Observable<Property[]>),
      map((search: any) => search ? this.filterT(search.filtertext, search.bomb, search.heal, search.weapon, search.armor, search.accessory) : this.data.slice())
    );
  }

  private filterT(value: string, bomb: boolean, heal: boolean, weapon: boolean, armor: boolean, accessory: boolean): Property[] {
    this.hide = false;
    let propertylist: Property[] = this.data;
    if (bomb) {
      propertylist = propertylist.filter(property => property.bomb);
    }
    if (heal) {
      propertylist = propertylist.filter(property => property.heal);
    }
    if (weapon) {
      propertylist = propertylist.filter(property => property.weapon);
    }
    if (armor) {
      propertylist = propertylist.filter(property => property.armor);
    }
    if (accessory) {
      propertylist = propertylist.filter(property => property.accessory);
    }
    if (value) {
      const filterValue = value.toLowerCase();
      return propertylist.filter(property => {
        return property.name.toLowerCase().includes(filterValue) || property.desc.toLowerCase().includes(filterValue)
      });
    }
    return propertylist;
  }
}