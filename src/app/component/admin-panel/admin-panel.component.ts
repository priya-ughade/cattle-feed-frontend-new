import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  standalone: false,
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css'
})
export class AdminPanelComponent {

  selectedSection: string = 'product';

  userSearch: string = '';
  products = [
    { id: 101, name: 'Laptop', category: 'Electronics', price: 1200, stock: 25 },
    { id: 102, name: 'Coffee Mug', category: 'Kitchenware', price: 15, stock: 100 },
    { id: 103, name: 'Notebook', category: 'Stationery', price: 5, stock: 200 },
    { id: 104, name: 'Smartphone', category: 'Electronics', price: 900, stock: 30 }
  ];

  settings = {
    siteName: 'My Admin Site',
    maintenanceMode: false
  };

  selectSection(section: string) {
    this.selectedSection = section;
  }

  logout() {
    alert('Logging out...');
    // Implement real logout logic here
  }

}
