import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { RecipeIdeaList } from '@app/views/games/A18/_services/a18.interface';
import { A18Service } from '@app/views/games/A18/_services/a18.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';
import { Observable } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a18-recipe.component.html',
  providers: [DestroyService]
})

export class A18RecipeComponent extends SingleComponent implements OnInit {
  pageForm: UntypedFormGroup
  recipeControl: UntypedFormControl;
  recipes: RecipeIdeaList[];
  filteredRecipes: Observable<RecipeIdeaList[]>;

  constructor(
    protected readonly destroy$: DestroyService,
    protected route: ActivatedRoute,
    protected seoService: SeoService,
    private formBuilder: UntypedFormBuilder,
    private a18service: A18Service,
  ) {
    super(route, seoService);
    this.gameService(this.a18service, 'recipes');
    this.recipeControl = new UntypedFormControl();
    this.pageForm = this.formBuilder.group({
      filtertext: this.recipeControl,
    })
  }

  ngOnInit(): void {
    this.genericSEO(`Recipes Ideas`, `The list of recipes ideas in ${this.gameTitle}.`);
    this.getRecipes();
  }

  getRecipes() {
    this.a18service.getRecipeList(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: recipes => {
          this.error =``;
          this.recipes = recipes;
          this.filteredRecipes = this.pageForm.valueChanges.pipe(
            startWith(null as Observable<RecipeIdeaList[]>),
            map((search: any) => search ? this.filterT(search.filtertext) : this.recipes.slice())
          );
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }

  private filterT(value: string): RecipeIdeaList[] {
    let recipelist: RecipeIdeaList[] = this.recipes;

    if (!value) {
      return recipelist;
    }
    const filterValue = value.toLowerCase();
    return recipelist.filter(recipe => {
      return recipe.name.toLowerCase().includes(filterValue)
    });
  }
  identify(index, item) {
    return item.slug;
}
}