import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Product } from '../shared/user.model';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit, OnChanges {

    @Input() productDialog: boolean;
    @Input() product: Product;
    @Output() addProduct: EventEmitter<any> = new EventEmitter();
    @Output() productDialogChange = new EventEmitter<boolean>();

    submitted: boolean;

    constructor() { }

    ngOnChanges(): void {

    }

    ngOnInit(): void {
    }

    hideDialog() {
        this.productDialog = false;
        this.submitted = false;
       this.productDialogChange.emit(this.productDialog)
    }

    saveProduct() {
        this.submitted = true;

        if (this.product.name && this.product.name.trim()) {
            this.addProduct.emit(this.product)
            this.product = {};
        }
    }

}
