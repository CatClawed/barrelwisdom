import { Component, inject } from '@angular/core';
import { FilterListComponent } from '@app/views/_components/filter-list/filter-list.component';
import { Property } from '@app/views/games/A15/_services/a15.interface';
import { A15Service } from '@app/views/games/A15/_services/a15.service';
import { CommonImports, MaterialFormImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { DialogUseComponent } from '@app/views/games/_prototype/dialog-use.component';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { A15PropertyComponent } from './a15-property.component';

@Component({
  templateUrl: 'a15-propertylist.component.html',
  imports: [...CommonImports, ...MaterialFormImports, A15PropertyComponent,
    FilterListComponent]
})
export class A15PropertylistComponent extends DialogUseComponent {
  protected a15service = inject(A15Service);
  filteredProperties: Observable<Property[]>;

  constructor() {
    super();
    this.component = A15PropertyComponent;
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
      bomb: false,
      heal: false,
      buff: false,
      weapon: false,
      armor: false,
      accessory: false,
    })
  }

  changeData() {
    this.gameService(this.a15service, 'properties');
    this.genericSettings(this.a15service.properties_translation[this.language],
      `The list of properties in ${this.gameTitle}.`);
    this.pageForm.reset();
    return this.a15service.getPropertyList(this.language);
  }
  override afterAssignment(): void {
    this.filteredProperties = this.pageForm.valueChanges.pipe(
      startWith(null as Observable<Property[]>),
      map((search: any) => search ? this.filterT(search.filtertext, search.bomb, search.heal, search.buff, search.weapon, search.armor, search.accessory) : this.data.slice())
    );
  }

  private filterT(value: string, bomb: boolean, heal: boolean, buff: boolean, weapon: boolean, armor: boolean, accessory: boolean): Property[] {
    this.hide = false;
    let propertylist: Property[] = this.data;
    if (bomb) {
      propertylist = propertylist.filter(property => property.bomb);
    }
    if (heal) {
      propertylist = propertylist.filter(property => property.heal);
    }
    if (buff) {
      propertylist = propertylist.filter(property => property.buff);
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
    if (!value) {
      return propertylist;
    }
    const filterValue = value.toLowerCase();
    return propertylist.filter(property => {
      return property.name.toLowerCase().includes(filterValue) || property.desc.toLowerCase().includes(filterValue)
    });
  }
}