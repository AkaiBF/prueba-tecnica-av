import { Component } from '@angular/core';
import { Hotel } from '../../interfaces/hotel';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HotelsService } from '../../services/hotels.service';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-hotel-detail',
  standalone: true,
  imports: [
    RouterModule,
    FooterComponent,
    MatIconModule
  ],
  templateUrl: './hotel-detail.component.html',
  styleUrl: './hotel-detail.component.scss'
})
export class HotelDetailComponent {
  hotel?: Hotel = {
    id: '',
    name: '',
    stars: 0,
    price: 0,
    image: '',
    address: '',
    rate: 0
  }

  constructor(private readonly activatedRoute: ActivatedRoute,
              private readonly hotelSrv: HotelsService) {}
  
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.hotelSrv.getHotel(params['id']).subscribe(hotel => {
        this.hotel = hotel
        document.getElementById('nav')?.scrollIntoView()
      })
    })
  }

  range(n: number): undefined[] {
    return new Array(n)
  }
}
