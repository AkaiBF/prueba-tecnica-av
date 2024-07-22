import { Routes } from '@angular/router';
import { SearcherComponent } from './views/searcher/searcher.component';
import { HotelDetailComponent } from './views/hotel-detail/hotel-detail.component';

export const routes: Routes = [
  {
    path: 'searcher',
    component: SearcherComponent
  }, {
    path: 'hotel/:id',
    component: HotelDetailComponent
  }, {
    path: '',
    redirectTo: '/searcher', pathMatch: 'full'
  }, {
    path: '**',
    redirectTo: '/searcher', pathMatch: 'full'
  }
];
