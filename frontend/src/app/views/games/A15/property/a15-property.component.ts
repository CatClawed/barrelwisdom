import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Property } from '@app/views/games/A15/_services/a15.interface';
import { A15Service } from '@app/views/games/A15/_services/a15.service';
import { SeoService } from '@app/services/seo.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a15-property.component.html',
  selector: 'a15-property',
})
export class A15PropertyComponent extends SingleComponent implements OnInit {
  property: Property;

  constructor(
    protected route: ActivatedRoute,
    private a15service: A15Service,
    protected seoService: SeoService) {
    super(route, seoService);
    this.gameService(this.a15service, 'properties');
  }
  ngOnInit(): void {
    if (this.showNav) this.colset = "col-md-5 mx-auto ";
    this.a15service.getProperty(this.slug, this.language)
      .subscribe({
        next: property => {
          this.property = property;
          this.genericSEO(this.property.name, this.property.desc);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 