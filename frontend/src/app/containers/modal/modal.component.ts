import { Component, TemplateRef, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
    selector: 'modal',
    templateUrl: './modal.component.html',
  })
  export class ModalComponent {
    @Output() modalClose : EventEmitter<any> = new EventEmitter<any>();
    //modalRef: BsModalRef;
  
    constructor( private router : Router,
      //private modalService: BsModalService,
       ) {}
      
    closeModal( $event ) {
      this.router.navigate([{outlets: {modal: null}}]);
      //this.modalRef.hide();
      this.modalClose.next($event);
    }

    //openModal(template: TemplateRef<any>) {
    //  this.modalRef = this.modalService.show(template);
    //}
  }