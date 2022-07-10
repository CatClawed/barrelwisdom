import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '@app/services/seo.service';
import { Property } from '@app/views/games/A16/_services/a16.interface';
import { A16Service } from '@app/views/games/A16/_services/a16.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a16-property.component.html',
  selector: 'a16-property',
})
export class A16PropertyComponent extends SingleComponent implements OnInit {
  property: Property;

  constructor(
    protected route: ActivatedRoute,
    private a16service: A16Service,
    protected seoService: SeoService) {
    super(route, seoService);
    this.gameService(this.a16service);
    this.section = 'properties'
  }
  ngOnInit(): void {
    if (this.showNav) this.colset = "col-md-5 mx-auto ";
    this.a16service.getProperty(this.slug, this.language)
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