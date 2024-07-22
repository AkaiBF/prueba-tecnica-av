import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HotelsService } from '../../services/hotels.service';
import { Hotel } from '../../interfaces/hotel';
import { FooterComponent } from '../../components/footer/footer.component';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-searcher',
  standalone: true,
  imports: [
    FooterComponent,
    ListComponent,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSliderModule,
    ReactiveFormsModule
  ],
  templateUrl: './searcher.component.html',
  styleUrl: './searcher.component.scss'
})
export class SearcherComponent {

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    stars: new FormArray([
      new FormControl(true),
      new FormControl(true),
      new FormControl(true),
      new FormControl(true),
      new FormControl(true)
    ]),
    price: new FormControl(0),
    rate: new FormControl(0)
  })
  hotels: Hotel[] = []
  maxPrice: number = 0

  constructor(private readonly hotelSrv: HotelsService) {
    this.hotelSrv.getHotels().subscribe(hotels => {
      this.hotels = hotels
      this.maxPrice = Math.floor(hotels.reduce((max, hotel) => Math.max(max, hotel.price), 0))
      this.form.get('price')?.setValue(this.maxPrice)
    })
  }

  range(n: number) {
    return new Array(n)
  }

  search(): void {
    // Filter by rate
    let filterQuery = '?rate_gte=' + this.form.value.rate
    // Filter by price
    filterQuery += '&price_lte=' + this.form.value.price
    this.hotelSrv.getFilteredHotels(filterQuery).subscribe(hotels => {
      // Filter by stars
      let starArray: number[] = []
      for(let star in this.form.value.stars) {
        if(this.form.value.stars[star]) {
          starArray.push(+star+1)
        }
      }
      hotels = hotels.filter(x => starArray.includes(x.stars))
      // FilterByName
      this.hotels = hotels.filter(x => x.name.toLowerCase().includes(this.form.value.name.toLowerCase()))
      let list = document.getElementById('list')
      list!.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

}
