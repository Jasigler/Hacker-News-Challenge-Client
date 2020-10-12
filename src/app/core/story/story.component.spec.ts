import {async, ComponentFixture, ComponentFixtureAutoDetect, fakeAsync, TestBed} from '@angular/core/testing';

import { StoryComponent } from './story.component';
import {HttpClient} from '@angular/common/http';
import {StoryService} from '../../services/story.service';
import {Story} from '../../../Models/Story';
import {Test} from 'tslint';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {DatetimePipe} from '../../pipes/datetime.pipe';
import {of} from 'rxjs';
import createSpy = jasmine.createSpy;

describe('StoryComponent', () => {
  let component: StoryComponent;
  let fixture: ComponentFixture<StoryComponent>;
  let httpClient: HttpClient;
  let storyMock: StoryService;
  const testStory: Story = {
    by: 'HnUser12234',
    descendants: 12,
    id: 12345678,
    kids: [23456789, 34567890],
    score: 1234,
    time: 1602464280,
    title: 'Test tile',
    type: 'story',
    url: 'https://www.example.com/'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryComponent, DatetimePipe ],
      imports: [HttpClientTestingModule],
      providers: [{provide: ComponentFixtureAutoDetect, useValue: true}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryComponent);
    httpClient = TestBed.inject(HttpClient);
    storyMock = new StoryService(httpClient);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Initializes with the proper component values', () => {
    expect(component.isLoading).toBeTrue();
    expect (component.currentStory).toBeUndefined();
  });

  it('Retrieves and assigns the story on initialization', () => {
      spyOn(storyMock, 'GetStory').and.returnValue(of(testStory));
      fixture.detectChanges();
      component.ngOnInit();

      fixture.whenStable().then(() => {
        expect(storyMock.GetStory).toHaveBeenCalled();
        expect(component.currentStory).toEqual(testStory);
      });
  });
});
