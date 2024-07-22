import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelDetailComponent } from './hotel-detail.component';
import { ActivatedRoute } from '@angular/router';
import { HotelsService } from '../../services/hotels.service';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HotelDetailComponent', () => {
  let component: HotelDetailComponent;
  let fixture: ComponentFixture<HotelDetailComponent>;

  const mockActivatedRoute = {
    params: of({ id: '123' })  
  };


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HotelDetailComponent,
        HttpClientModule,
        BrowserAnimationsModule
      ],
      providers: [
        {provide: ActivatedRoute, useValue: mockActivatedRoute},
        HotelsService
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HotelDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a hotel property', () => {
    expect(component.hotel).toBeDefined();
    expect(typeof component.hotel).toBe('object');
    expect('id' in component.hotel!).toBe(true);
    expect('name' in component.hotel!).toBe(true);
    expect('image' in component.hotel!).toBe(true);
    expect('price' in component.hotel!).toBe(true);
    expect('stars' in component.hotel!).toBe(true);
    expect('rate' in component.hotel!).toBe(true);
    expect('address' in component.hotel!).toBe(true);

  });

  it('should have a range method', () => {
    expect(component.range).toBeDefined();
    expect(typeof component.range).toBe('function');
    expect(component.range(3)).toEqual([undefined, undefined, undefined]);
  })
});
