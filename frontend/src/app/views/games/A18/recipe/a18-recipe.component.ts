import { Dialog } from '@angular/cdk/dialog';
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { FilterListComponent } from '@app/views/_components/filter-list/filter-list.component';
import { ItemComponent } from '@app/views/_components/item/item.component';
import { RecipeIdeaList } from '@app/views/games/A18/_services/a18.interface';
import { A18Service } from '@app/views/games/A18/_services/a18.service';
import { CommonImports, MaterialFormImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { DialogUseComponent } from '../../_prototype/dialog-use.component';
import { A18ItemComponent } from '../item/a18-item.component';

@Component({
  templateUrl: 'a18-recipe.component.html',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports, ...MaterialFormImports, FilterListComponent, ItemComponent]
})

export class A18RecipeComponent extends DialogUseComponent {
  filteredRecipes: Observable<RecipeIdeaList[]>;

  constructor(
    protected cdkDialog: Dialog,
    protected router: Router,
    protected route: ActivatedRoute,
    protected location: Location,
    protected seoService: SeoService,
    protected breadcrumbService: BreadcrumbService,
    private formBuilder: UntypedFormBuilder,
    private a18service: A18Service,
    protected readonly destroy$: DestroyService) {
      super(destroy$, router, route, location, seoService, breadcrumbService, cdkDialog);
      this.component = A18ItemComponent
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
    })
  }

  changeData() {
    this.gameService(this.a18service, 'recipe-ideas');
    this.genericSettings(`Recipe Ideas`, `The list of recipes ideas in ${this.gameTitle}.`);
    this.pageForm.reset();
    return this.a18service.getRecipeList(this.language);
  }

  afterAssignment(): void {
    this.filteredRecipes = this.pageForm.valueChanges.pipe(
      startWith(null as Observable<RecipeIdeaList[]>),
      map((search: any) => search ? this.filterT(search.filtertext) : this.data.slice())
    );
  }

  private filterT(value: string): RecipeIdeaList[] {
    this.hide = false;
    let recipelist: RecipeIdeaList[] = this.data;

    if (!value) {
      return recipelist;
    }
    const filterValue = value.toLowerCase();
    return recipelist.filter(recipe => {
      return recipe.name.toLowerCase().includes(filterValue)
    });
  }
}