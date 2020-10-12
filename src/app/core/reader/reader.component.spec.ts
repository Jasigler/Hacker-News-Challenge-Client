import {async, ComponentFixture, ComponentFixtureAutoDetect, fakeAsync, TestBed} from '@angular/core/testing';
import { ReaderComponent } from './reader.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {NgxPaginationModule} from 'ngx-pagination';
import {StoryService} from '../../services/story.service';
import {StoryComponent} from '../story/story.component';
import {DatetimePipe} from '../../pipes/datetime.pipe';
import {By} from '@angular/platform-browser';
import {of} from 'rxjs';
import {Story} from '../../../Models/Story';


describe('ReaderComponent', () => {
  let component: ReaderComponent;
  let fixture: ComponentFixture<ReaderComponent>;
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;
  let storyMock: StoryService;
  const storyList = [24734059, 24733858, 24733848, 12345678, 87654321];


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReaderComponent, StoryComponent, DatetimePipe ],
      imports: [HttpClientTestingModule, NgxPaginationModule],
      providers: [{provide: ComponentFixtureAutoDetect, useValue: true}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReaderComponent);
    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
    storyMock = new StoryService(httpClient);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Gets new story Id list on init', () => {
    const serviceResults = of(storyList);

    spyOn(storyMock, 'GetNewStoryList').and.returnValue(serviceResults);

    expect(storyMock).toHaveBeenCalledWith(component.ngOnInit());
    expect(component.newStoryIds).not.toBeNull();
  });

  it('Generates a new story component for each story Id', fakeAsync(() => {
    const serviceResults = of(storyList);

    spyOn(storyMock, 'GetNewStoryList').and.returnValue(serviceResults);

    fixture.whenRenderingDone().then(() => {
      const debugElement = fixture.debugElement.nativeElement;
      const storyElement = debugElement.querySelectorAll('app-story');
      expect(storyElement).toBeTruthy();
    });
  }));

  it('Is initialized with the expected component variables', () => {
    expect(component.newStoryIds).toBeNull();
    expect(component.storiesPerPage).toBe(10);
    expect(component.totalStories).toBeNull();
    expect(component.paginationDropdown).toBeFalse();
  });

  it('Toggles paginationDropdown when toggleDropdown is called', () => {

    component.toggleDropdown();
    expect(component.paginationDropdown).toBeTrue();
  });

  it('Updates the pagination when setStoriesPerPage is called', () => {
    component.setStoriesPerPage(20);
    expect(component.storiesPerPage).toEqual(20);

    component.setStoriesPerPage(5);
    expect(component.storiesPerPage).toEqual(5);
  });

  it('Displays a progress bar by default on component initialization', () => {
    const debugElement = fixture.debugElement.nativeElement;
    const progressBar = debugElement.querySelector('app-busy');

    expect(progressBar).toBeTruthy();
  });

  it('Loading value modified after story Ids are retrieved', () => {

    spyOn(component, 'ngOnInit');
    fixture.detectChanges();
    component.ngOnInit();

    expect(component.toggleLoading).toHaveBeenCalled();
  });
});
