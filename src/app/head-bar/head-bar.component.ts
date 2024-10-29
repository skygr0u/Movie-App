import { Component } from '@angular/core';

@Component({
  selector: 'app-head-bar',
  standalone: true,
  imports: [],
  templateUrl: './head-bar.component.html',
  styleUrl: './head-bar.component.css'
})
export class HeadBarComponent {
  onAddToWishList(): void{
    console.log('Movie added to wish list');
    alert('Movie added to wish list!');
  }

}
