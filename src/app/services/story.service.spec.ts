import {getTestBed, TestBed} from '@angular/core/testing';
import { StoryService } from './story.service';
import {HttpTestingController, HttpClientTestingModule} from '@angular/common/http/testing';
import { Story } from 'src/Models/Story';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Test} from 'tslint';


describe('StoryService', () => {
  let service: StoryService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(StoryService);
    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Returns a list of new story Ids as an observable of type number[]', () => {
    const storyIds = [24734059, 24733858, 24733848, 24733820];

    service.GetNewStoryList().subscribe(stories => {
      expect(stories).toEqual(storyIds);
      expect(typeof (stories)).toEqual(typeof (storyIds));
    });

    const request = httpMock.expectOne(`${service.baseRoute}/story/new`);
    expect(request.request.method).toBe('GET');
    request.flush(storyIds);

  });

  it('Returns a story as an observable of type Story', () => {
    const requestedStory: Story = {
      by: 'spazz959',
      descendants: 500,
      id: 42734059,
      kids: [12345678, 87654321],
      score: 20,
      time: 1602273549,
      title: 'I am a test story',
      type: 'story',
      url: 'http://www.dev.to'
    };

    service.GetStory(42734059).subscribe(story => {
      expect(story).toEqual(requestedStory);
    });

    const request = httpMock.expectOne(`${service.baseRoute}/story/42734059`);
    expect(request.request.method).toBe('GET');
    request.flush(requestedStory);
  });

  it('GetStory handles a  404 response and returns a null Story Object', () => {
    const requestedStory = new Story();
    const mockError = new HttpResponse({ status: 404 });

    service.GetStory(12345678).subscribe(story => {
      expect(request.request.body.status).toBe(mockError.status);
      expect(story).toEqual(requestedStory);
    });

    const request = httpMock.expectOne(`${service.baseRoute}/story/12345678`);
    request.event(mockError);
  });

  it('GetStory handles a 500 response and returns a null Story Object', () => {
    const requestedStory = new Story();
    const mockError = new HttpResponse({status: 500});

    service.GetStory(12345678).subscribe(story => {
      expect(request.request.body.status).toBe(mockError.status);
      expect(story).toEqual(requestedStory);
    });

    const request = httpMock.expectOne(`${service.baseRoute}/story/12345678`);
    request.event(mockError);
  });

});
