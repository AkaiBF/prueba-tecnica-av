import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearcherComponent } from './searcher.component';
import { HotelsService } from '../../services/hotels.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SearcherComponent', () => {
  let component: SearcherComponent;
  let fixture: ComponentFixture<SearcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SearcherComponent,
        HttpClientModule,
        BrowserAnimationsModule
      ],
      providers: [HotelsService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a hotels property', () => {
    expect(component.hotels).toBeDefined();
    expect(Array.isArray(component.hotels)).toBe(true);
  });

  it('should have a search method', () => {
    expect(component.search).toBeDefined();
    expect(typeof component.search).toBe('function');
  });

  it('should have a range method', () => {
    expect(component.range).toBeDefined();
    expect(typeof component.range).toBe('function');
    expect(component.range(3)).toEqual([undefined, undefined, undefined]);
  })
   
});
