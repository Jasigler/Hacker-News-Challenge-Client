import {Component, Input, OnInit} from '@angular/core';
import {StoryService} from '../../services/story.service';
import {Story} from '../../../Models/Story';
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser';
import {faComment} from '@fortawesome/free-solid-svg-icons/faComment';
import {faStarHalfAlt} from '@fortawesome/free-solid-svg-icons/faStarHalfAlt';
import {faCalendarPlus} from '@fortawesome/free-solid-svg-icons/faCalendarPlus';
import {DatetimePipe} from '../../pipes/datetime.pipe';


@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  @Input() storyId: number;

  userIcon = faUser;
  commentIcon = faComment;
  scoreIcon = faStarHalfAlt;
  calendarIcon = faCalendarPlus;
  isLoading = true;
  currentStory: Story;

  constructor(private storyService: StoryService) { }

  ngOnInit(): void {
      this.storyService.GetStory(this.storyId).subscribe(story => {
        this.currentStory = story;
        this.toggleLoading();
      });
  }

  toggleLoading(): void {
    this.isLoading
    ? this.isLoading = false
      : this.isLoading = true;
  }

}
