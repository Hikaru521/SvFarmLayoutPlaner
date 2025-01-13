import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemNamesComponent } from '../item-names/item-names.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ItemNamesComponent],
  template: `
       <section>
      <form>
        <input type="text" placeholder="Filter by item">
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-item-names></app-item-names>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
