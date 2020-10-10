import {async, ComponentFixture, ComponentFixtureAutoDetect, TestBed} from '@angular/core/testing';
import { ReaderComponent } from './reader.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {NgxPaginationModule} from 'ngx-pagination';
import {StoryService} from '../../services/story.service';
import {Test} from 'tslint';
import {Story} from '../../../Models/Story';
import {Observable} from 'rxjs';
import {StoryComponent} from '../story/story.component';

describe('ReaderComponent', () => {
  let component: ReaderComponent;
  let fixture: ComponentFixture<ReaderComponent>;
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;
  let storyMock: StoryService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReaderComponent ],
      imports: [HttpClientTestingModule, NgxPaginationModule],
      providers: [{provide: ComponentFixtureAutoDetect, useValue: true}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReaderComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();  <-- Do I need this if I'm declaring the provider above?
    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
    storyMock = new StoryService(httpClient);
  });

  afterEach(() => {
    storyMock = null;
    component = null;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Gets new story Id list on init', () => {
    const serviceResults = new Observable<number[]>();

    component.ngOnInit();
    spyOn(storyMock, 'GetNewStoryList').and.returnValue(serviceResults);
    expect(component.newStoryIds).not.toBeNull();

  });

  it('Generates a new story component for each story Id', () => {
    const serviceResults = new Observable<number[]>();

    component.ngOnInit();
    spyOn(storyMock, 'GetNewStoryList').and.returnValue(serviceResults);

  });
});
