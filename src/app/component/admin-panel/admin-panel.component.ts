import { Component, Output, EventEmitter } from '@angular/core';
import { ServicesService } from '../../services/services.service';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  standalone: false,
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css'
})
export class AdminPanelComponent {

  selectedSection: string = 'product';
  getProductListSubscription!: Subscription;
  addprodDataSubscription!: Subscription;
  isPopupVisible = false
  @Output() close = new EventEmitter<void>();
  userSearch: string = '';
  products: any
  settings = {
    siteName: 'My Admin Site',
    maintenanceMode: false
  };

  productForm!: FormGroup;


  constructor(private service: ServicesService, private fb: FormBuilder, private router: Router) {

    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      productType: ['', Validators.required],
      productPrice: ['', Validators.required],
      productStockQty: ['', Validators.required],
      productFiber: ['', Validators.required],
      productFat: ['', Validators.required],
      productProtein: ['', Validators.required],
      productDescription: ['', Validators.required]

    })
  }

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct() {
    this.getProductListSubscription = this.service.getproduct('api/getProd').subscribe((result: any) => {
      // console.log("The result is ==>", result)
      if (result['success']) {
        let data = result['data']
        console.log("data --->", data)
        this.products = data['productDetails']
        // console.log("the list -->", this.products)

      }

    })
  }

  selectSection(section: string) {
    this.selectedSection = section;
  }

  logout() {
    alert('Logging out...');
    // Implement real logout logic here
  }
  closePopup() {
    this.isPopupVisible = false
  }
  addData() {
    this.isPopupVisible = true
  }
  ngOnDestroy(): void {
    if (this.getProductListSubscription) {
      this.getProductListSubscription.unsubscribe()
    }
  }
  onSubmit() {
    // console.log("Formdata -->",this.productForm)
    this.addprodDataSubscription = this.service.addProduct(this.productForm.value).subscribe((result) => {
      // 
    })

    this.productForm.reset();
    this.getProduct()

  }
  onDelete(id: any) {
    console.log("Ondelete", id)
    this.service.deleteProduct(id).subscribe((newProducts: any) => {
      this.products = this.products.filter((p:any) => p.id !== id);
      this.getProduct()
    })
  }
}
