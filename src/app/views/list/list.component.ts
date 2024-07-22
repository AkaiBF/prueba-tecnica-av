import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Hotel } from '../../interfaces/hotel';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  @Input() hotels: Hotel[] = []

  constructor(private readonly router: Router) {}
  

  loadDetail(id: string): void {
    this.router.navigate(['hotel', id])
  }    
}
