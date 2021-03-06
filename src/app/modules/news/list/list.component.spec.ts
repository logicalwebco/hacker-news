import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ListComponent } from './list.component';
import { NewsService } from '../news.service';
import { MockNewsService } from '../../../../helpers/mock-news.service';
import { MockComponent } from '../../../../helpers/mock-component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    let newsService: NewsService;

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ListComponent, MockComponent({ selector: 'mat-spinner' })],
      providers: [{ provide: NewsService, useClass: MockNewsService }]
    }).compileComponents();
    newsService = TestBed.get(NewsService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
