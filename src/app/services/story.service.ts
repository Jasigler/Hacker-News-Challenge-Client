import {Injectable} from '@angular/core'; import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Story} from '../../Models/Story';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  baseRoute = 'https://hackernews-api.azurewebsites.net/api';
  constructor(private client: HttpClient) { }

  public GetNewStoryList(): Observable<number[]> {
    return this.client.get<number[]>(`${this.baseRoute}/story/new`);
  }

  public GetStory(storyId: number): Observable<Story> {
      return this.client.get<Story>(`${this.baseRoute}/story/${storyId}`);
  }

}
