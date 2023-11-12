import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { RecipeIdeaList } from '@app/views/games/A18/_services/a18.interface';
import { A18Service } from '@app/views/games/A18/_services/a18.service';
import { FilterableComponent } from '@app/views/games/_prototype/filterable.component';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  templateUrl: 'a18-recipe.component.html',
  providers: [DestroyService]
})

export class A18RecipeComponent extends FilterableComponent {
  filteredRecipes: Observable<RecipeIdeaList[]>;

  constructor(
    protected readonly destroy$: DestroyService,
    protected route: ActivatedRoute,
    protected seoService: SeoService,
    private formBuilder: UntypedFormBuilder,
    private a18service: A18Service) {
    super(destroy$, route, seoService);
    this.pageForm = this.formBuilder.nonNullable.group({
      filtertext: '',
    })
  }

  changeData() {
    this.gameService(this.a18service, 'recipes');
    this.genericSEO(`Recipes Ideas`, `The list of recipes ideas in ${this.gameTitle}.`);
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