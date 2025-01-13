import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-names',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      item-names works!
    </p>
  `,
  styleUrls: ['./item-names.component.css']
})
export class ItemNamesComponent {

}
